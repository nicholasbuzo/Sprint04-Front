'use client';
import React, { useState } from 'react';

interface ScanResult {
  estado: string;
  temperatura: number;
  manutencoes: {
    total: number;
    lista: string[];
  };
  ultimaVarredura: string;
}

const Varredura = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);

  const iniciarVarredura = () => {
    setIsScanning(true);
    setTimeout(() => {
      const resultado: ScanResult = {
        estado: "Operando Normalmente",
        temperatura: 35.5,
        manutencoes: {
          total: 3,
          lista: [
            "Troca de trilhos",
            "Ajuste de parafusos",
            "Limpeza geral"
          ]
        },
        ultimaVarredura: new Date().toLocaleDateString('pt-BR')
      };

      setScanResult(resultado);
      setIsScanning(false);
    }, 3000);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-white">Varredura da Via</h1>

      <div className="mb-8">
        <button
          onClick={iniciarVarredura}
          disabled={isScanning}
          className={`px-6 py-3 rounded-lg font-bold text-white 
            ${isScanning ? 'bg-gray-400' : 'bg-sky-950 hover:bg-sky-900'}`}
        >
          {isScanning ? 'Escaneando...' : 'Iniciar Varredura'}
        </button>
      </div>

      {isScanning && (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-950 mx-auto"></div>
          <p className="text-white mt-4">Iniciando varredura da via...</p>
        </div>
      )}

      {scanResult && !isScanning && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          <div className="bg-slate-800 p-4 rounded-lg shadow">
          <div className=" text-white font-bold text-lg mb-2">Manutenções Necessárias</div>
            <p className="text-2xl font-bold text-yellow-600">
              {scanResult.manutencoes.total}
            </p>
            <ul className="mt-2 text-gray-200">
              {scanResult.manutencoes.lista.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Varredura;