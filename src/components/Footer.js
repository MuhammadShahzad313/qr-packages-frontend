import React from 'react';

function Footer() {
  return (
    <footer className="text-gray-400 py-12 border-t border-gray-800" style={{ backgroundColor: '#020c1b' }}>
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="h-16 mx-auto mb-6 bg-white rounded p-2 w-16 flex items-center justify-center\">\n          <span className="font-bold text-black\">QR</span>\n        </div>\n        <p className="mb-4">&copy; 2025 QR Packages. All International Rights Reserved.</p>\n        <div className="flex justify-center gap-6 text-2xl\">\n          <a href=\"https://wa.me/923014163299\" className=\"hover:text-green-500 cursor-pointer transition\"><i className=\"fab fa-whatsapp\"></i></a>\n          <a href=\"#\" className=\"hover:text-pink-500 cursor-pointer transition\"><i className=\"fab fa-instagram\"></i></a>\n          <a href=\"#\" className=\"hover:text-blue-500 cursor-pointer transition\"><i className=\"fab fa-facebook\"></i></a>\n        </div>\n      </div>\n    </footer>\n  );\n}\n\nexport default Footer;
