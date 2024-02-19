// CarouselSection.js
import React from 'react';
import ServicesCarousel from '../components/ServiceCarousel';

const CarouselSection = ({ services, onSelectService }) => {
  return (
    <section className="carousel-section">
      <ServicesCarousel services={services} onSelectService={onSelectService} />
    </section>
  );
};

export default CarouselSection;
