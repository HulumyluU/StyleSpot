import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import ImageLoader from './ImageLoader';
import toast from 'react-hot-toast';

const Footer = () => {
  const [email, setEmail] = useState('');

  const validateEmail = (email) => {
    return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    
    if (validateEmail(email)) {
      toast.success(
        <div className="flex items-center gap-2">
          <span className="font-medium">{email}</span>
          <span>Subscribed!</span>
        </div>,
        {
          duration: 2000,
          style: {
            background: '#F3F4F6',
            color: '#1F2937',
          },
        }
      );
      setEmail('');
    } else {
      toast.error(
        <div className="flex items-center gap-2">
          <span>Please enter a valid email address</span>
        </div>,
        {
          duration: 2000,
          style: {
            background: '#F3F4F6',
            color: '#1F2937',
          },
        }
      );
    }
  };

  return (
    <footer className="bg-white mt-14">
      <div className="w-full bg-gradient-to-r from-red-900 via-red-800 to-red-900 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Sign Up For Newsletters</h3>
              <p className="text-white text-sm">
                Get E-mail updates about our latest shop and{' '}
                <span className="font-bold">special offers</span>
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="px-4 py-2 rounded flex-grow md:w-64"
              />
              <button 
                type="submit"
                className="bg-transparent border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-red-900 transition-colors"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Rest of the footer content remains the same */}
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <a href="#"><img src="../public/img/logo.png" alt="StyleSpot" className="w-14" /></a>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-600">
              <p><span className="font-semibold">Address:</span> 213 Welling Road, st 34</p>
              <p><span className="font-semibold">Hours:</span> 10:00 - 19:00, Mon - Sat</p>
            </div>
            <div className="mt-4">
              <h4 className="font-bold mb-2">Follow us</h4>
              <div className="flex gap-4">
               <a href="https://www.instagram.com/" target='_blank' >
                  <Instagram className="w-5 h-5 text-gray-600 hover:text-red-900 cursor-pointer" />
               </a>
               <a href="https://www.facebook.com/" target='_blank'>
                  <Facebook className="w-5 h-5 text-gray-600 hover:text-red-900 cursor-pointer" />
               </a>
                <a href="https://x.com/" target='_blank'>
                  <Twitter className="w-5 h-5 text-gray-600 hover:text-red-900 cursor-pointer" />
                </a>
              </div>
            </div>
          </div>

          {/* About Links */}
          <div>
            <h4 className="font-bold mb-4">About</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-red-900">About us</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-red-900">Delivery Information</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-red-900">Privacy Policy</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-red-900">Terms & Conditions</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-red-900">Contact Us</Link></li>
            </ul>
          </div>

          {/* My Account */}
          <div>
            <h4 className="font-bold mb-4">My account</h4>
            <ul className="space-y-2">
              <li><Link to="/cart" className="text-gray-600 hover:text-red-900">View Cart</Link></li>
              <li><Link to="/#" className="text-gray-600 hover:text-red-900">My wishlist</Link></li>
              <li><Link to="/cart" className="text-gray-600 hover:text-red-900">Track My order</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-red-900">Help</Link></li>
            </ul>
          </div>

          {/* Install App */}
          <div>
            <h4 className="font-bold mb-4">Install app</h4>
            <div className="flex flex-col gap-3">
              <ImageLoader 
                src="/img/app.jpg"
                alt="App Store"
                className="w-32 h-10 object-contain cursor-pointer"
              />
              <ImageLoader 
                src="/img/play.jpg"
                alt="Google Play"
                className="w-32 h-10 object-contain cursor-pointer"
              />
            </div>
            <p className="mt-6 mb-3 text-gray-600">Secured Payment Gateways</p>
            <div className="flex gap-2 items-center">
              <ImageLoader 
                src="/img/pay.png"
                alt="Payment Methods"
                className="h-8 object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 py-4 text-center text-gray-600">
          <p>© 2024 Maksym Sovyk - Portfolio website</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;