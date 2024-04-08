
//servisa rekomendacijas attelu izmeri   ServiceImg=1920x500 ServiceSmallImg=300x300 ServiceMimg=700x700 px
import ServiceImg1 from './assets/img-cleaning.jpg';
import ServiceSmallImg1 from './assets/simg-cleaning.webp';
import ServiceMimg1 from './assets/mimg-cleaning.webp';

import ServiceImg2 from './assets/img-software.jpg';
import ServiceSmallImg2 from './assets/simg-software.png';
import ServiceMimg2 from './assets/mimg-software.webp';

import ServiceImg3 from './assets/img-videonoveresana.png';
import ServiceSmallImg3 from './assets/simg-videonoveresana.jpeg';
import ServiceMimg3 from './assets/mimg-videonoverasana.jpg';

import ServiceImg4 from './assets/img-localie-tikli.webp';
import ServiceSmallImg4 from './assets/simg-lokalie-tikli.jpg';
import ServiceMimg4 from './assets/mimg-lokalie-tikli.jpg';

import ServiceImg5 from './assets/img-server.png';
import ServiceSmallImg5 from './assets/simg-server.webp';
import ServiceMimg5 from './assets/mimg-server.webp';


//why choose us
import img1 from './assets/experience.jpg';
import img2 from './assets/skill.jpg';
import img3 from './assets/quality.jpg';
import img4 from './assets/guarantees.jpg';
import { AcademicCapIcon, CogIcon,  ShieldCheckIcon, HandThumbUpIcon } from '@heroicons/react/24/outline';

