import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar({ cartCount = 0 }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 text-white shadow-xl" style={{ backgroundColor: '#0a192f' }}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <img 
            src="https://via.placeholder.com/48?text=QR&bg=ffffff&color=000000" 
            alt="QR Logo" 
            className="h-12 bg-white rounded-lg p-1"
          />
          <div className="leading-tight hidden md:block">
            <h1 className="font-extrabold text-xl tracking-widest">QR PACKAGES</h1>
            <p className="text-[10px]" style={{ color: '#FFC107' }}>By QR Group</p>
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-8 text-sm font-semibold tracking-wide">
          <Link to="/" style={{ color: '#FFC107' }}>HOME</Link>
          <Link to="/shop" className="hover:text-yellow-300 transition">SHOP PRODUCTS</Link>
          <Link to="/process" className="hover:text-yellow-300 transition">MANUFACTURING</Link>
          <Link to="/contact" className="hover:text-yellow-300 transition">CONTACT</Link>
        </div>

        <Link to="/shop" className="relative p-2 hover:text-yellow-300 transition">
          <i className="fas fa-shopping-cart text-xl"></i>
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 flex items-center justify-center rounded-full w-5 h-5 text-xs font-bold" style={{ backgroundColor: '#FFC107', color: '#0a192f' }}>
              {cartCount}
            </span>
          )}
        </Link>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl">
          <i className={`fas fa-${menuOpen ? 'times' : 'bars'}`}></i>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
