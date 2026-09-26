import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

export default function Navbar() {
  const { totalItems } = useCart()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  return (
    <>
      <header className="navbar">
        <div className="navbar-inner container">
          <Link to="/" className="logo">Aurelia</Link>
          <nav className="nav-links">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
          <div className="nav-right">
            <Link to="/cart" className="cart-link">
              Cart
              {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
            </Link>
            <button 
              className={`hamburger ${isMenuOpen ? 'open' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-links">
          <NavLink to="/" end style={{ transitionDelay: '100ms' }}>Home</NavLink>
          <NavLink to="/shop" style={{ transitionDelay: '150ms' }}>Shop</NavLink>
          <NavLink to="/about" style={{ transitionDelay: '200ms' }}>About</NavLink>
          <NavLink to="/contact" style={{ transitionDelay: '250ms' }}>Contact</NavLink>
        </nav>
      </div>
    </>
  )
}
