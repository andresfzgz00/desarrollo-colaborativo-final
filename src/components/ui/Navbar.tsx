import { PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar({ children }: PropsWithChildren) {
  const isLinkActive = ({ isActive }: {isActive: boolean}) => {
    return "nav-link" + (isActive ? " active" : "");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
        <div className="container">
          <NavLink to="#" className="navbar-brand">
            Navbar
          </NavLink>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/alumnos" className={isLinkActive}>
                  Alumnos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/materias" className={isLinkActive}>
                  Materias
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/inscripciones" className={isLinkActive}>
                  Inscripción de Alumnos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/calificaciones" className={isLinkActive}>
                  Captura de calificaciones
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">{children}</div>
    </>
  );
}
