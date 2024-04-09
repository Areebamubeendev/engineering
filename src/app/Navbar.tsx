'use client'

import Image from "next/image";
// components/Navbar.js
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import companyIcon from './assets/companyIcon.jpeg'


const Navbar = ({tab} : {tab:any}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServiceClicked, setIsServiceClicked] = useState(false);
  const [subTab, setSubTab] = useState(1);

  const router = useRouter();


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const serviceClick = (option:boolean) => {
    setIsServiceClicked(option);
  };

  useEffect(()=>{
    if(subTab == 1){
        const element = document.getElementById('parts')
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    }else if(subTab == 2){
        const element = document.getElementById('development')
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    }else if(subTab == 3){
        const element = document.getElementById('maintaince')
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    }else{
        const element = document.getElementById('equipment')
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    }
  }, [subTab])

  const serviceSubTabClick = () =>{
    if(tab != 2){
        router.push('/services');
    }
    // const element = document.getElementById(elementId || 'parts')
    // if (element) {
    //   element.scrollIntoView({ behavior: 'smooth' });
    // }
  }

  return (
    <nav className="bg-gray-800 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex items-center">
            <Image
                  src="/companyIcon.ico"
                  width={80}
                  height={80}
                  alt="Picture of the author"
                  // className="p-8 bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light dark:hover:bg-blend-darken"
                />
              <a  href="/"  className="text-white font-bold ml-6">Amjad Engineering Works</a>
            </div>
          </div>
          <div className="flex">
            <div className="hidden md:block">
              <a href="/" className={`text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium ${tab == 1 ? 'bg-slate-400': ''}`}>
                About Us
              </a>
              <button onMouseEnter={()=>{serviceClick(true)}} className="h-80">
              <a href="/services" className={`text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium ${tab == 2 ? 'bg-slate-400': ''}`}>
                Services
              </a>
              </button>
              <a href="/innovation" className={`text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium ${tab == 3 ? 'bg-slate-400': ''}`}>
                Innovation
              </a>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-16 inset-x-0 bg-gray-800 z-10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className={`text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 ${tab == 1 ? 'bg-slate-400': ''}`}>
              About Us
            </a>
            <Link href="/services" onMouseEnter={()=>{serviceClick(true)}} className={`text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 ${tab == 2 ? 'bg-slate-400': ''}`}>
              Services
            </Link>
           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div onClick={()=>{setIsOpen(false); setSubTab(1); serviceSubTabClick()}} className={`text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 ${tab == 2 ? subTab == 1 ?'bg-slate-400':'':''}`}>
              <a>Parts Manufacturing</a>
            </div>
            <div onClick={()=>{setIsOpen(false); setSubTab(2); serviceSubTabClick()}} className={`text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 ${tab == 2 ? subTab == 2 ?'bg-slate-400':'':''}`}>
              <a>Parts Development</a>
            </div>
            <div onClick={()=>{setIsOpen(false); setSubTab(3);serviceSubTabClick()}} className={`text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 ${tab == 2 ? subTab == 3 ?'bg-slate-400':'':''}`}>
              <a >Maintenance Services</a>
            </div>
            <div onClick={()=>{ setIsOpen(false); setSubTab(4); serviceSubTabClick()}} className={`text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 ${tab == 2 ? subTab == 4 ?'bg-slate-400':'':''}`}>
              <a >Equipment Modernization</a>
            </div>
          </div>
            <a href="/innovation" className={`text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 ${tab == 3 ? 'bg-slate-400': ''}`}>
              Innovation
            </a>
          </div>
        </div>
      )}
      {!isOpen && isServiceClicked && (
  <div
    onMouseOver={() => serviceClick(true)}
    onMouseOut={() => serviceClick(false)}
    className="absolute top-16 inset-x-0 px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-200/45 z-10"
  >
    <div onClick={()=>{  serviceSubTabClick(); setIsOpen(false); setSubTab(1);}} className={`cursor-pointer text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 ${tab == 2 ? subTab == 1 ?'bg-slate-400':'':''}`}>
      <a >Parts Manufacturing</a>
    </div>
    <div onClick={()=>{ serviceSubTabClick(); setIsOpen(false); setSubTab(2);}} className={`cursor-pointer text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 ${tab == 2 ? subTab == 2 ?'bg-slate-400':'':''}`}>
      <a>Parts Development</a>
    </div>
    <div onClick={()=>{ serviceSubTabClick(); setIsOpen(false); setSubTab(3); }} className={`cursor-pointer text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 ${tab == 2 ? subTab == 3 ?'bg-slate-400':'':''}`}>
      <a >Maintenance Services</a>
    </div>
    <div onClick={()=>{ serviceSubTabClick(); setIsOpen(false); setSubTab(4); }} className={`cursor-pointer text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 ${tab == 2 ? subTab == 4 ?'bg-slate-400':'':''}`}>
      <a >Equipment Modernization</a>
    </div>
  </div>
)}


      {/* {isOpen && (
        <div className="absolute top-16 inset-x-0 bg-gray-800 z-10">
          
        </div>
      )} */}
    </nav>
  );
};

export default Navbar;



// const Navbar = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const handleMouseEnter = () => {
//     setIsDropdownOpen(true);
//   };

//   const handleMouseLeave = () => {
//     setIsDropdownOpen(false);
//   };

//   return (
//     <nav className=" absolute w-full bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
//       <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
//         <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
//           <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">Amjad Engineering</span>
//         </a>
//         <div
//           id="mega-menu-full-image"
//           className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 pt-5 pb-5"
//         >
//           <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
//             <li>
//               <a href="#" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">
//                 About Us
//               </a>
//             </li>
//             <li>
//               <a href="#" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
//                 Innovation
//               </a>
//             </li>
//             <li>
//               <a href="#" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
//               Services
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//       {isDropdownOpen && (
//             <ul
//               id="mega-menu-full-image-dropdown"
//               className=" mt-1 bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600"
//               onMouseEnter={handleMouseEnter}
//               onMouseLeave={handleMouseLeave}
//             >
//               <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6">
//                 <ul className="hidden mb-4 space-y-4 md:mb-0 md:block" aria-labelledby="mega-menu-full-image-button">
//                   <li>
//                     <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
//                       Online Stores
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
//                       Segmentation
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
//                       Marketing CRM
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
//                       Online Stores
//                     </a>
//                   </li>
//                 </ul>
//                 <ul className="mb-4 space-y-4 md:mb-0">
//                   <li>
//                     <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
//                       Our Blog
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
//                       Terms & Conditions
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
//                       License
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
//                       Resources
//                     </a>
//                   </li>
//                 </ul>
//                 <Image
//                   src="/favicon.ico"
//                   width={500}
//                   height={500}
//                   alt="Picture of the author"
//                   className="p-8 bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light dark:hover:bg-blend-darken"
//                 />
//               </div>
//             </ul>
//           )}
//     </nav>
//   );
// };

// export default Navbar;
