import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Process() {
  const steps = [
    {
      number: 1,
      title: 'Raw Material Sourcing',
      description: 'We source premium food-grade paperboard coated with PE (Polyethylene) to ensure water resistance and safety.',
      img: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=600&h=400&fit=crop',
      bgColor: '#FFC107',
      textColor: '#020c1b'
    },
    {
      number: 2,
      title: 'Precision Printing',
      description: 'Using Flexographic printing, we apply your brand logo and designs with food-safe ink before the paper is cut.',
      img: 'https://images.unsplash.com/photo-1599599810694-2392dc4199cc?w=600&h=400&fit=crop',
      bgColor: '#0a192f',
      textColor: 'white'
    },
    {
      number: 3,
      title: 'Die Cutting',
      description: 'The printed rolls are punched into "fan" shapes (sidewalls) and circular bottoms with extreme precision.',
      img: 'https://images.unsplash.com/photo-1572527238267-f8e76e5d98ab?w=600&h=400&fit=crop',
      bgColor: '#FFC107',
      textColor: '#020c1b'
    },
    {
      number: 4,
      title: 'High-Speed Forming',
      description: 'Our machines fold the fans into cylinders and heat-seal the bottoms to prevent any leakage.',
      img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop',
      bgColor: '#0a192f',
      textColor: 'white'
    },
    {
      number: 5,
      title: 'Quality Control & Testing',
      description: 'Every batch undergoes leak testing and visual inspection to meet international export standards.',
      img: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=600&h=400&fit=crop',
      bgColor: '#FFC107',
      textColor: '#020c1b'
    }
  ];

  return (
    <div style={{ backgroundColor: '#f9fafb' }}>
      <Navbar />

      {/* Header */}
      <div className="py-16 px-4 text-white text-center" style={{ backgroundColor: '#020c1b' }}>
        <h1 className="text-5xl font-bold mb-4">Manufacturing <span style={{ color: '#FFC107' }}>Process</span></h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          We follow a rigorous 5-step industrial process to ensure every cup is leak-proof, food-safe, and export-quality.
        </p>
      </div>

      {/* Timeline Process */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        {steps.map((step, index) => (
          <div key={step.number} className="mb-20">
            <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
              {/* Text Content */}
              <div className="flex-1">
                <div className="flex items-start gap-4 mb-6">
                  <div 
                    className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center font-bold text-3xl text-white"
                    style={{ backgroundColor: step.bgColor, color: step.textColor }}
                  >
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold" style={{ color: '#0a192f' }}>
                      {step.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Image */}
              <div className="flex-1">
                <img 
                  src={step.img} 
                  alt={step.title} 
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Divider */}
            {index < steps.length - 1 && (
              <div className="flex justify-center my-8">
                <div className="text-4xl" style={{ color: '#FFC107' }}>↓</div>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Video/Factory Section */}
      <section className="py-20 px-4 text-white" style={{ backgroundColor: '#0a192f' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">See Us In Action</h2>
            <p className="text-gray-400 text-lg">Watch our state-of-the-art manufacturing facility at work</p>
          </div>

          <div className="aspect-video rounded-xl overflow-hidden shadow-2xl relative cursor-pointer group">
            <img 
              src="https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=1200&h=800&fit=crop"
              alt="Factory"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition">
              <i className="fas fa-play-circle text-7xl text-white group-hover:scale-110 transition duration-500"></i>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16" style={{ color: '#0a192f' }}>
            Why Our Process <span style={{ color: '#FFC107' }}>Stands Out</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-lg text-center" style={{ backgroundColor: '#f3f4f6' }}>
              <div className="text-5xl mb-6">🌍</div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#0a192f' }}>International Standards</h3>
              <p className="text-gray-600">Meets FDA, ISO, and food safety certification requirements worldwide. Approved for all major markets.</p>
            </div>

            <div className="p-8 rounded-lg text-center" style={{ backgroundColor: '#f3f4f6' }}>
              <div className="text-5xl mb-6">♻️</div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#0a192f' }}>Eco-Friendly</h3>
              <p className="text-gray-600">Using recyclable materials and sustainable manufacturing practices. Reducing carbon footprint daily.</p>
            </div>

            <div className="p-8 rounded-lg text-center" style={{ backgroundColor: '#f3f4f6' }}>
              <div className="text-5xl mb-6">⚡</div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#0a192f' }}>High-Speed Capacity</h3>
              <p className="text-gray-600">Capable of producing millions of cups monthly without compromising quality or consistency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 text-white text-center" style={{ backgroundColor: '#0a192f' }}>
        <h2 className="text-4xl font-bold mb-4">Ready to Place Your Order?</h2>
        <p className="text-gray-400 mb-8 text-lg">Browse our complete product catalog and find the perfect packaging solution for your business</p>
        <Link to="/shop" className="inline-block px-10 py-4 rounded font-bold transition hover:opacity-90 text-lg" style={{ backgroundColor: '#FFC107', color: '#020c1b' }}>
          <i className="fas fa-shopping-cart mr-2"></i>Start Shopping Now
        </Link>
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

export default Process;
