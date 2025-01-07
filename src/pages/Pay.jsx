import React from 'react';
import { useCart } from '../context/CartContext';
import ImageLoader from '../components/ImageLoader';

function Pay() {
  const { cartItems } = useCart();
  const TAX_RATE = 0.05;

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTax = (subtotal) => {
    return subtotal * TAX_RATE;
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const tax = calculateTax(subtotal);
    return subtotal + tax;
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Payment Details</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-800 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Card Information</label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-800 focus:outline-none"
                  placeholder="1234 1234 1234 1234"
                />
                <div className="absolute right-2 top-2">
                  <ImageLoader src="/img/pay.png" alt="Payment methods" className="h-6" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <input
                  type="text"
                  className="px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-800 focus:outline-none"
                  placeholder="MM / YY"
                />
                <input
                  type="text"
                  className="px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-800 focus:outline-none"
                  placeholder="CVC"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Cardholder Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-800 focus:outline-none"
                placeholder="Full name on card"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Billing Address</label>
              <select className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-800 focus:outline-none mb-4">
                <option>Select Country</option>
                <option>Canada</option>
                <option>United States</option>
              </select>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-800 focus:outline-none"
                placeholder="Address"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            
            <div className="space-y-2 mb-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>{item.name} (x{item.quantity})</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-4 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${calculateSubtotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (5%)</span>
                <span>${calculateTax(calculateSubtotal()).toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-600">Free</span>
              </div>
            </div>

            <div className="border-t border-gray-200 mt-4 pt-4">
              <div className="flex justify-between font-bold text-lg mb-6">
                <span>Total</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>

              <button className="w-full bg-red-800 text-white py-3 rounded-md hover:bg-red-900 transition-colors">
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pay;