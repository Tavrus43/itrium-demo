import React from 'react';
import { WrenchIcon } from '@heroicons/react/24/solid'; // Ensure the correct import path

const ServiceCard = React.memo(({ service, onSelectService }) => {
  // Function to truncate the description text

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <div className="w-full rounded shadow-lg bg-white relative hover:text-white transition-colors duration-300 ease-in-out group pb-2" style={{ height: "572px" }}>
      {/* Image Section */}
      <div className="h-1/2 overflow-hidden">
        <img className="w-full h-full object-cover transform transition duration-700 ease-in-out hover:scale-110" src={service.smalimg} alt={service.title} loading="lazy" />
      </div>
      
      {/* Positioned Icon Container */}
      <div className="absolute w-full flex justify-center" style={{ top: '51%', transform: 'translateY(-50%)', zIndex: 10 }}>
        <div className="bg-custom-red p-4 rounded-full" style={{ marginTop: '-1rem' }}>
          <WrenchIcon className="h-6 w-6 text-white" />
        </div>
      </div>
      
      {/* Text Description and Button Section */}
      <div className="h-1/2 flex flex-col justify-between pt-12 group-hover:bg-custom-blue">
        <div className="px-6">
          <div className="font-bold text-xl mb-2">{service.title}</div>
          <p>
            {truncateText(service.description, 140)} {/* Truncate text if it's too long */}
          </p>
        </div>
        <div className="px-6 pb-2">
          <button onClick={() => onSelectService(service)} className="  group-hover:bg-custom-red text-text-color group-hover:text-white transition-colors duration-300 ease-in-out font-sans border text-13 py-2 px-8 mb-8">
            Lasīt talāk
          </button>
        </div>
      </div>
    </div>
  );
});

export default ServiceCard;
