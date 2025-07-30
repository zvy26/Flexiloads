import React from 'react';
import Helicopter from "../assets/images/Helicopter.png";
import Ship from "../assets/images/Ship.png";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Air Freight",
      description: "When you need your shipment at any destination of your choice in the shortest possible time, then be rest assured we will fly it for you. Forget about paying outrageous shipping fees as we offer fast, affordable and stress shipping and free package forwarding services. Still thinking? Don't. Just send your next package from Amazon, Ebay, Apple...etc and we will deliver right to your doorstep anywhere within our reach. With daily and weekly cargo flights, you can be rest assured that we will get your goods to their destination in time.",
      image: Helicopter,
      imageAlt: "Airplane flying through clouds at sunset"
    },
    {
      id: 2,
      title: "Ocean Freight", 
      description: "When you need your shipment at any destination of your choice in the shortest possible time, then be rest assured we will fly it for you. Forget about paying outrageous shipping fees as we offer fast, affordable and stress shipping and free package forwarding services. Still thinking? Don't. Just send your next package from Amazon, Ebay, Apple...etc and we will deliver right to your doorstep anywhere within our reach. With daily and weekly cargo flights, you can be rest assured that we will get your goods to their destination in time.",
      image: Ship,
      imageAlt: "Cargo containers at shipping port"
    },
    {
      id: 3,
      title: "Air Freight",
      description: "When you need your shipment at any destination of your choice in the shortest possible time, then be rest assured we will fly it for you. Forget about paying outrageous shipping fees as we offer fast, affordable and stress shipping and free package forwarding services. Still thinking? Don't. Just send your next package from Amazon, Ebay, Apple...etc and we will deliver right to your doorstep anywhere within our reach. With daily and weekly cargo flights, you can be rest assured that we will get your goods to their destination in time.",
      image: Helicopter,
      imageAlt: "Airplane flying through clouds at sunset"
    },
    {
      id: 4,
      title: "Ocean Freight", 
      description: "When you need your shipment at any destination of your choice in the shortest possible time, then be rest assured we will fly it for you. Forget about paying outrageous shipping fees as we offer fast, affordable and stress shipping and free package forwarding services. Still thinking? Don't. Just send your next package from Amazon, Ebay, Apple...etc and we will deliver right to your doorstep anywhere within our reach. With daily and weekly cargo flights, you can be rest assured that we will get your goods to their destination in time.",
      image: Ship,
      imageAlt: "Cargo containers at shipping port"
    }
  ];

  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-sm font-medium text-blue-700 mb-4 tracking-wide uppercase">
            Services
          </p>
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            <h2 className="text-5xl lg:text-6xl font-bold text-black leading-tight max-w-2xl">
              Discover The Full Range Of Services We Offer For Shipping
            </h2>
            <div className="lg:max-w-md lg:mt-8">
              <p className="text-lg text-black font-bold leading-relaxed">
                We make logistic shipping much easier and straightforward. Combining good service and technology make everything efficient
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative bg-white rounded-3xl overflow-hidden transition-all ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col lg:flex`}
            >
              <div className="lg:w-1/2 relative ">
                <div className="aspect-[4/3] lg:aspect-auto lg:h-full relative">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover transition-transform "
                  />
                </div>
              </div>

              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <div className="relative z-10">
                  <h3 className="text-3xl lg:text-4xl font-bold text-black mb-6">
                    {service.title}
                  </h3>
                  
                  <p className="text-black leading-relaxed lg:text-lg ">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;