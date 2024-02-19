// ServicesSection.js
import React from 'react';
import ServicesList from '../components/ServiceList';
import ServiceDetails from '../components/ServiceDetails';


const ServicesSection = ({ services, selectedService, onSelectService }) => {
  return (
    <section className="services-section md:flex md:flex-row p-4 max-w-custom justify-center mx-auto " >
      <div className="md:w-1/3">
        <ServicesList services={services} onSelectService={onSelectService}   selectedService={selectedService} />
      </div>
      <div className="md:w-2/3 mt-4 md:mt-0">
        <ServiceDetails service={selectedService} />
      </div>
    </section>
  );
};

export default ServicesSection;
