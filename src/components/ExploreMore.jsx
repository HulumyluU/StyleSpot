import React from 'react';
import { Link } from 'react-router-dom';
import ImageLoader from './ImageLoader';

const ExploreMore = () => {
  return (
    <div className="w-full mt-10">
      
      <div className="flex flex-col md:flex-row w-full gap-14">
        {/* First Promotional Block */}
        <div className="relative w-full md:w-1/2">
          <div className="relative h-[600px]">
            <ImageLoader 
              src="/img/explore_1.jpg" 
              alt="Crazy deals promotion" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10">
              <div className="absolute bottom-12 left-8">
                <h3 className="text-4xl font-bold text-white mb-1">Explore our Blog</h3>
                <p className="text-xl text-white mb-4">Learn about updates first</p>
                <Link 
                  to="/blog" 
                  className="inline-block px-8 py-2 border border-white text-white hover:bg-white hover:text-black transition-colors text-sm"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Second Promotional Block */}
        <div className="relative w-full md:w-1/2">
          <div className="relative h-[600px]">
            <ImageLoader 
              src="/img/explore_3.jpg" 
              alt="Spring/Summer collection" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10">
              <div className="absolute bottom-12 left-8">
                <h3 className="text-4xl font-bold text-white mb-1">Spring/Summer</h3>
                <p className="text-xl text-white mb-4">Upcoming Season</p>
                <Link 
                  to="/shop" 
                  className="inline-block px-8 py-2 border border-white text-white hover:bg-white hover:text-black transition-colors text-sm"
                >
                  Collection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreMore;