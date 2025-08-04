import { Link } from 'react-router-dom'
import { Navigation } from 'lucide-react'

export function Navbar() {
  return (
    <nav className="bg-white shadow p-2 flex space-x-4 sticky top-0 z-10">
      <Link to="/" className="text-lg font-bold flex items-center">
        <Navigation className="mr-1" />Dashboard
      </Link>
      <Link to="/schedule" className="hover:underline">Plan Semanal</Link>
      <Link to="/calendar" className="hover:underline">Calendario</Link>
      <Link to="/routine" className="hover:underline">Rutinas</Link>
      <Link to="/supplements" className="hover:underline">Suplementos</Link>
      <Link to="/tracker" className="hover:underline">Seguimiento</Link>
      <Link to="/shopping" className="hover:underline">Compra</Link>
    </nav>
  )
}
