import { NavLink } from "react-router-dom";
import './Header.scss'

function Header() {
  return (
    <>
    <header className="header">
      <div className="header-wrapper">
        <a href="" className="header-link">Victor Hugo Morales Herrera</a>
        <nav className="header-nav">
          <NavLink
                to="/"
                 className={({ isActive }) =>
                    `header-nav-item ${isActive ? "header-nav-item-active" : ""}`
                }
            >
                Home
          </NavLink>
          <NavLink
                to="/blog/"
                 className={({ isActive }) =>
                    `header-nav-item ${isActive ? "header-nav-item-active" : ""}`
                }
            >
                Blog
          </NavLink>
          <NavLink
                to="/cv/"
                 className={({ isActive }) =>
                    `header-nav-item ${isActive ? "header-nav-item-active" : ""}`
                }
            >
                CV
          </NavLink>
          <NavLink
                to="/projectos/"
                 className={({ isActive }) =>
                    `header-nav-item ${isActive ? "header-nav-item-active" : ""}`
                }
            >
                Projectos
          </NavLink>
          <NavLink
                to="/contacto/"
                 className={({ isActive }) =>
                    `header-nav-item ${isActive ? "header-nav-item-active" : ""}`
                }
            >
                Contacto
          </NavLink>
        
        </nav>
      </div>
    </header>
    <div className="header-space"></div>
    </>
  )
}

export default Header
