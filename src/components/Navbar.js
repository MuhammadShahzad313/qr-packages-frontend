import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar({ isAuthenticated, user, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-slate-900 text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <div className="leading-tight">
            <h1 className="font-extrabold text-xl tracking-widest">QR PACKAGES</h1>
            <p className="text-[10px] text-yellow-500 uppercase">E-Commerce</p>
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-6 text-sm font-semibold">
          <Link to="/" className="hover:text-yellow-500 transition">HOME</Link>
          <Link to="/shop" className="hover:text-yellow-500 transition">SHOP</Link>
          <Link to="/contact" className="hover:text-yellow-500 transition">CONTACT</Link>
        </div>

        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <>
              <Link to="/orders" className="text-sm hover:text-yellow-500 transition">Orders</Link>
              <span className="text-sm text-gray-300">{user?.name}</span>
              <button onClick={onLogout} className="bg-red-600 px-4 py-2 rounded hover:bg-red-700">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-sm hover:text-yellow-500 transition">Login</Link>
              <Link to="/register" className="bg-yellow-500 text-navy px-4 py-2 rounded font-bold hover:bg-yellow-600">Sign Up</Link>
            </>
          )}
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-slate-800 px-4 py-3 space-y-2">
          <Link to="/" className="block text-sm hover:text-yellow-500">HOME</Link>
          <Link to="/shop" className="block text-sm hover:text-yellow-500">SHOP</Link>
          <Link to="/contact" className="block text-sm hover:text-yellow-500">CONTACT</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
