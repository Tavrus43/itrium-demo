
function ServicesList({ services, onSelectService, selectedService }) {
  // State to track the selected service

  const handleSelectService = (service) => {
    onSelectService(service);

  };

  return (
    <div className="w-full">
      <ul className="services-list">
        {services.map(service => (
          <li 
            key={service.id} 
            className={`service-item cursor-pointer p-3 hover: 
            ${selectedService && selectedService.id === service.id ? 
            'hover:bg-custom-blue bg-custom-blue text-white' : 'text-left text-lg'} transition-colors duration-300 ease-in-out px-4 py-3`} 
            style={{ backgroundColor: selectedService && selectedService.id === service.id ? '' : 'rgba(229, 231, 235, 0.8)' ,  fontSize: '18px', padding: '12px 16px', marginBottom: '1px' }}
            onClick={() => handleSelectService(service)}
          
          >
            {service.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServicesList;
