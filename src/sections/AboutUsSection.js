import React from 'react';
import { AcademicCapIcon, FlagIcon } from '@heroicons/react/24/outline';
import img from '../assets/3.jpg';

// Оптимизированный компонент для элемента списка
const InfoItem = ({ icon, title, children }) => (
  <div className="flex space-x-4 items-start">
    <div className="flex items-center justify-center p-6 rounded-full bg-custom-red">
      {icon}
    </div>
    <div>
      <h3 className="font-semibold text-lg uppercase">{title}</h3>
      <p className="text-base mx-2">{children}</p>
    </div>
  </div>
);

const AboutUsSection = () => {
  return (
    <section id="about-us" className="max-w-custom mx-auto text-center py-12">
      <h2 className="text-2xl font-bold  uppercase">PAR MUMS</h2>
      <p className="text-md text-gray-600 mb-8">Jūsu uzticamais partneris.</p>
      <div className="md:flex justify-center items-start space-x-4">
        <div className="md:w-1/2">
          <img src={img} alt="About Us" className="shadow-md object-cover overflow-hidden" loading="lazy" />
        </div>
        <div className="md:w-1/2 space-y-8 mt-8 md:mt-0 text-left">
          <InfoItem icon={<FlagIcon className="h-7 w-7 text-white uppercase font-bold"  />} title="strādājam jau 3 gadus">
          Ar vairāk nekā 3 gadu pieredzi PC servisa nozarē, mēs esam uzticams partneris visām jūsu
          datoru vajadzībām. No pirmajām dienām, mūsu mērķis ir bijis nodrošināt augstākās kvalitātes 
          datoru pārdošanas, remonta un uzbūves pakalpojumus. Mūsu pieredzējušais komandas sastāvs ir
          gatavs risināt jebkuras sarežģītības problēmas, sākot no vienkārša aparatūras uzlabojuma līdz
          sarežģītai sistēmu atjaunošanai. Mēs lepojamies ar to, ka esam palīdzējuši simtiem klientu, gan
          individuāliem lietotājiem, gan uzņēmumiem, sasniegt optimālu datoru darbības efektivitāti un drošību
          </InfoItem>
          <InfoItem icon={<AcademicCapIcon className="h-7 w-7 text-white uppercase"  />} title="Augsta pieredze">
          Mūsu komanda sastāv no augsti kvalificētiem speciālistiem, kuriem ir plašas zināšanas un
          praktiskas iemaņas datoru tehnikas jomā. Katrs no mūsu tehniķiem ir apmācīts un sertificēts, lai 
          nodrošinātu vislabāko servisu mūsu klientiem. Mēs pastāvīgi sekojam līdzi jaunākajām 
          tehnoloģijām un tendencēm, lai mūsu klienti vienmēr saņemtu vismodernākos un efektīvākos
          risinājumus. No sistēmas diagnostikas un vīrusu noņemšanas līdz pilnīgai datoru uzbūvei un 
          pielāgošanai atbilstoši klienta specifiskajām vajadzībām - mēs garantējam augstas kvalitātes
          pakalpojumu un klientu apmierinātību.
            
          </InfoItem>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
