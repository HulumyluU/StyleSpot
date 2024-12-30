// src/pages/Cart.jsx
import { useCart } from '../context/CartContext';
import { Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';

function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const handleRemoveItem = (item) => {
    removeFromCart(item.id);
    toast.success(
      <div className="flex items-center gap-2">
        <span>Removed</span>
        <span className="font-medium">{item.name}</span>
        <span>from cart</span>
      </div>,
      {
        duration: 2000,
        style: {
          background: '#F3F4F6',
          color: '#1F2937',
        },
      }
    );
  };

  const handleUpdateQuantity = (item, newQuantity) => {
    if (newQuantity === 0) {
      handleRemoveItem(item);
      return;
    }
    
    updateQuantity(item.id, newQuantity);
    toast.success(
      <div className="flex items-center gap-2">
        <span>Updated</span>
        <span className="font-medium">{item.name}</span>
        <span>quantity to {newQuantity}</span>
      </div>,
      {
        duration: 2000,
        style: {
          background: '#F3F4F6',
          color: '#1F2937',
        },
      }
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-8">Add some awesome products to your cart!</p>
        <a href="/shop" className="bg-red-800 text-white px-6 py-3 rounded-md hover:bg-red-900">
          Continue Shopping
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {cartItems.map((item) => (
            <div key={item.id} className="flex flex-col md:flex-row items-start gap-4 border-b border-gray-200 py-6">
              <img
                src={`https://apishirts-production.up.railway.app/images/product${item.id}.jpg`}
                alt={item.name}
                className="w-full md:w-48 h-48 object-cover rounded-lg"
              />
              
              <div className="flex-grow">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
                
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center border rounded-md">
                  <button
                     onClick={() => handleUpdateQuantity(item, item.quantity - 1)}
                     className="px-3 py-1 border-r hover:bg-gray-100"
                  >
                     -
                  </button>
                    <span className="px-4 py-1">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-1 border-l hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                  
                  <button
                     onClick={() => handleRemoveItem(item)}
                     className="text-red-600 hover:text-red-800"
                  >
                     <Trash2 size={20} />
                  </button>
                </div>
                
                <p className="text-lg font-bold mt-4">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-gray-50 rounded-lg p-6 sticky top-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-4 mb-6">
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>
            </div>
            
            <button className="w-full bg-red-800 text-white py-3 rounded-md hover:bg-red-900 transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;