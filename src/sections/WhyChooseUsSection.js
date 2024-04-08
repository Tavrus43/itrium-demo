import React from 'react';
import { whyChooseUsData } from '../data';

const WhyChooseUsSection = () => {

  

  return (
    <section id="why-choose-us"  style={{backgroundImage: 'linear-gradient(0deg, rgba(223, 223, 223, 1) 0%, rgba(236, 236, 236, 1) 50%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 1) 100%)'}}>
      <div className="py-12 max-w-custom mx-auto">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4 uppercase">{whyChooseUsData.title}</h2>
        <p className="max-w-2xl mx-auto">{whyChooseUsData.description}</p>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 px-4">
        {whyChooseUsData.cards.map((card) => {
          const IconComponent = card.icon; // Dynamically determine the icon component
          return (
            <div key={card.id} className="rounded overflow-hidden shadow-lg flex flex-col bg-white">
              <div className="relative overflow-hidden" style={{height: '33%'}}>
                <img className="w-full h-full object-cover" src={card.img} alt="" style={{clipPath: 'circle(100% at 50% 0)'}} loading="lazy" />
              </div>
              
              {/* Content below the image */}
              <div className="px-6 py-6 text-center flex-grow">
                <div className="inline-block">
                  <IconComponent className="h-9 w-9  text-custom-red mb-2" />
                </div>
                <div className="font-bold text-xl uppercase pb-4" style={{fontSize: '18px'}}>{card.title}</div>
                <p className="text-gray-700 text-justify" style={{fontSize: '16px'}}>{card.text}</p>
              </div>
            </div>
          );
        })}
      </div>

      </div>
    </section>
  );
};

export default WhyChooseUsSection;
