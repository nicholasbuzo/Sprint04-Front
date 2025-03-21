const ManutencaoPage = () => {
  // Dados fictícios dos usuários responsáveis pela manutenção
  const usuarios = [
    {
      id: 1,
      nome: "João Victor Ignacio Madella",
      cargo: "RM - 561007",
      foto: "/imagens/integrante1.png"  // Substitua pelo caminho real da foto
    },
    {
      id: 2,
      nome: "Nicholas Albuquerque Buzo",
      cargo: "RM - 561082",
      foto: "/imagens/integrante2.png"  // Substitua pelo caminho real da foto
    },
    {
      id: 3,
      nome: "Tiago Gonçalves Costa",
      cargo: "RM - 559742",
      foto: "/imagens/integrante3.png"  // Substitua pelo caminho real da foto
    }
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-white">
        Integrantes do grupo
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {usuarios.map((usuario) => (
          <div key={usuario.id} className="p-6 flex flex-col items-center">
            <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
              <img src={usuario.foto} alt={`Foto de ${usuario.nome}`} className="object-cover"/>
            </div>

            <h2 className="text-xl font-bold text-white mb-2">
              {usuario.nome}
            </h2>
            <p className="text-white text-center">
              {usuario.cargo}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManutencaoPage;