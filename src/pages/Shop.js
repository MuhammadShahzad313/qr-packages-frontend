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

  if (loading) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Product Catalog</h1>

        {/* Category Filter */}
        <div className="mb-8 flex gap-2 overflow-x-auto">
          {['All', 'Hot', 'Cold', 'Food', 'Snack', 'Cutlery', 'Lids'].map(cat => (
            <button
              key={cat}
              onClick={() => handleCategoryFilter(cat)}
              className={`px-4 py-2 rounded whitespace-nowrap ${
                category === cat
                  ? 'bg-yellow-500 text-white'
                  : 'bg-white text-gray-700 border'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <span className="text-4xl">📦</span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-yellow-500">${product.price.toFixed(2)}</span>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                  >
                    Add to Cart
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2">Stock: {product.stock}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-10 text-gray-500">No products found</div>
        )}

        {/* Cart Summary */}
        {cart.length > 0 && (
          <div className="fixed bottom-4 right-4 bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-lg">
            <div className="font-bold">Cart: {cart.length} items</div>
            <div className="text-sm">Total: ${cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Shop;
