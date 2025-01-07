import React, { useState } from 'react';
import ImageLoader from '../components/ImageLoader';

function Blog() {
  const sections = [
    {
      img: "/about1.jpg",
      title: "Contemporary Elegance",
      text: "Our collection embodies the perfect balance of modern sophistication and timeless style. We believe in creating looks that transcend seasonal trends while maintaining a sharp, contemporary edge. Each piece is carefully selected to ensure versatility and lasting appeal in your wardrobe.",
      expandedText: "We source materials from the finest suppliers worldwide, ensuring each garment meets our exacting standards. Our design team draws inspiration from global fashion capitals while adding unique touches that set our pieces apart. The result is a collection that feels both luxurious and wearable, perfect for the modern fashion enthusiast who appreciates quality and style."
    },
    {
      img: "/about2.jpg",
      title: "Street Style Evolution",
      text: "Urban fashion continues to evolve, blending comfort with cutting-edge design. Our street style collection represents the pulse of contemporary fashion, where authenticity meets innovation.",
      expandedText: "From Tokyo to New York, we study street fashion trends and urban culture to create pieces that resonate with the modern consumer. Our street style collection incorporates elements of skateboarding, hip-hop, and urban art, resulting in unique pieces that tell a story while maintaining functionality and comfort."
    },
    {
      img: "/about3.jpg",
      title: "Sustainable Fashion",
      text: "Sustainability isn't just a trend—it's a commitment. Our eco-conscious collection showcases how style and environmental responsibility can coexist.",
      expandedText: "We use recycled materials, organic cotton, and eco-friendly dyes in our production process. Our packaging is 100% recyclable, and we partner with local environmental initiatives to offset our carbon footprint. Every purchase contributes to our tree-planting program, making fashion a force for positive change."
    },
    {
      img: "/about4.jpg",
      title: "Seasonal Trends",
      text: "Stay ahead of the curve with our seasonal collections. We analyze global fashion trends and adapt them to create wearable, stylish pieces that resonate with our customers.",
      expandedText: "Our team of fashion forecasters works year-round to predict and adapt upcoming trends. We collaborate with influencers and style experts to ensure our collections remain fresh and relevant. Each season brings new colors, patterns, and silhouettes that complement our core pieces."
    }
  ];

  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (index) => {
    setExpandedSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="w-full">
      <div className="relative w-full h-[400px] mb-8">
        <ImageLoader 
          src="/img/blog1.webp" 
          alt="Blog Header" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">Style Blog</h1>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {sections.map((section, index) => (
          <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 mb-16`}>
            <div className="w-full md:w-1/2">
              <ImageLoader src={section.img} alt={section.title} className="w-full h-[400px] object-cover rounded-lg"/>
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-3xl font-bold">{section.title}</h2>
              <div className="overflow-hidden">
                <p className="text-gray-700 leading-relaxed">
                  {section.text}
                  <span className={`transition-all duration-500 ${
                    expandedSections[index] 
                      ? 'opacity-100 max-h-96 block' 
                      : 'opacity-0 max-h-0 hidden'
                  }`}>
                    {" " + section.expandedText}
                  </span>
                </p>
              </div>
              <button 
                onClick={() => toggleSection(index)}
                className="px-6 py-2 bg-red-800 text-white rounded hover:bg-red-900 transition-colors"
              >
                {expandedSections[index] ? 'Show Less' : 'Read More'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;