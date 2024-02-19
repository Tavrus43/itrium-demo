import React from 'react';

function ServiceDetails({ service }) {
  return (
    <div className="service-details w-full px-4 flex flex-col items-center gap-10 " style={{backgroundColor: 'rgba(249, 250, 251, 0.8)'}}>
      {service ? (
        <>
          {/* Image Section occupying full width, placed at the top */}
          <img src={service.mimg} alt={service.title} className="w-full h-96 object-cover"  loading="lazy" />
          
          {/* Description Section */}
          <p className="text-lg my-2 px-6  text-left w-full">{service.description}{service.description}</p>
          
          <div className=' w-full'>
          {/* Price Block 1 */}
            <div className="w-full flex justify-between p-7">
              <h4 className="text-xl font-bold">Cena</h4>
              <p className="text-lg">{service.price}</p>
            </div>

            {/* Price Block 2 - Assuming you want to show something else here or it's duplicated by mistake */}
            <div className="w-full flex justify-between p-7">
              <h4 className="text-xl font-bold">cena</h4> {/* Change title as needed */}
              <p className="text-lg">{service.price}</p>
            </div>
          </div>
        </>
      ) : (
        <p>Select a service to see details.</p>
      )}
    </div>
  );
}

export default ServiceDetails;
