import React from 'react';
import ImageLoader from '../components/ImageLoader';

const About = () => {
  return (
<>
      
      {/* Hero Section */}
      <div className="relative h-[400px] w-full mb-12">
        <ImageLoader
          src="../public/about_main.jpg"
          alt="Contact hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-xl max-w-2xl text-center px-4">
          About StyleSpot
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded with a passion for style and self-expression, StyleSpot has grown into a 
            community of fashion enthusiasts who believe in the power of personal style. Our 
            journey began with a simple idea: make fashion accessible to everyone while 
            maintaining the highest standards of quality and design.
          </p>
          <p className="text-gray-600">
            Today, we continue to curate collections that inspire and empower, helping our 
            customers express themselves through fashion that feels authentic and confident.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            We're committed to bringing you carefully selected fashion pieces that combine 
            style, comfort, and quality. Our mission is to help you discover and develop your 
            personal style while building a wardrobe that you'll love for years to come.
          </p>
          <p className="text-gray-600">
            Every piece in our collection is chosen with our core values in mind: 
            sustainability, inclusivity, and timeless style that transcends fast fashion trends.
          </p>
        </div>
      </div>
      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <div className="group relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
          <ImageLoader 
            src="../public/about_m1.jpg" 
            alt="Style inspiration" 
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="font-semibold">Casual Comfort</h3>
            <p className="text-sm">Everyday style that feels as good as it looks</p>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
          <ImageLoader 
            src="../public/about_m2.jpg" 
            alt="Fashion showcase" 
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="font-semibold">Urban Edge</h3>
            <p className="text-sm">Contemporary styles for the modern individual</p>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
          <ImageLoader 
            src="../public/about_m3.jpg" 
            alt="Style collection" 
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="font-semibold">Bold Statements</h3>
            <p className="text-sm">Stand out with confidence in our signature pieces</p>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
          <ImageLoader 
            src="../public/about4.jpg" 
            alt="Fashion inspiration" 
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="font-semibold">Street Style</h3>
            <p className="text-sm">Urban fashion that captures the city spirit</p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center p-6 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-bold mb-3">Quality First</h3>
          <p className="text-gray-600">
            We carefully select each piece for its craftsmanship and durability, ensuring 
            lasting value for our customers.
          </p>
        </div>

        <div className="text-center p-6 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-bold mb-3">Sustainable Fashion</h3>
          <p className="text-gray-600">
            Our commitment to sustainable practices helps reduce fashion's environmental 
            impact while creating beautiful pieces.
          </p>
        </div>

        <div className="text-center p-6 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-bold mb-3">Community Focused</h3>
          <p className="text-gray-600">
            We build meaningful connections with our customers, creating a community that 
            shares our passion for style.
          </p>
        </div>
      </div>
      
      <div className="mt-24 space-y-24">
        {/* First Row */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-4 order-2 md:order-1">
            <h2 className="text-2xl font-bold">Contemporary Elegance</h2>
            <p className="text-gray-600">
              Our collection embodies the perfect balance of modern sophistication 
              and timeless style. We believe in creating looks that transcend 
              seasonal trends while maintaining a sharp, contemporary edge. Each 
              piece is carefully selected to ensure versatility and lasting appeal 
              in your wardrobe.
            </p>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <ImageLoader 
              src="../public/about5.jpg" 
              alt="Contemporary fashion showcase" 
              className="rounded-lg shadow-lg w-full h-[600px] object-cover"
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <ImageLoader 
              src="../public/about6.jpg" 
              alt="Urban street style" 
              className="rounded-lg shadow-lg w-full h-[600px] object-cover"
            />
          </div>
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-2xl font-bold">Luxury Meets Street Style</h2>
            <p className="text-gray-600">
              We bring together the best of high-end fashion and urban culture, 
              creating a unique fusion that speaks to the modern fashion enthusiast. 
              Our curated selection of designer pieces and streetwear essentials 
              allows you to express your individual style with confidence.
            </p>
          </div>
        </div>

        {/* Third Row */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-4 order-2 md:order-1">
            <h2 className="text-2xl font-bold">Artistic Expression</h2>
            <p className="text-gray-600">
              Fashion is more than clothing – it's a form of self-expression and 
              artistic statement. Our collection features unique pieces that 
              combine bold graphics, innovative designs, and superior quality, 
              enabling you to make your own style statement while maintaining 
              the highest standards of comfort and craftsmanship.
            </p>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <ImageLoader 
              src="../public/about7.jpg" 
              alt="Artistic fashion expression" 
              className="rounded-lg shadow-lg w-full h-[600px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;