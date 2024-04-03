import React from 'react';
import manfucture from '../assets/manfucture.png';
import Image from 'next/image';


const PartsManufacturing = () => {
  return (
    <div id={'parts'} className="flex flex-col md:flex-row justify-between items-center font-roboto leading-relaxed text-base text-gray-800 px-8 py-6 my-16 border-t border-b border-l border -r ml-6 mr-6 border-slate-400">
      <div className="w-1/3">
      <Image
          src={manfucture}
          style={{ width: 100, height: 100, objectFit: 'cover' }}
          alt="Background Image"
        />
        </div>
      <div className="w-full md:w-2/3 px-8 pt-8 pb-8">
        <h1 className="text-2xl font-bold mb-4">Parts Manufacturing</h1>
        <p>Our state-of-the-art manufacturing facility ensures precision and quality in every part we produce. With advanced technology and skilled engineers, we deliver parts that meet the highest standards of performance and durability.</p>
      </div>
    </div>
  );
};

export default PartsManufacturing;
