import { useState } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar-container">

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
          <a href="/" onClick={() => setOpen(false)}>Inicio</a>
          <a href="/proyectos" onClick={() => setOpen(false)}>Proyectos</a>
          <a href="/acerca-de-mi" onClick={() => setOpen(false)}>Sobre mí</a>
          <a href="/contact" onClick={() => setOpen(false)}>Contacto</a>
        </nav>

      </div>
    </header>
  )
}
