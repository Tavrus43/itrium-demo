import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import ServiceCard from '../components/ServiceCard';
import { Autoplay, Pagination } from 'swiper/modules';

const ServicesCarouselSection = ({ services, onSelectService }) => {
  return (
    <div className=' pb-8'>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1} // Default to 1 card on the smallest screens
        spaceBetween={30}
        autoplay = {true}
        className="mySwiper max-w-custom max-h-auto "
        breakpoints={{
          // When window width is >= 640px (e.g., for medium screens)
          640: {
            slidesPerView: 2,
          },
          // When window width is >= 1024px (e.g., for large screens)
          1024: {
            slidesPerView: 3, // Adjust if you want to revert back to 3 cards on larger screens
          },
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={service.id}>
          <div className="flex justify-between gap-5">
            
              <ServiceCard service={service} onSelectService={onSelectService} className=""/>
            
          </div>

          </SwiperSlide>
      ))}
      </Swiper>
    </div>
  );
};

export default ServicesCarouselSection;