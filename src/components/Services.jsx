// Services.jsx
import React from 'react';
import ServiceItem from './ServiceItem';

const Services = () => {
  const servicesData = [
    {
      imageUrl: 'tienda.jpg',
      title: 'tienda monero',
    },
    {
      imageUrl: 'courier.jpg',
      title: 'importación courier y viajero',
      
    },
    {
      imageUrl: 'shopper.jpg',
      title: 'personal shopper',
      
    },
    {
      imageUrl: 'education.jpg',
      title: 'educación descentralizada',
      
    },
    {
      imageUrl: 'cripto.jpg',
      title: 'puente cripto flat',
    
    },
    {
      imageUrl: 'finance.jpg',
      title: 'vitrina de activos financieros',
    },
    {
        imageUrl: 'liquidez.jpg',
        title: 'liquidez sin interés',
        description: 'favores respaldados en colaterales cripto',
    },
    {
        imageUrl: 'prudencia.jpg',
        title: 'planes prudencia',
        description: 'transición al modo bankless e informacion de trading',
    },
    {
        imageUrl: 'paciencia.jpg',
        title: 'planes paciencia',
        description: 'acuerdos de inversióncon retorno a plazo fijo',
    },
  ];

  return (
    <section id="services" className="min-h-screen bg-black p-8 flex flex-col items-center justify-center">
    <h1 className="text-primary text-4xl font-bold mb-8">Servicios de valor para la comunidad</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 p-8 lg:grid-cols-3 gap-8">
      {servicesData.map((service, index) => (
        <ServiceItem key={index} {...service} />
      ))}
    </div>
  </section>
  );
};

export default Services;

