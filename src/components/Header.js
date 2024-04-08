import React, { useState } from 'react';
import { PhoneIcon, ClockIcon, MapPinIcon, Bars3Icon } from '@heroicons/react/24/outline';
import './Header.css'; // Assuming custom CSS for specific styles not covered by Tailwind
import { Link } from 'react-router-dom';

import { contactsData } from '../data';
const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  return (
    <header id='home' className="font-sans bg-gray-100"> {/* Font applied here if global setting is not preferred */}
      {/* Top tier of the header */}
      <div className=" text-text-color h-20 flex justify-between items-center max-w-custom mx-auto">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center" style={{ padding: '0 16px', width: '69px', height: '69px' }}>
            <img src="/path-to-your-logo.png" alt="Logo" className="w-full h-full" />
          </div>
          {/* Info items - Order changed */}
          <div className="flex">
            <div className="hidden md:flex items-center mx-auto justify-center w-52 " >
              <ClockIcon className="h-5 w-5 mr-2 text-custom-red " style={{ width: '30px', height: '30px' }} />
              <span className='ml1-2 text-right leading-tight'>
                <span className="block text-13">Pirm-Piekt. 8:00-16:00</span>
                <span className="text-13">Brīvdienas - aizērts</span>
              </span>
            </div>
            <div className="hidden md:flex items-center mx-auto justify-center w-52" >
              <MapPinIcon className="h-5 w-5 mr-2 text-custom-red" style={{ width: '30px', height: '30px' }} />
              <span className='ml1-2 text-right leading-tight'>
                <span className="block text-13"> {contactsData.address.city}</span>
                <span className="text-13"> {contactsData.address.street}</span>
              </span>
            </div>
            <div className="flex items-center  " style={{ padding: '0 16px' }}>
              <div className="bg-custom-red rounded-full relative" style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <PhoneIcon className="h-6 w-6 text-white absolute top-1/2 left-1/2" style={{ transform: 'translate(-50%, -50%)', width: '30px', height: '30px' }} />
              </div>
              <span className="ml-2 text-right leading-tight">
                <span className="block text-bold  md:text-21 text-26">{contactsData.phone}</span>
                <span className="text-13">Saziņies ar mums</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-text-color flex justify-between items-center border-b border-gray-300"/>
    {/* Second tier of the header */}
    <div className=" text-text-color sticky top-0 max-w-custom mx-auto">
      <div className="container mx-auto flex justify-between items-center">
        {/* Burger menu icon for smaller screens */}
        <div className="md:hidden flex justify-end w-full">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <Bars3Icon className="h-8 w-8 mx-4 text-gray-800"/>
          </button>
        </div>
        {/* Navigation links - hidden on small screens, visible on md and larger */}
        <nav className="hidden md:flex">
            {/* Updated links to use React Router Link */}
            <Link to="/itrium-demo" className="font-bold text-14 px-4 py-3  hover:text-custom-red link-hover">ITRIUMS</Link>
            <a href={process.env.REACT_APP_SHOP_URL} className="font-bold text-16 px-4 py-2.5  hover:text-custom-red link-hover">E-VEIKALS</a>
            {/* You can keep the other links as regular anchor tags */}
            <a href="#services" className="font-bold text-14 px-4 py-3 hover:text-custom-red link-hover">PAKALPOJUMI</a>
            <a href="#about-us" className="font-bold text-14 px-4 py-3 hover:text-custom-red link-hover">PAR MUMS</a>
            <a href="#contact-us" className="font-bold text-14 px-4 py-3 hover:text-custom-red link-hover">KONTAKTI</a>
          </nav>
      {/* Mobile menu - shown when burger menu is clicked */}
      {isMobileMenuOpen && (
        <div className="md:hidden shadow-md">
          {/* Updated links to use React Router Link */}
          <Link to="/itrium-demo" className="block px-4 py-2 text-14 text-gray-800 hover:bg-gray-200 link-hover" >ITRIUMS</Link>
          <a href={process.env.REACT_APP_SHOP_URL} className="block px-4 py-2 text-14 text-gray-800 hover:bg-gray-200 link-hover">E-VEIKALS</a>
          {/* You can keep the other links as regular anchor tags */}
          <a href="#services" className="block px-4 py-2 text-14 text-gray-800 hover:bg-gray-200 link-hover">PAKALPOJUMI</a>
          <a href="#about-us" className="block px-4 py-2 text-14 text-gray-800 hover:bg-gray-200 link-hover">PAR MUMS</a>
          <a href="#contact-us" className="block px-4 py-2 text-14  text-gray-800 hover:bg-gray-200 link-hover">KONTAKTI</a>
        </div>
      )}
    </div>
    </div>
    <div className=" text-text-color flex justify-between items-center border-b border-gray-300"/>
    </header>
  );
};

export default Header;