const servicesData = [
    {
    id: 'service1',
    title: 'Portatīvo un stacionāro datoru remonts un apkope',
    headline: 'Profesionāla datoru apkope un remonts', 
    shortDescription: 'Nodrošinām pilna servisa remonta un apkopes pakalpojumus gan portatīvajiem, gan stacionārajiem datoriem.',
    description: 'Mēs piedāvājam profesionālu datoru remonta un apkopes pakalpojumus gan portatīvajiem, gan stacionārajiem datoriem. Neatkarīgi no tā, vai jums ir problēmas ar apgrūtinātu palēnināšanos, siltuma problēmām vai citām tehniskām problēmām, mūsu ekspertu komanda nodrošinās, ka jūsu dators darbosies nevainojami, veicot remontu un apkopi atbilstoši visaugstākajiem standartiem.',
    img: ServiceImg1,
    smalimg: ServiceSmallImg1,
    mimg: ServiceMimg1,
    prices: [
      { label: 'Mazs apjoms', price: '50,00 €' },
      { label: 'Vidējs apjoms', price: '75,00 €' },
      { label: 'Liels apjoms', price: '100,00 €' }
    ]
    },
    {
    id: 'service2',
    title: 'Programmatūras uzstādīšana un konfigurēšana',
    headline: 'Profesionāla programmatūras uzstādīšana un konfigurēšana',
    shortDescription: 'Nodrošinām operētājsistēmu un programmatūras uzstādīšanu un konfigurēšanu, lai jūsu dators darbotos optimāli.',
    description: 'Mūsu eksperti nodrošinās operētājsistēmu un jebkuras programmatūras uzstādīšanu un konfigurēšanu, lai jūsu dators darbotos optimāli. Lai izvairītos no nesaprašanās un lai jūsu sistēma darbotos bez problēmām, mēs palīdzēsim jums izvēlēties un uzstādīt nepieciešamo programmatūru, kas atbilst jūsu individuālajām vajadzībām un prasībām.',
    img: ServiceImg2,
    smalimg: ServiceSmallImg2,
    mimg: ServiceMimg2,
    prices: [
      { label: 'Mazs apjoms', price: '50,00 €' },
      { label: 'Vidējs apjoms', price: '75,00 €' },
      { label: 'Liels apjoms', price: '100,00 €' }
    ]
    },
    {
    id: 'service3',
    title: 'Videonovērošanas sistēmu projektēšana, uzstādīšana un konfigurēšana',
    headline: 'Profesionāla videonovērošanas sistēmu izstrāde',
    shortDescription: 'Piedāvājam pilna servisa videonovērošanas sistēmu izstrādes pakalpojumus, sākot no projektēšanas līdz uzstādīšanai un konfigurēšanai.',
    description: 'Mēs piedāvājam pilna servisa videonovērošanas sistēmu izstrādes pakalpojumus, sākot no projektēšanas līdz uzstādīšanai un konfigurēšanai. Neatkarīgi no tā, vai jums ir nepieciešama videonovērošanas sistēma jūsu mājas vai uzņēmuma drošībai, mūsu eksperti izstrādās un uzstādīs sistēmu, kas atbilst jūsu drošības prasībām un vajadzībām, nodrošinot optimālu aizsardzību.',
    img: ServiceImg3,
    smalimg: ServiceSmallImg3,
    mimg: ServiceMimg3,
    prices: [
      { label: 'Mazs apjoms', price: '50,00 €' },
      { label: 'Vidējs apjoms', price: '75,00 €' },
      { label: 'Liels apjoms', price: '100,00 €' }
    ]
    },
    {
    id: 'service4',
    title: 'Lokālo tīklu projektēšana, instalēšana, tīkla aprīkojuma konfigurēšana',
    headline: 'Profesionāla lokālo tīklu izveide',
    shortDescription: 'Nodrošinām pilna servisa lokālo tīklu projektēšanas, instalēšanas un konfigurēšanas pakalpojumus.',
    description: 'Mēs piedāvājam pilna servisa lokālo tīklu projektēšanas, instalēšanas un konfigurēšanas pakalpojumus. Neatkarīgi no tā, vai jums ir nepieciešams izveidot lokālo tīklu savā uzņēmumā vai mājās, mūsu eksperti palīdzēs jums izveidot un uzstādīt efektīvu lokālo tīklu, kas nodrošina stabilu un drošu datu pārraidi.',
    img: ServiceImg4,
    smalimg: ServiceSmallImg4,
    mimg: ServiceMimg4,
    prices: [
      { label: 'Mazs apjoms', price: '50,00 €' },
      { label: 'Vidējs apjoms', price: '75,00 €' },
      { label: 'Liels apjoms', price: '100,00 €' }
    ]
    },
    {
    id: 'service5',
    title: 'Serveru komplektēšana un konfigurēšana',
    headline: 'Profesionāla serveru izveide',
    shortDescription: 'Nodrošinām pilna servisa serveru komplektēšanas un konfigurēšanas pakalpojumus.',
    description: 'Mēs piedāvājam pilna servisa serveru komplektēšanas un konfigurēšanas pakalpojumus. Neatkarīgi no tā, vai jums ir nepieciešams izveidot serveru savā uzņēmumā vai mājās, mūsu eksperti palīdzēs jums izvēlēties un uzstādīt pareizo serveri, kas atbilst jūsu uzņēmuma vajadzībām un prasībām.',
    img: ServiceImg5,
    smalimg: ServiceSmallImg5,
    mimg: ServiceMimg5,
    prices: [
      { label: 'Mazs apjoms', price: '50,00 €' },
      { label: 'Vidējs apjoms', price: '75,00 €' },
      { label: 'Liels apjoms', price: '100,00 €' }
    ]
    }
    // ...citi dati
];

