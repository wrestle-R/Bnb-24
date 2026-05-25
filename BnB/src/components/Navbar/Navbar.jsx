import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import './Navbar.css'

function Navbar() {
  const { isAuthenticated, logout } = useAuth()

  return (
    <header className="nav-shell">
      <nav className="content-wrap nav-bar">
        <Link className="brand" to="/">
          ETTARRA
        </Link>

        <div className="nav-links">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/events">Events</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <div className="nav-auth">
          <ThemeToggle />
          {isAuthenticated ? (
            <button type="button" onClick={logout} className="nav-auth-btn">
              Logout
            </button>
          ) : (
            <>
              <NavLink className="nav-auth-btn" to="/login">
                Login
              </NavLink>
              <NavLink className="nav-auth-btn" to="/signup">
                Sign up
              </NavLink>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
