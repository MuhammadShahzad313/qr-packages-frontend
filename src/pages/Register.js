import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth } from '../utils/api';
import { useAuth } from '../contexts/AuthContext';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await auth.register(formData);
      const loginResponse = await auth.login({ email: formData.email, password: formData.password });
      login(loginResponse.data.user, loginResponse.data.token);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.error || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12" style={{ backgroundColor: '#f5f5f5' }}>
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold" style={{ color: '#0a192f' }}>Create Account</h2>
          <p className="text-gray-600 mt-2">Join us to start shopping</p>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            <i className="fas fa-exclamation-circle mr-2"></i>{error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold mb-2" style={{ color: '#0a192f' }}>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-2 border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-yellow-500 transition"
              placeholder="Your full name"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-2" style={{ color: '#0a192f' }}>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-2 border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-yellow-500 transition"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-2" style={{ color: '#0a192f' }}>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border-2 border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-yellow-500 transition"
              placeholder="03XX-XXXXXXX"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-2" style={{ color: '#0a192f' }}>Password (min 8 characters)</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border-2 border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-yellow-500 transition"
              placeholder="••••••••"
              required
            />
            <p className="text-xs text-gray-500 mt-1">Must be at least 8 characters long</p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded font-bold text-black transition hover:opacity-90 disabled:opacity-50"
            style={{ backgroundColor: '#FFC107' }}
          >
            {loading ? (
              <>
                <i className="fas fa-spinner fa-spin mr-2"></i>
                Creating Account...
              </>
            ) : (
              <>
                <i className="fas fa-user-plus mr-2"></i>
                Create Account
              </>
            )}
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-center text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="font-bold hover:text-yellow-500 transition" style={{ color: '#FFC107' }}>
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
