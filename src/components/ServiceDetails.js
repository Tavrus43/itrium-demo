import React from 'react';

function ServiceDetails({ service }) {
  return (
    <div className="service-details w-full px-4 flex flex-col items-center gap-10 " style={{backgroundColor: 'rgba(249, 250, 251, 0.8)'}}>
      {service ? (
        <>
          {/* Image Section occupying full width, placed at the top */}
          <img src={service.mimg} alt={service.title} className="w-full h-96 object-cover"  loading="lazy" />
          
          {/* Description Section */}
          <p className="text-lg my-2 px-6  text-left w-full">{service.description}</p>
          
            <div className=' w-full'>
              {/* Price Table */}
              <div className="w-full px-7 py-2">
                <table className="w-full border-collapse border border-gray-200">
                  <thead>
                    <tr>
                      <th className="border border-gray-200 px-4 py-2">Pakalpojums</th>
                      <th className="border border-gray-200 px-4 py-2">Cena</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Map through prices array to display each price option */}
                    {service.prices.map((priceOption, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-custom-blue text-white' : ''}>
                        <td className="border border-gray-200 px-4 py-2">{priceOption.label}</td>
                        <td className="border border-gray-200 px-4 py-2">{priceOption.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
        </>
      ) : (
        <p>Izveleties servisu</p>
      )}
    </div>
  );
}

export default ServiceDetails;
