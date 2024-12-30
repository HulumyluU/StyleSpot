import React from 'react';

function About() {
   const teamMembers = [
      {
        name: "Sarah Johnson",
        role: "Founder & Creative Director",
        description: "Fashion industry veteran with 15 years of experience"
      },
      {
        name: "Michael Chen",
        role: "Head Stylist",
        description: "Former celebrity stylist with an eye for trendsetting looks"
      },
      {
        name: "Emma Williams",
        role: "Customer Experience Manager",
        description: "Dedicated to ensuring every client finds their perfect style"
      }
    ];
  
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-6">About StyleSpot</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are passionate about helping you find your perfect style. Since 2018, StyleSpot has been transforming the way people discover and express their personal fashion identity.
          </p>
        </div>
  
        {/* Mission Section */}
        <div className="mb-16">
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-gray-600">
                  At StyleSpot, we believe that everyone deserves to feel confident and authentic in their personal style. Our mission is to make fashion accessible, sustainable, and personally meaningful for every individual who shops with us.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                <p className="text-gray-600">
                  We envision a world where fashion is both personal and sustainable, where every piece in your wardrobe tells a story and reflects your unique personality. Through careful curation and personalized guidance, we're making this vision a reality.
                </p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We prioritize environmentally conscious fashion choices and partner with brands that share our commitment to sustainability.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Inclusivity</h3>
              <p className="text-gray-600">
                Fashion is for everyone. We celebrate diversity and offer styles for all body types, ages, and personal preferences.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Quality</h3>
              <p className="text-gray-600">
                We carefully select each piece in our collection to ensure lasting quality and timeless style for our customers.
              </p>
            </div>
          </div>
        </div>
  
        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="p-6">
                <div className="h-32 bg-gray-200 rounded-lg mb-4" />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-red-800 mb-2">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
  
        {/* Contact CTA */}
        <div className="text-center p-8">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Have questions about our services or want to learn more about how we can help you discover your perfect style?
          </p>
          <button className="bg-red-800 text-white px-8 py-3 rounded-lg hover:bg-red-900 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    );
 }
 
 export default About;