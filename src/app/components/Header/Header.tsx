import Link from "next/link";

const Header = () => {
  return (
        <header className="bg-sky-950 text-white text-xl">
        <div className="container mx-auto flex justify-between items-center py-2">
          <nav>
            <ul className="flex space-x-6 items-center h-16">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/Escanear" className="hover:text-blue-400 transition-colors">
                  Varredura
                </Link>
              </li>
              <li>
                <Link href="/Conta" className="hover:text-blue-400 transition-colors">
                  Conta
                </Link>
              </li>
            </ul>
          </nav>
  
          <div className="flex items-center space-x-3">
            <span className="text-xl font-bold">TrackGuard</span>
            <img src="/imagens/logo.png" alt="TrackGuard Logo" className="w-16 h-16 object-contain" />
          </div>
        </div>
      </header>
  )
}
export default Header
