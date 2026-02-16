import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div className="bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <header className="relative h-[85vh] flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#020c1b' }}>
        <img 
          src="https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=1200&h=900&fit=crop" 
          alt="Packaging Warehouse"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <span className="font-bold tracking-[0.15em] uppercase text-sm mb-4 block animate-pulse" style={{ color: '#FFC107' }}>
            Local & International Supply Chain
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Premium Disposable Paper Packaging<br /> 
            for <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-200">Global Brands</span>
          </h1>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            We deal in all kinds of high-quality packaging items, including coffee cups, disposable cups, paper cups, and ice-coffee cups.
            Our products are durable, hygienic, and perfect for all food & beverage businesses.
            Your brand deserves packaging that stands out.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/shop" className="px-8 py-4 text-black font-bold rounded hover:bg-white transition shadow-[0_0_20px_rgba(255,193,7,0.4)]" style={{ backgroundColor: '#FFC107' }}>
              <i className="fas fa-boxes mr-2"></i>Browse Catalog
            </Link>
            <a href="/contact" className="px-8 py-4 border border-gray-500 text-white rounded hover:border-brandGold hover:text-brandGold transition" style={{ borderColor: 'rgb(107, 114, 128)' }}>
              <i className="fas fa-file-invoice mr-2"></i>Request Wholesale Quote
            </a>
          </div>
        </div>
      </header>

      {/* Industries Section */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold" style={{ color: '#0a192f' }}>Industries Using Our Disposable Products</h2>
          <div className="w-20 h-1 mx-auto mt-4" style={{ backgroundColor: '#FFC107' }}></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Link to="/shop" className="group block text-center">
            <div className="h-48 rounded-2xl overflow-hidden mb-4 shadow-lg relative">
              <img src="https://images.unsplash.com/photo-1559056199-641a0ac8b3f7?w=400&h=400&fit=crop" alt="Coffee" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <span className="text-white font-bold border border-white px-4 py-2 rounded">View</span>
              </div>
            </div>
            <h3 className="font-bold text-lg">Coffee (Cups)</h3>
          </Link>
          <Link to="/shop" className="group block text-center">
            <div className="h-48 rounded-2xl overflow-hidden mb-4 shadow-lg relative">
              <img src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=400&fit=crop" alt="Ice cream" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
            </div>
            <h3 className="font-bold text-lg">Ice cream (cups)</h3>
          </Link>
          <Link to="/shop" className="group block text-center">
            <div className="h-48 rounded-2xl overflow-hidden mb-4 shadow-lg relative">
              <img src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop" alt="Third Culture" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
            </div>
            <h3 className="font-bold text-lg">Third Culture Coffee</h3>
          </Link>
          <Link to="/shop" className="group block text-center">
            <div className="h-48 rounded-2xl overflow-hidden mb-4 shadow-lg relative">
              <img src="https://images.unsplash.com/photo-1585647347385-d02cafb90d9a?w=400&h=400&fit=crop" alt="Popcorn" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
            </div>
            <h3 className="font-bold text-lg">Cinemas (Popcorn)</h3>
          </Link>
        </div>
      </section>

      {/* Manufacturing Section */}
      <section className="py-20 text-white" style={{ backgroundColor: '#0a192f' }}>
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <span className="font-bold uppercase text-sm" style={{ color: '#FFC107' }}>Manufacturing Excellence</span>
            <h2 className="text-4xl font-bold mt-2 mb-6">Inside Our Factory</h2>
            <p className="text-gray-400 mb-6">We use state-of-the-art machinery to produce leak-proof, food-safe packaging. Watch our process to see how we maintain international hygiene standards.</p>
            <Link to="/process" className="text-white border-b pb-1 hover:text-brandGold transition" style={{ borderColor: '#FFC107' }}>
              Read More About Process <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="aspect-video rounded-xl border-2 flex flex-col items-center justify-center cursor-pointer group" style={{ borderColor: '#FFC107', backgroundColor: '#1a2a4a' }}>
              <i className="fas fa-play-circle text-6xl text-white group-hover:scale-110 transition" style={{ color: '#FFC107' }}></i>
              <p className="mt-4 font-bold">Watch Manufacturing Video</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-gray-400 py-12 border-t border-gray-800" style={{ backgroundColor: '#020c1b' }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <img src="https://via.placeholder.com/80?text=QR" alt="Logo" className="h-16 mx-auto mb-6 bg-white rounded p-2" />
          <p className="mb-4">&copy; 2025 QR Packages. All International Rights Reserved.</p>
          <div className="flex justify-center gap-6 text-2xl">
            <i className="fab fa-whatsapp hover:text-green-500 cursor-pointer"></i>
            <i className="fab fa-instagram hover:text-pink-500 cursor-pointer"></i>
            <i className="fab fa-facebook hover:text-blue-500 cursor-pointer"></i>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
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
