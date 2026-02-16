import React, { useState } from 'react';

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
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="py-12 px-4" style={{ backgroundColor: '#0a192f' }}>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Get in <span style={{ color: '#FFC107' }}>Touch</span>
          </h1>
          <p className="text-gray-300">Have questions? We'd love to hear from you.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#0a192f' }}>
              Contact Information
            </h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md" style={{ backgroundColor: '#FFC107' }}>
                    <i className="fas fa-phone text-black text-lg"></i>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold" style={{ color: '#0a192f' }}>Phone</h3>
                  <p className="text-gray-600">0301-4163299</p>
                  <p className="text-gray-600">0348-2466637</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md" style={{ backgroundColor: '#FFC107' }}>
                    <i className="fas fa-envelope text-black text-lg"></i>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold" style={{ color: '#0a192f' }}>Email</h3>
                  <p className="text-gray-600">rashid82766@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md" style={{ backgroundColor: '#FFC107' }}>
                    <i className="fas fa-map-marker-alt text-black text-lg"></i>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold" style={{ color: '#0a192f' }}>Address</h3>
                  <p className="text-gray-600">Al Hamra Town, Raiwind Road</p>
                  <p className="text-gray-600">Lahore, Pakistan</p>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md" style={{ backgroundColor: '#FFC107' }}>
                    <i className="fas fa-clock text-black text-lg"></i>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold" style={{ color: '#0a192f' }}>Business Hours</h3>
                  <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Sat - Sun: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#0a192f' }}>
              Send us a Message
            </h2>

            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: '#0a192f' }}>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition"
                style={{ focusRingColor: '#FFC107' }}
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: '#0a192f' }}>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: '#0a192f' }}>Phone (Optional)</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition"
                placeholder="Your phone number"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: '#0a192f' }}>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition"
                placeholder="Tell us about your inquiry..."
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full py-3 rounded-lg font-bold text-black transition hover:opacity-90"
              style={{ backgroundColor: '#FFC107' }}
            >
              <i className="fas fa-paper-plane mr-2"></i>
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <section className="py-12 px-4" style={{ backgroundColor: '#0a192f' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Our Location</h2>
          <div className="h-96 bg-gray-400 rounded-lg overflow-hidden">
            <iframe 
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.8949896854706!2d74.18157632346961!3d31.46706347378915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sAl%20Hamra%20Town%2C%20Raiwind%20Road!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1699999999999" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="QR Packages Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
