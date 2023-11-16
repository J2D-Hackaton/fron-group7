import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="flex items-start justify-between w-full h-screen p-12">
      <span className="text-slate-100 text-3xl font-bold tracking-wide">AQUACIVIS</span>
      <Link to="/login" className="btn btn-outline text-white rounded-md font-mono hover:bg-slate-100 hover:text-black hover:border-none">Iniciar sesión</Link>
    </nav>
  )
}
