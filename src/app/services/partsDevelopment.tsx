
import development from '../assets/developing.png';
import Image from 'next/image';

const PartsDevelopment = () => {
    return (
        <div id={'development'} className="flex flex-col md:flex-row justify-between items-center font-roboto leading-relaxed text-base text-gray-800 px-8 py-6 my-16 border-t border-b border-l border -r ml-6 mr-6 border-slate-400">
          <div className="w-1/3">
          <Image
              src={development}
              style={{ width: 100, height: 100, objectFit: 'cover' }}
              alt="Background Image"
            />
            </div>
          <div className="w-full md:w-2/3 px-8 pt-8 pb-8">
            <h1 className="text-2xl font-bold mb-4">Parts development</h1>
            <p>Our dedicated team of engineers and designers works tirelessly to innovate and develop new parts that meet the evolving needs of our customers. With cutting-edge technology and a commitment to excellence, we strive to push the boundaries of what's possible.</p>
          </div>
        </div>
      );
  };
  
  export default PartsDevelopment;