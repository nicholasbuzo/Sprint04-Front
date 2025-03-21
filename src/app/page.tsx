export default function Home() {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-white">Status da Via Férrea</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-slate-800 text-white p-4 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2">Estado da Via</h3>
          <div className="flex items-center">
            <div className="h-4 w-4 rounded-full bg-green-500 mr-2"></div>
            <span>Operando Normalmente</span>
          </div>
          <p className="mt-2 text-gray-200">
            Última inspeção: 20/03/2024
          </p>
        </div>

        <div className="bg-slate-800 text-white p-4 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2">Manutenções Pendentes</h3>
          <p className="text-2xl font-bold text-yellow-600">3</p>
          <ul className="mt-2 text-gray-200">
            <li>• Troca de trilhos</li>
            <li>• Ajuste de parafusos</li>
            <li>• Limpeza geral</li>
          </ul>
        </div>

        <div className="bg-slate-800 text-white p-4 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2">Temperatura da Via</h3>
          <p className="text-2xl font-bold">35.5°C</p>
          <p className="mt-2 text-gray-200">
            Status: Temperatura Normal
          </p>
        </div>
      </div>
    </div>
  );
};