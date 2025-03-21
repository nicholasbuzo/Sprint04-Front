'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const Conta = () => {
  const router = useRouter();

  const usuario = {
    nome: "Nicholas Buzo",
    email: "nicholas@gmail.com",
    foto: "/imagens/integrante2.png"
  };

  const handleLogout = () => {
    router.push('/Login');
  };

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-md mx-auto bg-slate-800 rounded-lg shadow-lg p-6">
        <div className="flex justify-center mb-4">
          <div className="relative w-32 h-32 rounded-full overflow-hidden">
            <img src={usuario.foto} alt="Foto do usuário" className="object-cover"/>
          </div>
        </div>

        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-white mb-2">
            {usuario.nome}
          </h1>
          <p className="text-gray-200">
            {usuario.email}
          </p>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Sair
          </button>
        </div>
      </div>
    </div>
  );
};

export default Conta;