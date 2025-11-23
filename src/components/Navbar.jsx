// src/components/Navbar.jsx
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Navbar() {
  const { totalItems } = useCart()

  return (
    <div className="navbar bg-base-200 px-4">
      <div className="flex-1">
        <Link className="text-xl font-bold" to="/">
          Clothify
        </Link>
      </div>
      <div className="flex-none gap-4 flex items-center">
        <Link to="/men">Men</Link>
        <Link to="/women">Women</Link>
        <Link to="/kids">Kids</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        {/* Checkout link with cart icon + counter */}
        <Link to="/checkout" className="relative flex items-center gap-2">
          <span className="text-sm">Checkout</span>
          <span className="relative inline-flex items-center justify-center">
            <span className="text-lg" role="img" aria-label="cart">
              🛒
            </span>
            {totalItems > 0 && (
              <span className="badge badge-xs badge-primary absolute -top-2 -right-3">
                {totalItems}
              </span>
            )}
          </span>
        </Link>

        <Link to="/login" className="btn btn-sm">
          Login
        </Link>
        <Link to="/signup" className="btn btn-ghost btn-xs">
          Sign Up
        </Link>
      </div>
    </div>
  )
}



