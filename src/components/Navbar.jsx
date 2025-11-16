import { Link } from 'react-router-dom'

export default function Navbar() {
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
        <Link to="/checkout">Checkout</Link>
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









