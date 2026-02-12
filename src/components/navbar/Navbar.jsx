import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <div className="navbar-logo">
          <span>&lt;/&gt;</span> Portfolio
        </div>

        {/* BOTÓN HAMBURGER */}
        <div
          className={`hamburger ${open ? 'active' : ''}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* LINKS */}
        <nav className={`navbar-links ${open ? 'open' : ''}`}>
          <Link to="/" onClick={() => setOpen(false)}>
            Inicio
          </Link>

          <Link to="/projects" onClick={() => setOpen(false)}>
            Proyectos
          </Link>

          <Link to="/about" onClick={() => setOpen(false)}>
            Sobre mí
          </Link>

          <Link to="/contact" onClick={() => setOpen(false)}>
            Contacto
          </Link>
        </nav>

      </div>
    </header>
  )
}
