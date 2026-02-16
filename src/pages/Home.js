import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-opacity-90" style={{ backgroundColor: '#020c1b' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <span className="inline-block text-yellow-400 font-bold tracking-widest uppercase text-sm mb-4 animate-pulse">
            Local & International Supply Chain
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Premium Disposable Paper Packaging<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">for Global Brands</span>
          </h1>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            We deal in all kinds of high-quality packaging items, including coffee cups, disposable cups, paper cups, and ice-coffee cups.
            Our products are durable, hygienic, and perfect for all food & beverage businesses.
            Your brand deserves packaging that stands out.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/shop" className="px-8 py-4 bg-yellow-500 text-black font-bold rounded hover:bg-white transition shadow-[0_0_20px_rgba(255,193,7,0.4)]">
              <i className="fas fa-boxes mr-2"></i> Browse Catalog
            </Link>
            <Link to="/contact" className="px-8 py-4 border border-gray-400 text-white rounded hover:border-yellow-400 hover:text-yellow-400 transition">
              <i className="fas fa-file-invoice mr-2"></i> Request Wholesale Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold" style={{ color: '#0a192f' }}>Industries Using Our Disposable Products</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Link to="/shop" className="group block text-center">
            <div className="h-48 rounded-2xl overflow-hidden mb-4 shadow-lg relative bg-gray-300 flex items-center justify-center">
              <div className="text-5xl group-hover:scale-110 transition duration-500">☕</div>
            </div>
            <h3 className="font-bold text-lg">Coffee Cups</h3>
          </Link>
          <Link to="/shop" className="group block text-center">
            <div className="h-48 rounded-2xl overflow-hidden mb-4 shadow-lg relative bg-gray-300 flex items-center justify-center">
              <div className="text-5xl group-hover:scale-110 transition duration-500">🍦</div>
            </div>
            <h3 className="font-bold text-lg">Ice Cream Cups</h3>
          </Link>
          <Link to="/shop" className="group block text-center">
            <div className="h-48 rounded-2xl overflow-hidden mb-4 shadow-lg relative bg-gray-300 flex items-center justify-center">
              <div className="text-5xl group-hover:scale-110 transition duration-500">🥤</div>
            </div>
            <h3 className="font-bold text-lg">Juice Cups</h3>
          </Link>
          <Link to="/shop" className="group block text-center">
            <div className="h-48 rounded-2xl overflow-hidden mb-4 shadow-lg relative bg-gray-300 flex items-center justify-center">
              <div className="text-5xl group-hover:scale-110 transition duration-500">🍿</div>
            </div>
            <h3 className="font-bold text-lg">Popcorn Boxes</h3>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">📦</div>
              <h3 className="text-xl font-bold mb-2">Quality Products</h3>
              <p className="text-gray-600">Premium packaging materials for all your needs</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick and reliable shipping to your location</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-2">Secure Payments</h3>
              <p className="text-gray-600">Safe and encrypted payment processing</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-white py-16 text-center" style={{ backgroundColor: '#0a192f' }}>
        <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
        <p className="text-gray-300 mb-8">Browse our products and place your order today</p>
        <Link to="/shop" className="inline-block px-8 py-3 bg-yellow-500 text-black font-bold rounded hover:bg-white transition">
          Get Started
        </Link>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
