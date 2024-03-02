import React, { useState, Suspense, lazy, useEffect } from 'react';
import './App.css'; // Ensure Tailwind CSS is imported
import Header from './components/Header';
import ServiceImg1 from './assets/img-datoru-montaza.webp';
import ServiceSmallImg1 from './assets/simg-datoru-montaza.jpg';
import Servicemimg1 from './assets/mimg-datoru-montaza.jpg';
import ServiceImg2 from './assets/img-virus.webp';
import ServiceSmallImg2 from './assets/simg-virus.jpg';
import Servicemimg2 from './assets/mimg-virus.jpg';
import ServiceImg3 from './assets/img-software.jpg';
import ServiceSmallImg3 from './assets/simg-software.png';
import Servicemimg3 from './assets/mimg-software.jpg';
import ServiceImg4 from './assets/img-website.webp';
import ServiceSmallImg4 from './assets/simg-website.jpg';
import Servicemimg4 from './assets/mimg-website.jpg';
import ServiceImg5 from './assets/img-cleaning.jpg';
import ServiceSmallImg5 from './assets/simg-cleaning.webp';
import Servicemimg5 from './assets/mimg-cleaning.webp';



import backgroundServices from './assets/background-mbb.jpg';
import FormSection from './sections/FormSection';
import { LoadingSpinner } from './components/LoadingSpinner';
import ProductsSection from './sections/ProductSection';







// Ленивая загрузка компонентов
const CarouselSection = lazy(() => import('./sections/CarouselSection'));
const ServicesSection = lazy(() => import('./sections/ServicesSection'));
const AboutUsSection = lazy(() => import('./sections/AboutUsSection'));
const ServicesCarouselSection = lazy(() => import('./sections/ServiceCarouselSection'));
const WhyChooseUsSection = lazy(() => import('./sections/WhyChooseUsSection'));
const ContactUsSection = lazy(() => import('./sections/ContactUsSection'));
const Footer = lazy(() => import('./components/Footer'));

const servicesData = [
  { 
    id: 'service1', 
    title: 'Datoru montāža', 
    headline: 'Pielāgota datoru montāža', // Optional field for attention-grabbing headline
    shortDescription: 'Izveido savu ideālo darbstaciju ar mūsu pielāgotās datoru montāžas pakalpojumu. No spēļu monstru līdz biroja efektivitātei.', 
    description: 'Mūsu eksperti izvēlēsies labākās detaļas atbilstoši jūsu vajadzībām un budžetam, nodrošinot maksimālu veiktspēju.Vissvarīgākā datora izveides priekšrocība ir tā izmaksas. Daudz izdevīgāk ir iegādāties datora komponentus atsevišķi, nekā pirkt visu datoru. ar tādām pašām īpašībām. Taču daudzi nereti saskaras ar faktu, ka pietrūkst nepieciešamo iemaņu, lai kārtīgi saliktu datoru, nestiepjot vadus un citus sīkus, bet svarīgus punktus. Pat pēc pareizas datora montāžas, kad tas ir ieslēgts, tas nerāda ekrānu.Varu palīdzēt salikt datoru pēc Jūsu individuālajām vēlmēm, ņemot vērā visas Jūsu vajadzības absolūti jebkuras sarežģītības, gan spēļu PC, gan ofisa komplektācijā.', 
    img: ServiceImg1, 
    smalimg: ServiceSmallImg1,
    mimg: Servicemimg1,  
    price: 'Pēc pasūtījuma' 
  },
  { 
    id: 'service2', 
    title: 'Vīrusu noņemšana', 
    headline: 'Tīrs dators bez vīrusiem', 
    shortDescription: 'Atbrīvojieties no kaitīgām programmām un vīrusiem, kas palēnina jūsu datoru, ar mūsu profesionālo vīrusu noņemšanas pakalpojumu.', 
    description: 'Mēs izmantojam jaunākās tehnoloģijas, lai identificētu un noņemtu visas draudus, atjaunojot jūsu sistēmas stabilitāti un drošību.', 
    img: ServiceImg2, 
    smalimg: ServiceSmallImg2, 
    mimg: Servicemimg2,  
    price: '75,00 €' 
  },
  { 
    id: 'service3', 
    title: 'Programmatūras uzstādīšana', 
    headline: 'Programmatūras uzstādīšana un konfigurācija', 
    shortDescription: 'Nodrošinām profesionālu operētājsistēmu un jebkuras programmatūras uzstādīšanu un konfigurāciju, lai jūsu dators darbotos nevainojami.', 
    description: 'Mēs palīdzēsim jums izvēlēties un uzstādīt pareizo programmatūru, kas atbilst jūsu personīgajām un profesionālajām vajadzībām.', 
    img: ServiceImg3, 
    smalimg: ServiceSmallImg3, 
    mimg: Servicemimg3,  
    price: '50,00 €' 
  },
  { 
    id: 'service4', 
    title: 'Mājas lapu izstrāde', 
    headline: 'Profesionāla mājas lapu izstrāde', 
    shortDescription: 'Piedāvājam pilna servisa mājas lapu izstrādes pakalpojumus, sākot no dizaina līdz pilnīgai realizācijai.', 
    description: 'Izveidojiet spēcīgu tiešsaistes klātbūtni ar mūsu pielāgotām mājas lapām, kas ir optimizētas lietotāju pieredzei un meklētājprogrammu optimizācijai.', 
    img: ServiceImg4, 
    smalimg: ServiceSmallImg4,
    mimg: Servicemimg4,   
    price: 'Pēc pasūtījuma' 
  },
  {
    id: 'service5',
    title: 'Datoru tīrīšana un apkope',
    headline: 'Profesionāla datoru tīrīšana un apkope',
    shortDescription: 'Pagariniet sava datora kalpošanas laiku ar mūsu datoru tīrīšanas un apkopes pakalpojumu, kas novērš pārkaršanu un citus biežus problēmas.',
    description: 'Mēs nodrošinām rūpīgu datora iekšējo un ārējo tīrīšanu, kā arī programmatūras un aparatūras diagnostiku, lai jūsu ierīce darbotos maksimāli efektīvi.',
    img: ServiceImg5, 
    smalimg: ServiceSmallImg5, 
    mimg: Servicemimg5,  
    price: '30,00 €'
  }
  // Add more services as needed
];

function App() {
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
    <div className="App">
      <Header />
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
            <Suspense fallback={<LoadingSpinner/>}> {/* Display a loading message or a spinner */}
              <ServicesSection services={servicesData} selectedService={selectedService} onSelectService={onSelectService} onShowCarousel={() => setShowCarousel(true)} />
            </Suspense>
          )}
        </section>
        <AboutUsSection />
        <ProductsSection/>
        <WhyChooseUsSection />
        {!showContactForm ? (
          <ContactUsSection onShowForm={() => setShowContactForm(true)} />
        ) : (
          <FormSection onShowContactUs={() => setShowContactForm(false)} />
        )}
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;