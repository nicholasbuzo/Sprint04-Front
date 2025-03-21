const Contato = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-white">Escreva para nós</h1>

      <div className="bg-slate-800 p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
        <form className="space-y-4">
          <div>
            <textarea
              className="w-full p-3 rounded-lg bg-slate-700 text-white"
              rows={5}
              placeholder="Digite sua mensagem..."
            />
          </div>
          <button type="submit" className="w-full bg-sky-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
            Enviar Mensagem
          </button>
        </form>
      </div>

      <div className="mt-12 text-center text-white">
        <h2 className="text-xl font-semibold mb-4">Ou entre em contato conosco</h2>
        <p className="text-lg mb-6">(11) 3048-5900</p>
        
        <div className="relative w-64 h-64 mx-auto rounded-lg overflow-hidden">
          <img src="/imagens/logoccr.png" alt="Logo" className=" object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Contato;
