import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-slate-900 to-slate-800 text-white flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Premium Disposable Packaging</h1>
          <p className="text-lg text-gray-300 mb-8">Quality packaging solutions for your business</p>
          <Link to="/shop" className="bg-yellow-500 text-black px-8 py-3 rounded font-bold hover:bg-yellow-600">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">📦</div>
            <h3 className="text-xl font-bold mb-2">Quality Products</h3>
            <p className="text-gray-600">Premium packaging materials for all your needs</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Quick and reliable shipping to your location</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold mb-2">Secure Payments</h3>
            <p className="text-gray-600">Safe and encrypted payment processing</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
        <p className="text-gray-300 mb-8">Browse our products and place your order today</p>
        <Link to="/shop" className="bg-yellow-500 text-black px-8 py-3 rounded font-bold hover:bg-yellow-600">
          Get Started
        </Link>
      </section>
    </div>
  );
}

export default Home;
