import Banner1 from './assets/banner1.jpeg';
import Image from "next/image";

const HomeMain = () => {
  return (
    <div className="flex items-center">
      <div className="w-screen h-screen">
        <div className="h-full bg-white">
          <Image
            src={Banner1}
            alt="Picture of the author"
            // layout="fill"
            style={{width:'100%', height:'100%'}}
            objectFit="cover"
            className="shadow-md"
          />
        </div>
      </div>
      <div className='absolute w-2/4 h-52 ml-20'>
        <h1 className='mb-20 text-3xl text-stone-50'>We are professionals in manufacturing cigarette machinery parts and injection molding machinery parts.</h1>
      
      <div className="items-center w-max bg-sky-500 pt-20 py-15 px-4 md:px-16 font-medium text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700 rounded-full">
        <button
            id="mega-menu-full-cta-image-button"
            data-collapse-toggle="mega-menu-full-image-dropdown"
            // onMouseEnter={handleMouseEnter}
            // onMouseLeave={handleMouseLeave}
            className="flex items-center opacity-80 hover:opacity-100 transition-opacity duration-300"
        >
            <span className="mr-2">About us</span>
            <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </button>
        </div>
        </div>




      {/* <div className="w-full md:w-1/2 p-4">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Introduction</div>
        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
        <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
      </div> */}
    </div>
  );
};

export default HomeMain;
