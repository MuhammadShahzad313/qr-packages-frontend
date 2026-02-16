import React, { useState, useEffect } from 'react';
import { orders } from '../utils/api';

function OrderHistory() {
  const [userOrders, setUserOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const response = await orders.getAll();
      setUserOrders(response.data || []);
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Order History</h1>

        {userOrders.length === 0 ? (
          <div className="bg-white rounded-lg p-8 text-center">
            <p className="text-gray-600">No orders yet</p>
          </div>
        ) : (
          <div className="space-y-4">
            {userOrders.map(order => (
              <div key={order.id} className="bg-white rounded-lg shadow p-6">
                <div className="grid grid-cols-4 gap-4">
                  <div>
                    <p className="text-gray-600 text-sm">Order ID</p>
                    <p className="font-bold">#{order.id}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Total</p>
                    <p className="font-bold">${order.total_amount.toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Status</p>
                    <p className={`font-bold ${order.status === 'delivered' ? 'text-green-600' : 'text-yellow-600'}`}>
                      {order.status.toUpperCase()}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Date</p>
                    <p className="font-bold">{new Date(order.created_at).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderHistory;
