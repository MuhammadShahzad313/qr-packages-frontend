import React, { useState, useMemo } from 'react';
import Navbar from '../components/Navbar';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send to backend
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  // Generate WhatsApp QR Code - using qr.io API
  const qrCodeUrl = useMemo(() => {
    const whatsappUrl = 'https://wa.me/+923001234567';
    return `https://qr.io/?qr=${encodeURIComponent(whatsappUrl)}`;
  }, []);

  return (
    <div className="bg-white">
      <Navbar />

      {/* Header */}
      <div className="py-16 px-4 text-white text-center" style={{ backgroundColor: '#020c1b' }}>
        <h1 className="text-5xl font-bold mb-4">Get in <span style={{ color: '#FFC107' }}>Touch</span></h1>
        <p className="text-gray-400 text-lg">Have questions? We're here to help.</p>
      </div>

      {/* Main Contact Section - Navy/White Split */}
      <div className="flex flex-col md:flex-row min-h-[80vh]">
        {/* Left Side - Navy Background with Contact Info */}
        <div className="flex-1 p-12 flex flex-col justify-center" style={{ backgroundColor: '#0a192f' }}>
          <h2 className="text-4xl font-bold text-white mb-12">Contact Information</h2>

          <div className="space-y-10">
            {/* Phone */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 pt-1">
                <div className="flex items-center justify-center w-12 h-12 rounded-full" style={{ backgroundColor: '#FFC107' }}>
                  <i className="fas fa-phone text-black text-lg"></i>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                <p className="text-gray-300 text-lg">0301-4163299</p>
                <p className="text-gray-300 text-lg">0348-2466637</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 pt-1">
                <div className="flex items-center justify-center w-12 h-12 rounded-full" style={{ backgroundColor: '#FFC107' }}>
                  <i className="fas fa-envelope text-black text-lg"></i>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-gray-300 text-lg">rashid82766@gmail.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 pt-1">
                <div className="flex items-center justify-center w-12 h-12 rounded-full" style={{ backgroundColor: '#FFC107' }}>
                  <i className="fas fa-map-marker-alt text-black text-lg"></i>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                <p className="text-gray-300 text-lg">Al Hamra Town, Raiwind Road</p>
                <p className="text-gray-300 text-lg">Lahore, Pakistan</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 pt-1">
                <div className="flex items-center justify-center w-12 h-12 rounded-full" style={{ backgroundColor: '#FFC107' }}>
                  <i className="fas fa-clock text-black text-lg"></i>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Business Hours</h3>
                <p className="text-gray-300 text-lg">Mon - Fri: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-300 text-lg">Sat - Sun: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - White Background with QR Code */}
        <div className="flex-1 p-12 flex flex-col justify-center items-center" style={{ backgroundColor: '#f9fafb' }}>
          <div className="max-w-md w-full">
            <h2 className="text-3xl font-bold mb-4 text-center" style={{ color: '#0a192f' }}>
              Scan to Chat
            </h2>
            <p className="text-gray-600 text-center mb-8 text-lg">
              Use WhatsApp to get instant response from our team. Scan this QR code to message us directly.
            </p>

            {/* QR Code Container */}
            <div className="bg-white p-6 rounded-xl shadow-lg mb-8 flex flex-col items-center">
              <img 
                src={qrCodeUrl}
                alt="WhatsApp QR Code"
                className="w-64 h-64 object-contain"
              />
              <p className="text-sm text-gray-500 mt-4 text-center">
                Scan with WhatsApp or WeChat to connect instantly
              </p>
            </div>

            {/* Direct WhatsApp Link */}
            <a 
              href="https://wa.me/+923001234567" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-lg font-bold text-lg transition hover:opacity-90 text-white"
              style={{ backgroundColor: '#25D366' }}
            >
              <i className="fab fa-whatsapp text-2xl"></i>
              Message on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Alternative Contact Form Section */}
      <section className="py-16 px-4" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#0a192f' }}>
            Or Send us a Message
          </h2>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-bold mb-2" style={{ color: '#0a192f' }}>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-brandGold transition"
                  style={{ borderColor: 'rgb(209, 213, 219)' }}
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2" style={{ color: '#0a192f' }}>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-brandGold transition"
                  style={{ borderColor: 'rgb(209, 213, 219)' }}
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-bold mb-2" style={{ color: '#0a192f' }}>Phone Number (Optional)</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-brandGold transition"
                style={{ borderColor: 'rgb(209, 213, 219)' }}
                placeholder="+92 300 1234567"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-bold mb-2" style={{ color: '#0a192f' }}>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-brandGold transition resize-none"
                style={{ borderColor: 'rgb(209, 213, 219)' }}
                placeholder="Tell us about your inquiry..."
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full py-4 rounded-lg font-bold text-lg transition hover:opacity-90 text-black"
              style={{ backgroundColor: '#FFC107' }}
            >
              <i className="fas fa-paper-plane mr-2"></i>
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4" style={{ backgroundColor: '#0a192f' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Find Us On Map</h2>
          <div className="h-96 bg-gray-400 rounded-xl overflow-hidden shadow-lg">
            <iframe 
              title="QR Packages Location"
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.8949896854706!2d74.18157632346961!3d31.46706347378915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sAl%20Hamra%20Town%2C%20Raiwind%20Road!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1699999999999" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
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

export default Contact;
