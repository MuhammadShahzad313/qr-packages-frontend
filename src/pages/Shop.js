import React, { useState, useEffect } from 'react';
import { products } from '../utils/api';

function Shop() {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState('All');
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await products.getAll();
      setAllProducts(response.data || []);
      setFilteredProducts(response.data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryFilter = (cat) => {
    setCategory(cat);
    if (cat === 'All') {
      setFilteredProducts(allProducts);
    } else {
      setFilteredProducts(allProducts.filter(p => p.category === cat));
    }
  };

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  if (loading) return <div className="text-center py-16" style={{ color: '#0a192f' }}>Loading products...</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="py-12 px-4" style={{ backgroundColor: '#0a192f' }}>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Our <span style={{ color: '#FFC107' }}>Product</span> Catalog
          </h1>
          <p className="text-gray-300 max-w-2xl">
            Browse our wide selection of premium disposable packaging solutions
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="mb-12">
          <p className="text-sm font-bold mb-4" style={{ color: '#0a192f' }}>FILTER BY CATEGORY</p>
          <div className="flex gap-3 overflow-x-auto pb-3">
            {['All', 'Hot', 'Cold', 'Food', 'Snack', 'Cutlery', 'Lids'].map(cat => (
              <button
                key={cat}
                onClick={() => handleCategoryFilter(cat)}
                className={`px-5 py-2 rounded font-semibold whitespace-nowrap transition ${
                  category === cat
                    ? 'text-black shadow-lg'
                    : 'bg-white border-2 text-gray-700 hover:border-yellow-400'
                }`}
                style={category === cat ? { backgroundColor: '#FFC107' } : { borderColor: '#FFC107' }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-gray-200 to-gray-300 h-56 flex items-center justify-center">
                <span className="text-6xl opacity-60">📦</span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2" style={{ color: '#0a192f' }}>{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-3xl font-extrabold" style={{ color: '#FFC107' }}>
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-xs font-semibold px-2 py-1 rounded" style={{ backgroundColor: '#f0f0f0', color: '#666' }}>
                    Stock: {product.stock}
                  </span>
                </div>

                <button
                  onClick={() => addToCart(product)}
                  className="w-full py-3 rounded font-bold transition hover:opacity-90 text-black"
                  style={{ backgroundColor: '#FFC107' }}
                >
                  <i className="fas fa-shopping-cart mr-2"></i>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">📭</div>
            <p className="text-gray-600 text-lg">No products found in selected category</p>
          </div>
        )}

        {/* Cart Summary */}
        {cart.length > 0 && (
          <div className="fixed bottom-6 right-6 rounded-lg shadow-2xl overflow-hidden" style={{ backgroundColor: '#0a192f' }}>
            <div className="px-6 py-4 text-white">
              <div className="flex items-center gap-2 mb-1">
                <i className="fas fa-shopping-cart text-yellow-400"></i>
                <span className="font-bold text-lg">Cart: {cart.length} item{cart.length !== 1 ? 's' : ''}</span>
              </div>
              <div className="text-yellow-400 font-bold text-xl">
                ${cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}
              </div>
            </div>
            <button className="w-full py-2 bg-yellow-500 text-black font-bold hover:bg-yellow-600 transition">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Shop;
