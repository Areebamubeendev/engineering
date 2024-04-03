import innovation from '../assets/innovation.png';
import Image from 'next/image';

const EquipmentModernization = () => {
    return (
        <div id={'equipment'} className="flex flex-col md:flex-row justify-between items-center font-roboto leading-relaxed text-base text-gray-800 px-8 py-6 my-16 border-t border-b border-l border -r ml-6 mr-6 border-slate-400">
          <div className="w-1/3">
          <Image
              src={innovation}
              style={{ width: 100, height: 100, objectFit: 'cover' }}
              alt="Background Image"
            />
            </div>
          <div className="w-full md:w-2/3 px-8 pt-8 pb-8">
            <h1 className="text-2xl font-bold mb-4">Equipment Modernization</h1>
            <p>Our equipment modernization services help you stay ahead of the competition by upgrading your machinery with the latest technology and features. From retrofitting existing equipment to installing state-of-the-art components, we can enhance the performance and efficiency of your production lines..</p>
          </div>
        </div>
      );
  };
  
  export default EquipmentModernization;