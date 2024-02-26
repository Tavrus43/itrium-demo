import React from 'react';
import { ChevronDoubleUpIcon, EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline'; // Example icons
import img from '../assets/footer-bg.jpg';

const Footer = () => {
  // Example work hours data
  const workHours = [
    { day: 'Pirmdiena', hours: '9:00 - 17:00' },
    { day: 'Otrdiena', hours: '9:00 - 17:00' },
    { day: 'Trešdiena', hours: '9:00 - 17:00' },
    { day: 'Ceturtdiena', hours: '9:00 - 17:00' },
    { day: 'Piektdiena', hours: '9:00 - 17:00' },
    { day: 'Sestdiena', hours: 'Slēgts' }, // Assuming closed on Saturdays
    { day: 'Svētdiena', hours: 'Slēgts' },  // Assuming closed on Sundays
  ];
  

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="ralative italic text-white text-14" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${img})`}}>
      
      <div className="container max-w-custom mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10 text-left">
        {/* Subscribe Column */}
        <div>
          
          <h3 className="font-bold text-xl mb-5">ABONĒT</h3>
          <p>Saņem jaunākās ziņas un atjauninājumus tieši savā pastkastē.</p>
          <label htmlFor="email" className="sr-only">Email Address</label>
          <input id="email" type="email" placeholder="E-pasts" className="mt-2 p-2 bg-gray-700 rounded-f outline-none" />
          <button className="mt-2 p-2 bg-custom-red hover:bg-red-800 rounded-r text-white transition duration-150 ease-in-out">Abonēt</button>
        </div>

        {/* Address Column */}
        <div>
          <h3 className="font-bold text-xl mb-5">ADRESE</h3>
          <div className="flex items-center mb-3">
            <MapPinIcon className="h-5 w-5 text-custom-red-light mr-2" />
            <span className="align-middle">Rēzekne, Atbrīvošanas aleja 167, 
LV-4604</span>
          </div>
          <div className="flex items-center  mb-2">
            <PhoneIcon className="h-5 w-5 mr-3  text-custom-red-light" />
            <span className="align-middle">+371 000-000-00</span>
          </div>
          <div className="flex items-center">
            <EnvelopeIcon className="h-5 w-5 text-custom-red-light mr-3" />
            <span className="align-middle text-custom-red-light">info@itrium.lv</span>
          </div>
        </div>


        {/* Work Hours Column */}
        <div>
  <h3 className="font-bold text-xl mb-5">DARBA LAIKS</h3>
  {workHours.map(({ day, hours }) => (
    <div key={day} className="flex justify-between items-center mb-2">
      <span className=" z-10 relative">{day}</span>
      <div className="flex-grow border-b border-dotted  mx-2 mt-4"></div>
      <span className=" z-10 relative">{hours}</span>
    </div>
  ))}
</div>
      </div>

      {/* Second Row */}
      <div className="container max-w-custom mx-auto px-6 py-4 flex justify-between items-center border-t border-gray-700">
        <span>&copy; 2024 Made by Tavrus</span>
        <ChevronDoubleUpIcon className="h-8 w-8 cursor-pointer" onClick={scrollToTop} />
      </div>
    </footer>
  );
};

export default Footer;
