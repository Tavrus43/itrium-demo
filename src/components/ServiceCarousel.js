import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import CustomButton from './CustomButton';
import "./ServiceCarousel.css";

function ServicesCarousel({ services, onSelectService }) {
  const handleReadMore = (service) => {
    onSelectService(service);
    // Scroll to the services section
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
  };



    return (
      <Carousel className='custom-carousel' showThumbs={false} autoPlay={true} infiniteLoop={true} showStatus={false} >
        {services.map(service => (
          <div key={service.id} className="carousel-item-container relative flex items-center justify-center" style={{ backgroundImage: `url(${service.img})` }}>
            <div className="carousel-content text-white flex flex-col items-center text-center">
              <h2 className='lg:text-5xl text-4xl font-cabin font-bold mt-10 pb-8'>{service.title}</h2>
              <p className='text-16'>{service.shortDescription}</p>
              <div className="mt-auto" style={{ paddingBottom: '40px' }}>
                <CustomButton onClick={() => handleReadMore(service)}>LASĪT VAIRĀK</CustomButton>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
  
    
  );
}

export default ServicesCarousel;
