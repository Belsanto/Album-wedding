import { NavLink } from 'react-router-dom'

function Navbar() {
  const baseLink =
    'text-gray-700 hover:text-primary transition font-eb-garamond text-sm md:text-base'
  const activeLink =
    'text-primary font-semibold underline underline-offset-4'

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white bg-opacity-60 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <h1 className="text-xl font-great-vibes text-primary">S & E</h1>
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? `${baseLink} ${activeLink}` : baseLink
              }
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/album"
              className={({ isActive }) =>
                isActive ? `${baseLink} ${activeLink}` : baseLink
              }
            >
              Álbumes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/fotos"
              className={({ isActive }) =>
                isActive ? `${baseLink} ${activeLink}` : baseLink
              }
            >
              Fotos Compartidas
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/videos"
              className={({ isActive }) =>
                isActive ? `${baseLink} ${activeLink}` : baseLink
              }
            >
              Videos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="invitacion"
              end
              className={({ isActive }) =>
                isActive ? `${baseLink} ${activeLink}` : baseLink
              }
            >
              Tarjeta de Invitacion
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
