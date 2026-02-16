import React from 'react';

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div>
                <p className="text-gray-400 text-sm mb-1">Phone</p>
                <p className="text-lg font-bold">0301-4163299 | 0348-2466637</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Email</p>
                <p className="text-lg font-bold">rashid82766@gmail.com</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Address</p>
                <p className="text-lg font-bold">Al Hamra Town, Raiwind Road, Lahore, Pakistan</p>
              </div>
            </div>
          </div>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded bg-white/20 text-white placeholder-gray-400 focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-3 rounded bg-white/20 text-white placeholder-gray-400 focus:outline-none"
            ></textarea>
            <button className="w-full bg-yellow-500 text-black font-bold py-3 rounded hover:bg-yellow-600">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
