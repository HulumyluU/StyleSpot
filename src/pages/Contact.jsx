import React from 'react';
import { Mail, Phone, Clock, MapPin } from 'lucide-react';
import ImageLoader from '../components/ImageLoader';

const Contact = () => {
  return (
    <div>
      {/* Hero Section with Image */}
      <div className="relative h-[400px] w-full mb-12">
        <ImageLoader
          src="../public/contact.jpg"
          alt="Contact hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Page</h1>
          <p className="text-lg md:text-xl max-w-2xl text-center px-4">
            Get in touch with us for any questions or suggestions.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Head Office</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-gray-600" />
                  <span>40 Bay St, Toronto, ON M5J 2X2, Canada</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-600" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-600" />
                  <span>contact@stylespot.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-gray-600" />
                  <span>Mon - Sat, 10:00 - 19:00</span>
                </div>
              </div>
            </div>

            {/* OpenStreetMap iframe */}
            <div className="w-full h-64 rounded-lg overflow-hidden">
              <iframe
                title="Office Location"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-79.38359,43.64156,-79.37959,43.64556&amp;layer=mapnik&amp;marker=43.64356,-79.38159"
                style={{ border: 0 }}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Leave a message</h2>
            <p className="text-gray-600">We love to hear from you</p>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your message"
                  rows={6}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-2 bg-red-800 text-white rounded hover:bg-red-900 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;