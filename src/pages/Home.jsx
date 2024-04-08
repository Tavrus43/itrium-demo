import React, { useState, Suspense, lazy, useEffect } from 'react';

import backgroundServices from '../assets/background-mbb.jpg';
import FormSection from '../sections/FormSection';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { servicesData } from '../data';

// Ленивая загрузка компонентов
const CarouselSection = lazy(() => import('../sections/CarouselSection'));
const ServicesSection = lazy(() => import('../sections/ServicesSection'));
const AboutUsSection = lazy(() => import('../sections/AboutUsSection'));
const ServicesCarouselSection = lazy(() => import('../sections/ServiceCarouselSection'));
const WhyChooseUsSection = lazy(() => import('../sections/WhyChooseUsSection'));
const ContactUsSection = lazy(() => import('../sections/ContactUsSection'));



const Home = () => {

    const [selectedService, setSelectedService] = useState(servicesData[0]);
    const [showCarousel, setShowCarousel] = useState(true);
    const [showContactForm, setShowContactForm] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    
    useEffect(() => {
      window.scrollTo(0, scrollPosition);
    }, [scrollPosition]);
  
    const onSelectService = (service) => {
      setScrollPosition(window.scrollY); 
      setSelectedService(service);
      setShowCarousel(false);
    };
  
  return (
    <div>
    <Suspense fallback={<LoadingSpinner/>}>
    <CarouselSection services={servicesData} onSelectService={onSelectService} />
    <section id="services" style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.5)), url(${backgroundServices})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <div className="text-center py-8">
        <h2 className="text-2xl font-bold">PAKALPOJUMI</h2>
        <p className="text-md text-gray-600 mt-2">Izpētiet mūsu plašo pakalpojumu klāstu</p>
      </div>
      {showCarousel ? (
        <ServicesCarouselSection services={servicesData} onSelectService={onSelectService} />
      ) : (
        <Suspense fallback={<LoadingSpinner/>}> 
          <ServicesSection 
            services={servicesData} 
            selectedService={selectedService} 
            onSelectService={onSelectService} 
            onShowCarousel={() => setShowCarousel(true)} 

          />
        </Suspense>
      )}
    </section>
    <AboutUsSection />
    <WhyChooseUsSection />
    {!showContactForm ? (
      <ContactUsSection onShowForm={() => setShowContactForm(true)} />
    ) : (
      <FormSection onShowContactUs={() => setShowContactForm(false)} />
    )}
  </Suspense> 
    </div>
  )
}

export default Home;