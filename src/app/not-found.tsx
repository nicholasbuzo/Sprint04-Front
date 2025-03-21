const notFound = () =>{
    return(
        <>
            <div className="bg-sky-800 flex rounded-full justify-baseline mt-60 place-items-center">
                <div><img src="/imagens/404.png" alt="Erro 404" className="w-80 ml-50"/></div>
                <div className="text-white text-4xl font-bold ml-5">Opa! Não encontramos a página procurada!</div>
            </div>
        </>
    )
}
export default notFound;