import React from 'react';

function Process() {
  const steps = [
    {
      number: 1,
      title: 'Raw Material Sourcing',
      description: 'We source premium food-grade paperboard coated with PE (Polyethylene) to ensure water resistance and safety.',
      icon: '🏭',
      bgColor: '#FFC107',
      textColor: '#020c1b'
    },
    {
      number: 2,
      title: 'Precision Printing',
      description: 'Using Flexographic printing, we apply your brand logo and designs with food-safe ink before the paper is cut.',
      icon: '🖨️',
      bgColor: '#0a192f',
      textColor: 'white'
    },
    {
      number: 3,
      title: 'Die Cutting',
      description: 'The printed rolls are punched into "fan" shapes (sidewalls) and circular bottoms with extreme precision.',
      icon: '✂️',
      bgColor: '#FFC107',
      textColor: '#020c1b'
    },
    {
      number: 4,
      title: 'High-Speed Forming',
      description: 'Our machines fold the fans into cylinders and heat-seal the bottoms to prevent any leakage.',
      icon: '⚙️',
      bgColor: '#0a192f',
      textColor: 'white'
    },
    {
      number: 5,
      title: 'Quality Control',
      description: 'Every batch undergoes leak testing and visual inspection to meet international export standards.',
      icon: '✅',
      bgColor: '#FFC107',
      textColor: '#020c1b'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="py-16 px-4" style={{ backgroundColor: '#020c1b' }}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Manufacturing <span style={{ color: '#FFC107' }}>Standard</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We follow a rigorous 5-step industrial process to ensure every cup is leak-proof, food-safe, and export-quality.
          </p>
        </div>
      </div>

      {/* Timeline Process */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={step.number} className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#0a192f' }}>
                  {step.number}. {step.title}
                </h3>
                <p className="text-gray-600 text-lg">
                  {step.description}
                </p>
              </div>

              {/* Step Circle */}
              <div 
                className="flex-shrink-0 w-20 h-20 rounded-full border-4 border-white shadow-xl flex items-center justify-center font-bold text-2xl"
                style={{ backgroundColor: step.bgColor, color: step.textColor }}
              >
                {step.number}
              </div>

              {/* Image Placeholder */}
              <div className="flex-1">
                <div 
                  className="h-48 rounded-lg shadow-lg flex items-center justify-center text-4xl"
                  style={{ backgroundColor: '#e0e0e0' }}
                >
                  {step.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 px-4" style={{ backgroundColor: '#0a192f' }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">See Us In Action</h2>
          <p className="text-gray-300 mb-8">Watch our manufacturing process in detail</p>
          
          <div className="aspect-video bg-gray-800 rounded-xl flex items-center justify-center border-4" style={{ borderColor: '#FFC107' }}>
            <div className="text-center">
              <i className="fas fa-play-circle text-6xl mb-4" style={{ color: '#FFC107' }}></i>
              <p className="text-xl">Video coming soon...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#0a192f' }}>
            Why Our Process Stands Out
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-gray-50">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#0a192f' }}>International Standards</h3>
              <p className="text-gray-600">Meets FDA, ISO, and food safety certification requirements worldwide.</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gray-50">
              <div className="text-4xl mb-4">♻️</div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#0a192f' }}>Eco-Friendly</h3>
              <p className="text-gray-600">Using recyclable materials and sustainable manufacturing practices.</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gray-50">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#0a192f' }}>High-Speed Production</h3>
              <p className="text-gray-600">Capable of producing millions of cups monthly without compromising quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 text-white text-center" style={{ backgroundColor: '#0a192f' }}>
        <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
        <p className="text-gray-300 mb-8">Browse our products and place your order today</p>
        <a href="/shop" className="inline-block px-8 py-3 rounded font-bold transition hover:opacity-90" style={{ backgroundColor: '#FFC107', color: '#020c1b' }}>
          Start Shopping
        </a>
      </section>
    </div>
  );
}

export default Process;
