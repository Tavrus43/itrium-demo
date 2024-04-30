import React from 'react';
import { EnvelopeIcon, PhoneIcon,  MapPinIcon } from '@heroicons/react/24/outline'; // Adjust icon imports as needed
import img from '../assets/contact-form.webp';
import { contactsData } from '../data';

const FormSection = ({ onShowContactUs }) => {

  const [result, setResult] = React.useState("Sūtīt");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Gaidiet....");
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.REACT_APP_PUBLIC_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Veidlapa tika veiksmīgi atsutita");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <section id="form-section" className="py-12 bg-custom-blue text-white">
      <div className="container max-w-custom mx-auto px-4">
        {/* First Row: Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-8">
          <div>
            <MapPinIcon className="h-10 w-10 mx-auto mb-2 text-custom-red" />
            <h3 className="font-bold">Adrese</h3>
            <p>{contactsData.address.city} {contactsData.address.street}</p>
          </div>
          <div>
            <EnvelopeIcon className="h-10 w-10 mx-auto mb-2 text-custom-red" />
            <h3 className="font-bold">E-pasts</h3>
            <p>{contactsData.email}</p>
          </div>
          <div>
            <PhoneIcon className="h-10 w-10 mx-auto mb-2 text-custom-red" />
            <h3 className="font-bold">Telefons</h3>
            <p>{contactsData.phone}</p>
          </div>
        </div>

        {/* Second Row: Form */}
        <div className="flex  justify-between items-start lg:gap-8">
          <div className="w-full lg:w-1/2 hidden lg:flex">
            <img src={img} alt="Contact Form" className="shadow-lg w-full h-auto lg:h-full object-cover" loading="lazy" />
          </div>
          <div className="lg:w-1/2 w-full mt-4 lg:mt-0">
            <h2 className="text-2xl mb-4">Nosūtiet mums ziņu,</h2>
            <h2 className="text-2xl mb-4">vai zvaniet uz {contactsData.phone} </h2>
            <p className="text-14 text-gray-200 mb-4">Jūsu informācija ir aizsargāta</p>
            <form onSubmit={onSubmit}>
            {/* Name */}
              <div className="mb-4">
                <label htmlFor="name" className="sr-only">Jūsu Vārds*</label>
                <input type="text" id="name" name="name" placeholder="Vārds*" className="w-full p-3 rounded text-gray-700 bg-white outline-none focus:ring-2 focus:ring-custom-red transition-colors" required/>
              </div>
              {/* Email */}
              <div className="mb-4">
                <label htmlFor="email" className="sr-only">Jūsu e-pasts*</label>
                <input type="email" id="email" name="email" placeholder="Jūsu e-pasts*" className="w-full p-3 rounded text-gray-700 bg-white outline-none focus:ring-2 focus:ring-custom-red transition-colors" required/>
              </div>
              {/* Subject */}
              <div className="mb-4">
                <label htmlFor="subject" className="sr-only">Tēma*</label>
                <input type="text" id="subject" name="subject" placeholder="Tēma*" className="w-full p-3 rounded text-gray-700 bg-white outline-none focus:ring-2 focus:ring-custom-red transition-colors  invalid:border-pink-500 invalid:text-pink-600" required/>
              </div>
              {/* Message */}
              <div className="mb-4">
                <label htmlFor="message" className="sr-only">Ziņojums*</label>
                <textarea id="message" name="message" placeholder="Ziņojums*" className="w-full p-3  rounded text-gray-700 bg-white outline-none focus:ring-2 focus:ring-custom-red transition-colors h-36" required></textarea>
              </div>
              {/* Submit Button */}
              <button type="submit" className="bg-custom-red  hover:bg-red-700 text-white font-bold py-2 px-8 rounded transition-colors">
                {result}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
