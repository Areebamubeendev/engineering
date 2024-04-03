import maintaince from '../assets/maintaince.png';
import Image from 'next/image';

const MaintenanceServices = () => {
    return (
        <div id={'maintaince'} className="flex flex-col md:flex-row justify-between items-center font-roboto leading-relaxed text-base text-gray-800 px-8 py-6 my-16 border-t border-b border-l border -r ml-6 mr-6 border-slate-400">
          <div className="w-1/3">
          <Image
              src={maintaince}
              style={{ width: 100, height: 100, objectFit: 'cover' }}
              alt="Background Image"
            />
            </div>
          <div className="w-full md:w-2/3 px-8 pt-8 pb-8">
            <h1 className="text-2xl font-bold mb-4">Maintenance Services</h1>
            <p>Our comprehensive maintenance services ensure that your equipment operates at peak performance and efficiency. From routine inspections to emergency repairs, our skilled technicians are available around the clock to keep your operations running smoothly.</p>
          </div>
        </div>
      );
  };
  
  export default MaintenanceServices;