const aboutUsData = {
    infoItems: [
      {
        title: 'strādājam jau 3 gadus',
        description: `Ar vairāk nekā 3 gadu pieredzi PC servisa nozarē, mēs esam uzticams partneris visām jūsu
        datoru vajadzībām. No pirmajām dienām, mūsu mērķis ir bijis nodrošināt augstākās kvalitātes 
        datoru pārdošanas, remonta un uzbūves pakalpojumus. Mūsu pieredzējušais komandas sastāvs ir
        gatavs risināt jebkuras sarežģītības problēmas, sākot no vienkārša aparatūras uzlabojuma līdz
        sarežģītai sistēmu atjaunošanai. Mēs lepojamies ar to, ka esam palīdzējuši simtiem klientu, gan
        individuāliem lietotājiem, gan uzņēmumiem, sasniegt optimālu datoru darbības efektivitāti un drošību.`,
      },
      {
        
        title: 'Augsta pieredze',
        description: `Mūsu komanda sastāv no augsti kvalificētiem speciālistiem, kuriem ir plašas zināšanas un
        praktiskas iemaņas datoru tehnikas jomā. Katrs no mūsu tehniķiem ir apmācīts un sertificēts, lai 
        nodrošinātu vislabāko servisu mūsu klientiem. Mēs pastāvīgi sekojam līdzi jaunākajām 
        tehnoloģijām un tendencēm, lai mūsu klienti vienmēr saņemtu vismodernākos un efektīvākos
        risinājumus. No sistēmas diagnostikas un vīrusu noņemšanas līdz pilnīgai datoru uzbūvei un 
        pielāgošanai atbilstoši klienta specifiskajām vajadzībām - mēs garantējam augstas kvalitātes
        pakalpojumu un klientu apmierinātību.`,
      },
    ],
};

const contactsData = {
        address: {
            city: 'Rēzekne',
            street: 'Atbrīvošanas aleja 167',
            code: 'LV-4604'
        },
        phone: '+371 000 000 000',
        email: 'info@itrium.com',
        // ... citi kontakta dati
};

const whyChooseUsData = {
    title: 'Izvēlies mūs',
    description: 'Uzzini, kāpēc esam ideālā izvēle tavām vajadzībām. Ar augstāko servisa kvalitāti, pieredzējušiem speciālistiem un pielāgotiem risinājumiem, mēs nodrošinām, ka tavs dators ir labākajās rokās. Mēs piedāvājam ne tikai produkta pārdošanu un remontu, bet arī vērtību, kas balstīta uz uzticību un inovāciju',
    cards : [
        { id: 1, img: img1, title: 'PIEREDZE', text: 'Ar gadiem ilgušu pieredzi datoru servisa nozarē, mēs piedāvājam izcilas kvalitātes pakalpojumus, kas ir mūsu darbības pamatā. Mūsu apņemšanās nodrošināt nevainojamu servisu un klientu apmierinātību ir tas, kas mūs atšķir.', icon: AcademicCapIcon },
        { id: 2, img: img2, title: 'PRASME', text: 'Mūsu komanda ir pieejama 24/7, lai atbalstītu tevi jebkurā tehnoloģiskā jautājumā. Esam apguvuši vismodernākās tehnoloģijas un metodes, lai nodrošinātu efektīvu un ātru problēmu risināšanu. Mūsu prasme ir jūsu miera un garants.', icon: CogIcon },
        { id: 3, img: img3, title: 'KVALITĀTE', text: 'Mūsu komandu veido nozares eksperti ar plašām zināšanām un praktisko pieredzi. Tas ļauj mums garantēt augstākās kvalitātes pakalpojumu sniegšanu. Katrs projekts ir veikts ar precizitāti un uzmanību pret detaļām.    ', icon: HandThumbUpIcon },
        { id: 4, img: img4, title: 'GARANTIJAS', text: 'Mēs piedāvājam inovatīvus risinājumus sarežģītām problēmām, garantējot mūsu darba kvalitāti un ilgtermiņa uzticamību. Mūsu garantijas politika ir veidota, lai dotu tev papildus drošības sajūtu.   ', icon: ShieldCheckIcon },
    ],
   
};

const workHours = [
        { day: 'Pirmdiena', hours: '9:00 - 17:00' },
        { day: 'Otrdiena', hours: '9:00 - 17:00' },
        { day: 'Trešdiena', hours: '9:00 - 17:00' },
        { day: 'Ceturtdiena', hours: '9:00 - 17:00' },
        { day: 'Piektdiena', hours: '9:00 - 17:00' },
        { day: 'Sestdiena', hours: 'Slēgts' }, 
        { day: 'Svētdiena', hours: 'Slēgts' },  
        // ... citi 
];  
 
export { servicesData, contactsData, workHours, aboutUsData, whyChooseUsData };