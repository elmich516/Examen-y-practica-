import { useState } from 'react'

type Props = {
  seccionActiva: string
  onNavegar: (sec: string) => void
}

export default function Navbar({ seccionActiva, onNavegar }: Props) {
  const [menuAbierto, setMenuAbierto] = useState(false)

  const secciones = ['Estudiantes', 'Cursos', 'Reportes']

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        <span className="navbar-brand">MiApp</span>

        <button
          className="navbar-toggler"
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${menuAbierto ? 'show' : ''}`}>
          <ul className="navbar-nav">
            {secciones.map(sec => (
              <li key={sec} className="nav-item">
                <button
                  className={`nav-link btn btn-link ${
                    seccionActiva === sec ? 'active' : ''
                  }`}
                  onClick={() => onNavegar(sec)}
                >
                  {sec}
                </button>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </nav>
  )
}