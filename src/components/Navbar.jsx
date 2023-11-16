import { Link } from 'react-router-dom'
import Logo from '../media/logoBN.png'

export const Navbar = () => {
  return (
    <nav className="hero-content flex items-start justify-between w-full h-screen">
      <a href="/"><img src={Logo} width="150px" alt="Aquacivis" /></a>
      <Link to="/login" className="btn btn-outline text-white rounded-md font-mono hover:bg-slate-100 hover:text-black hover:border-none topButton">Iniciar sesión</Link>
    </nav>
  )
}
