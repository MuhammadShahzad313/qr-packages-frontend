import React, { useState, useMemo } from 'react';
import Navbar from '../components/Navbar';

function Shop() {
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [showCart, setShowCart] = useState(false);

  const products = [
    // Hot Coffee Cups (Category 1)
    { id: 1, name: 'Single Wall Hot Coffee Cup 8oz', category: 'Hot Coffee Cups', size: '8oz', img: 'https://images.unsplash.com/photo-1594615479210-f61fla8d1fe2?w=400&h=400&fit=crop', desc: 'Perfect for hot coffee. Food grade paper with insulator coating.', intl_price: 0.045, local_price: 2.50 },
    { id: 2, name: 'Single Wall Hot Coffee Cup 12oz', category: 'Hot Coffee Cups', size: '12oz', img: 'https://images.unsplash.com/photo-1559056199-641a0ac8b3f7?w=400&h=400&fit=crop', desc: 'Premium quality hot cup. Ideal for all coffee shops.', intl_price: 0.055, local_price: 3.00 },
    { id: 3, name: 'Double Wall Hot Coffee Cup 12oz', category: 'Hot Coffee Cups', size: '12oz', img: 'https://images.unsplash.com/photo-1447933601569-0cf30694e31f?w=400&h=400&fit=crop', desc: 'Insulated 2-wall design. Protects hands from heat.', intl_price: 0.075, local_price: 4.50 },
    { id: 4, name: 'Double Wall Hot Coffee Cup 16oz', category: 'Hot Coffee Cups', size: '16oz', img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop', desc: 'Large capacity with double wall insulation.', intl_price: 0.095, local_price: 5.50 },
    { id: 5, name: 'Premium Hot Cup 20oz with Lid', category: 'Hot Coffee Cups', size: '20oz', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop', desc: 'Includes matching kraft lid. Eco-friendly option.', intl_price: 0.125, local_price: 7.00 },

    // Cold & Juice Cups (Category 2)
    { id: 6, name: 'Cold Drink Cup 12oz Clear PET', category: 'Cold/Juice Cups', size: '12oz', img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=400&fit=crop', desc: 'Transparent PET cups perfect for cold beverages.', intl_price: 0.035, local_price: 2.00 },
    { id: 7, name: 'Cold Drink Cup 16oz with Dome Lid', category: 'Cold/Juice Cups', size: '16oz', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop', desc: 'Complete with clear dome covers for drinks.', intl_price: 0.055, local_price: 3.50 },
    { id: 8, name: 'Juice Cup 8oz Plastic Clear', category: 'Cold/Juice Cups', size: '8oz', img: 'https://images.unsplash.com/photo-1553530666-ba2a7fc5c514?w=400&h=400&fit=crop', desc: 'Small size perfect for fresh juices and smoothies.', intl_price: 0.030, local_price: 1.75 },
    { id: 9, name: 'Premium Cold Cup 20oz PET', category: 'Cold/Juice Cups', size: '20oz', img: 'https://images.unsplash.com/photo-1621939514649-280e08242856?w=400&h=400&fit=crop', desc: 'Heavy-duty PET material resists liquids.', intl_price: 0.065, local_price: 4.00 },
    { id: 10, name: 'Ice Tea Cup 24oz with Lid', category: 'Cold/Juice Cups', size: '24oz', img: 'https://images.unsplash.com/photo-1585047541391-2aa31a662db6?w=400&h=400&fit=crop', desc: 'Large capacity for iced beverages.', intl_price: 0.085, local_price: 5.00 },

    // Food & Boxes (Category 3)
    { id: 11, name: 'Paper Food Box 4x4x2.5 Medium', category: 'Food & Boxes', size: 'Medium', img: 'https://images.unsplash.com/photo-1585518419759-300f0a3f4ab8?w=400&h=400&fit=crop', desc: 'Sturdy food container. Perfect for take-out.', intl_price: 0.045, local_price: 2.75 },
    { id: 12, name: 'Paper Food Box 5x5x3 Large', category: 'Food & Boxes', size: 'Large', img: 'https://images.unsplash.com/photo-1595521624252-d1cc995db29d?w=400&h=400&fit=crop', desc: 'Large food box for meals and snacks.', intl_price: 0.065, local_price: 3.75 },
    { id: 13, name: 'White Food Container 6x6x4', category: 'Food & Boxes', size: 'Extra Large', img: 'https://images.unsplash.com/photo-1572527238267-f8e76e5d98ab?w=400&h=400&fit=crop', desc: 'Premium white container for quality presentation.', intl_price: 0.085, local_price: 5.00 },
    { id: 14, name: 'Kraft Paper Food Box Eco', category: 'Food & Boxes', size: 'Medium', img: 'https://images.unsplash.com/photo-1599599810690-178f50d606ee?w=400&h=400&fit=crop', desc: 'Eco-friendly kraft paper alternative.', intl_price: 0.055, local_price: 3.25 },
    { id: 15, name: 'Hinged Clamshell Take-Out Box', category: 'Food & Boxes', size: 'Medium', img: 'https://images.unsplash.com/photo-1569718776208-b7e4aa6b6ae2?w=400&h=400&fit=crop', desc: 'Secure hinged closure for easy packing.', intl_price: 0.095, local_price: 5.75 },

    // Popcorn Boxes (Category 4)
    { id: 16, name: 'Popcorn Box Small 12oz', category: 'Popcorn Boxes', size: 'Small', img: 'https://images.unsplash.com/photo-1585647347385-d02cafb90d9a?w=400&h=400&fit=crop', desc: 'Classic popcorn containers for movie theaters.', intl_price: 0.035, local_price: 2.25 },
    { id: 17, name: 'Popcorn Box Medium 18oz', category: 'Popcorn Boxes', size: 'Medium', img: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=400&fit=crop', desc: 'Cone-shaped design adds visual appeal.', intl_price: 0.045, local_price: 2.75 },
    { id: 18, name: 'Popcorn Box Large 32oz', category: 'Popcorn Boxes', size: 'Large', img: 'https://images.unsplash.com/photo-1517604931442-7e0c58ad0d15?w=400&h=400&fit=crop', desc: 'Large capacity for premium theater experience.', intl_price: 0.065, local_price: 3.75 },
    { id: 19, name: 'Gourmet Popcorn Box 20oz', category: 'Popcorn Boxes', size: 'Medium', img: 'https://images.unsplash.com/photo-1627873649417-af4dcb57fcf1?w=400&h=400&fit=crop', desc: 'Premium white popcorn boxes for events.', intl_price: 0.055, local_price: 3.25 },
    { id: 20, name: 'Custom Printed Popcorn Box', category: 'Popcorn Boxes', size: 'Custom', img: 'https://images.unsplash.com/photo-1614707267537-b85faf00021b?w=400&h=400&fit=crop', desc: 'Custom branding available on request.', intl_price: 0.095, local_price: 5.50 },

    // Cutlery & Straws (Category 5)
    { id: 21, name: 'Wooden Ice Cream Spoon', category: 'Cutlery & Straws', size: 'Standard', img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=400&fit=crop', desc: 'Eco-friendly wooden cutlery for ice cream.', intl_price: 0.015, local_price: 0.85 },
    { id: 22, name: 'Disposable Plastic Fork', category: 'Cutlery & Straws', size: 'Standard', img: 'https://images.unsplash.com/photo-1577003832033-a0c40e33b5ce?w=400&h=400&fit=crop', desc: 'Durable plastic forks for meals.', intl_price: 0.012, local_price: 0.65 },
    { id: 23, name: 'Plastic Spoon Eco-Friendly', category: 'Cutlery & Straws', size: 'Standard', img: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=400&fit=crop', desc: 'Biodegradable spoon option available.', intl_price: 0.018, local_price: 1.00 },
    { id: 24, name: 'Bamboo Straws 6-Pack', category: 'Cutlery & Straws', size: 'Straws', img: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400&h=400&fit=crop', desc: 'Reusable bamboo straws for sustainable dining.', intl_price: 0.050, local_price: 3.00 },
    { id: 25, name: 'Paper Straw Pack 250pcs', category: 'Cutlery & Straws', size: 'Straws', img: 'https://images.unsplash.com/photo-1577003832033-a0c40e33b5ce?w=400&h=400&fit=crop', desc: 'Eco-friendly paper straws in bulk.', intl_price: 0.025, local_price: 1.50 },

    // Cup Lids (Category 6)
    { id: 26, name: 'Black Lid for 8oz Cup', category: 'Cup Lids', size: '8oz', img: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=400&fit=crop', desc: 'Fits all standard 8oz cups with curl edge.', intl_price: 0.020, local_price: 1.25 },
    { id: 27, name: 'Clear Dome Lid 12oz', category: 'Cup Lids', size: '12oz', img: 'https://images.unsplash.com/photo-1566521506806-1c32fbe7d8e8?w=400&h=400&fit=crop', desc: 'Clear dome lid shows product attractively.', intl_price: 0.025, local_price: 1.50 },
    { id: 28, name: 'Kraft Paper Lid 16oz', category: 'Cup Lids', size: '16oz', img: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=400&fit=crop', desc: 'Eco-friendly kraft paper lid option.', intl_price: 0.030, local_price: 1.75 },
    { id: 29, name: 'Locking Tab Lid 20oz', category: 'Cup Lids', size: '20oz', img: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=400&fit=crop', desc: 'Secure locking mechanism prevents spills.', intl_price: 0.035, local_price: 2.10 },
    { id: 30, name: 'Sip Hole Lid 24oz', category: 'Cup Lids', size: '24oz', img: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=400&fit=crop', desc: 'Built-in sip hole for convenience.', intl_price: 0.040, local_price: 2.40 },

    // Additional Products (Category 7 - Mixed)
    { id: 31, name: 'Beverage Napkin White', category: 'Other Supplies', size: 'Standard', img: 'https://images.unsplash.com/photo-1599599810694-2392dc4199cc?w=400&h=400&fit=crop', desc: 'Classic white napkins for all beverages.', intl_price: 0.008, local_price: 0.50 },
    { id: 32, name: 'Carrier Tray 4 Cup', category: 'Other Supplies', size: '4-Cup', img: 'https://images.unsplash.com/photo-1572527238267-f8e76e5d98ab?w=400&h=400&fit=crop', desc: 'Sturdy cardboard carrier for 4 cups.', intl_price: 0.045, local_price: 2.50 },
    { id: 33, name: 'Cup Sleeve Brown Kraft', category: 'Other Supplies', size: 'Standard', img: 'https://images.unsplash.com/photo-1599599810694-2392dc4199cc?w=400&h=400&fit=crop', desc: 'Insulate cups with branded sleeves.', intl_price: 0.020, local_price: 1.20 },
    { id: 34, name: 'Dust Cover for Cups', category: 'Other Supplies', size: 'Universal', img: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=400&fit=crop', desc: 'Transparent dust covers for protection.', intl_price: 0.015, local_price: 0.90 },
    { id: 35, name: 'Bulk Order Discount Pack', category: 'Other Supplies', size: 'Bulk', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop', desc: 'Mixed assortment with volume discounts.', intl_price: 0.035, local_price: 2.00 },
  ];

  const categories = ['All', 'Hot Coffee Cups', 'Cold/Juice Cups', 'Food & Boxes', 'Popcorn Boxes', 'Cutlery & Straws', 'Cup Lids', 'Other Supplies'];

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

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

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.local_price * item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const whatsappCheckout = () => {
    const cartText = cart.map(item => `${item.name} (${item.quantity}x) - Rs. ${(item.local_price * item.quantity).toFixed(2)}`).join('%0A');
    const message = `Hi! I'd like to place an order:%0A%0A${cartText}%0A%0ATotal: Rs. ${cartTotal.toFixed(2)}`;
    window.open(`https://wa.me/+923001234567?text=${message}`, '_blank');
  };

  return (
    <div className="bg-white">
      <Navbar cartCount={cartCount} />

      {/* Header */}
      <div className="py-12 text-center" style={{ backgroundColor: '#0a192f' }}>
        <h1 className="text-4xl font-bold text-white mb-4">Our Product Catalog</h1>
        <p className="text-gray-400">Browse our complete range of disposable packaging solutions</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Search & Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="w-full md:flex-1">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-brandGold"
              style={{ borderColor: 'rgb(209, 213, 219)', '--tw-ring-color': '#FFC107' }}
            />
          </div>
          <button
            onClick={() => setShowCart(!showCart)}
            className="px-6 py-2 rounded font-bold text-white flex items-center gap-2 relative"
            style={{ backgroundColor: '#FFC107', color: '#020c1b' }}
          >
            <i className="fas fa-shopping-cart"></i>
            Cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Category Tabs */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded transition ${
                selectedCategory === category
                  ? 'font-bold text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
              style={{
                backgroundColor: selectedCategory === category ? '#0a192f' : undefined,
                color: selectedCategory === category ? '#FFC107' : undefined
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <img src={product.img} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-sm mb-2 line-clamp-2">{product.name}</h3>
                <p className="text-xs text-gray-600 mb-3 line-clamp-2">{product.desc}</p>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-xs text-gray-500">Rs. {product.local_price.toFixed(2)}</p>
                    <p className="text-xs text-gray-400">${product.intl_price.toFixed(2)}</p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: '#FFC107', color: '#020c1b' }}>
                    {product.size}
                  </span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="flex-1 py-2 rounded text-sm font-bold border transition"
                    style={{ borderColor: '#FFC107', color: '#FFC107' }}
                  >
                    Details
                  </button>
                  <button
                    onClick={() => addToCart(product)}
                    className="flex-1 py-2 rounded text-sm font-bold text-white"
                    style={{ backgroundColor: '#FFC107', color: '#020c1b' }}
                  >
                    <i className="fas fa-plus mr-1"></i>Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
              <button
                onClick={() => setSelectedProduct(null)}
                className="text-2xl text-gray-400 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            <img src={selectedProduct.img} alt={selectedProduct.name} className="w-full h-48 object-cover rounded mb-4" />
            <p className="text-gray-700 mb-4">{selectedProduct.desc}</p>
            <div className="mb-4">
              <p><strong>Size:</strong> {selectedProduct.size}</p>
              <p><strong>Category:</strong> {selectedProduct.category}</p>
              <p><strong>Local Price:</strong> Rs. {selectedProduct.local_price.toFixed(2)}</p>
              <p><strong>International Price:</strong> ${selectedProduct.intl_price.toFixed(2)}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  addToCart(selectedProduct);
                  setSelectedProduct(null);
                }}
                className="flex-1 py-3 rounded font-bold text-white"
                style={{ backgroundColor: '#FFC107', color: '#020c1b' }}
              >
                Add to Cart
              </button>
              <button
                onClick={() => setSelectedProduct(null)}
                className="flex-1 py-3 rounded font-bold border"
                style={{ borderColor: '#FFC107', color: '#FFC107' }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cart Sidebar */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setShowCart(false)}>
          <div
            className="absolute right-0 top-0 h-full w-full md:w-96 bg-white overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Shopping Cart</h2>
                <button onClick={() => setShowCart(false)} className="text-2xl">×</button>
              </div>
            </div>

            {cart.length === 0 ? (
              <div className="p-6 text-center text-gray-500">
                <i className="fas fa-shopping-cart text-4xl mb-2"></i>
                <p className="text-lg font-bold">Your cart is empty</p>
              </div>
            ) : (
              <div className="p-6">
                <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                  {cart.map(item => (
                    <div key={item.id} className="flex justify-between items-start border-b pb-4">
                      <div>
                        <p className="font-bold text-sm">{item.name}</p>
                        <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
                        <p className="text-sm font-bold text-gray-800">Rs. {(item.local_price * item.quantity).toFixed(2)}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  ))}
                </div>

                <div className="border-t-2 pt-4 mb-6">
                  <div className="flex justify-between text-lg font-bold mb-4">
                    <span>Total:</span>
                    <span style={{ color: '#FFC107' }}>Rs. {cartTotal.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={whatsappCheckout}
                  className="w-full py-3 rounded font-bold text-white text-lg flex items-center justify-center gap-2"
                  style={{ backgroundColor: '#25D366' }}
                >
                  <i className="fab fa-whatsapp"></i>
                  Checkout on WhatsApp
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Shop;
