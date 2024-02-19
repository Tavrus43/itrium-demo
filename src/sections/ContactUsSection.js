import React from 'react';
import CustomButton from '../components/CustomButton';
import img from '../assets/contact-us.jpg';

const ContactUsSection = ({onShowForm}) => {
  return (
    <section id="contact-us" className="py-12 bg-custom-blue text-white font-bold">
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-center max-w-custom  ">
        {/* Left Column */}
        <div className="lg:w-2/3 mb-4 lg:mb-0 md:text-left">
          <h2 className="text-3xl font-bold pb-6">Nevari strādāt? Tavs dators bremzē?</h2>
          <p className="text-5xl  mb-12">Mēs palīdzēsim jums. Ātri un Kvalitatīvi.</p>
          <CustomButton  onClick={onShowForm} className="contact-us-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
            PIETEIKTIES
          </CustomButton>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/3 hidden lg:flex justify-end">
          <img src={img}  alt="Contact Us" className="rounded-full w-200 h-200 object-cover" />
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
