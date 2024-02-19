import React from 'react';
import { AcademicCapIcon, CogIcon,  ShieldCheckIcon, HandThumbUpIcon } from '@heroicons/react/24/outline';
import img1 from '../assets/experience.jpg';
import img2 from '../assets/skill.jpg';
import img3 from '../assets/quality.jpg';
import img4 from '../assets/guarantees.jpg';



const WhyChooseUsSection = () => {
  // Dummy data for the cards, replace with your actual data
  const cardsData = [
    { id: 1, img: img1, title: 'PIEREDZE', text: 'Ar gadiem ilgušu pieredzi datoru servisa nozarē, mēs piedāvājam izcilas kvalitātes pakalpojumus, kas ir mūsu darbības pamatā. Mūsu apņemšanās nodrošināt nevainojamu servisu un klientu apmierinātību ir tas, kas mūs atšķir.', icon: AcademicCapIcon },
    { id: 2, img: img2, title: 'PRASME', text: 'Mūsu komanda ir pieejama 24/7, lai atbalstītu tevi jebkurā tehnoloģiskā jautājumā. Esam apguvuši vismodernākās tehnoloģijas un metodes, lai nodrošinātu efektīvu un ātru problēmu risināšanu. Mūsu prasme ir jūsu miera un garants.', icon: CogIcon },
    { id: 3, img: img3, title: 'KVALITĀTE', text: 'Mūsu komandu veido nozares eksperti ar plašām zināšanām un praktisko pieredzi. Tas ļauj mums garantēt augstākās kvalitātes pakalpojumu sniegšanu. Katrs projekts ir veikts ar precizitāti un uzmanību pret detaļām.    ', icon: HandThumbUpIcon },
    { id: 4, img: img4, title: 'GARANTIJAS', text: 'Mēs piedāvājam inovatīvus risinājumus sarežģītām problēmām, garantējot mūsu darba kvalitāti un ilgtermiņa uzticamību. Mūsu garantijas politika ir veidota, lai dotu tev papildus drošības sajūtu.   ', icon: ShieldCheckIcon },
  ];
  
  

  return (
    <section id="why-choose-us"  style={{backgroundImage: 'linear-gradient(0deg, rgba(223, 223, 223, 1) 0%, rgba(236, 236, 236, 1) 50%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 1) 100%)'}}>
      <div className="py-12 max-w-custom mx-auto">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4 uppercase">Izvēlies mūs</h2>
        <p className="max-w-2xl mx-auto">Uzzini, kāpēc esam ideālā izvēle tavām vajadzībām. Ar augstāko servisa kvalitāti, pieredzējušiem speciālistiem un pielāgotiem risinājumiem, mēs nodrošinām, ka tavs dators ir labākajās rokās. Mēs piedāvājam ne tikai produkta pārdošanu un remontu, bet arī vērtību, kas balstīta uz uzticību un inovāciju</p>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 px-4">
        {cardsData.map((card) => {
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
