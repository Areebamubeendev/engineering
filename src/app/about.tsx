// components/About.js
'use client'
import Banner1 from './assets/banner1.jpeg';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set isVisible to false on component mount
    setIsVisible(false);

    // Set isVisible to true after 2 seconds
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div id="about" className="w-full bg-white">
      {/* Full width image */}
      <div className="w-full h-80 md:h-2/3 relative">
        <Image
          src={Banner1}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          alt="Background Image"
        />
        {/* Text overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <p className="text-white text-center max-w-lg px-4">We are professionals in manufacturing cigarette machinery parts and injection molding machinery parts.</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className={`flex flex-col md:flex-row md:space-x-8 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* About us */}
          <div className="h-80 items-center justify-center bg-slate-400 rounded-lg p-6 md:w-1/2 md:h-80 flex flex-col">
            <h2 className="text-2xl font-bold text-center md:text-left mb-4">About us</h2>
          </div>
          <div className="h-80 items-center justify-center bg-slate-100 rounded-lg p-6 md:w-1/2 md:h-80 flex flex-col">
            <p className="text-gray-700 text-center md:text-left">AMJAD ENGINEERING WORKS was established in 1988 in Lahore, Pakistan. Our company specializes in machine parts for the tobacco industry and plastic molding machine parts. Our commitment to providing excellence in quality and service has made us a reliable player in the industry.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
