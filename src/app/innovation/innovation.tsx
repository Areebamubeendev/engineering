'use client'
import Banner2 from '../assets/banner2.jpeg';
import shorBanner from '../assets/shortBanner.jpg';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function InnovationComponent(){
    return (
<div id="about" className="w-full bg-white">
      {/* Full width image */}
      <div className="w-full h-80 md:h-1/3 relative">
        <Image
          src={Banner2}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          alt="Background Image"
        />
        {/* Text overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <p className="text-white text-center max-w-lg px-4">We offer complete end-to-end manufacturing solutions for the cigarette production industry.</p>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center justify-center">
        {/* Image (hidden on mobile) */}
        <div className="hidden md:block w-2/3">
        <Image
          src={shorBanner}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          alt="Background Image"
        />        </div>

        {/* Title and description */}
        <div className="ml-8">
        <h1 className="text-2xl font-bold mb-4 mt-16 text-slate-700">Continued Development</h1>
        <p className="text-gray-700 mb-16">Through significant investment in research and development, our approach to the original equipment market is innovative and forward-thinking.</p>
        </div>
        </div>
    </div>
);}

