import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Advantages = () => {
  const advantages = [
    {
      id: "01",
      title: "Precision in Delivery",
      description: "Our commitment to precision ensures that your cargo arrives on time, every time.",
      featured:true
    },
    {
      id: "02", 
      title: "Tailored Solutions, Every Time",
      description: "Our customer-centric approach means personalized solutions for your unique cargo needs",
      featured: false
    },
    {
      id: "03",
      title: "Cutting-Edge Technology", 
      description: "Our advanced tracking systems provide real-time visibility into your shipment, ensuring you're in control every step of the way.",
      featured: false
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-1xl font-bold text-blue-700  mb-4 tracking-wide uppercase">
            Advantages
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Our<br/>
              Advantages
            </h2>
            <div className="lg:max-w-md">
              <p className="text-lg text-black leading-relaxed">
                We make logistic shipping much easier and straightforward. 
                Combining good service and technology make everything efficient
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            return (
              <div
                key={advantage.id}
                className={`group relative overflow-hidden rounded-2xl p-10 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                  advantage.featured
                    ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white'
                    : 'bg-white text-gray-900 hover:bg-gray-50'
                }`}
              >

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-10">
                    <span className={`text-5xl font-bold ${
                      advantage.featured ? 'text-blue-100' : 'text-black-300'
                    }`}>
                      {advantage.id}
                    </span>
                    <div className={`p-3     rounded-full transition-all duration-300 group-hover:scale-110 ${
                      advantage.featured 
                    }`}>
                      <ArrowUpRight className={`w-5 h-5 ${
                        advantage.featured
                      }`} />
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold mb-4 leading-tight">
                    {advantage.title}
                  </h3>

                  <p className={`text-base leading-relaxed ${
                    advantage.featured  
                  }`}>
                    {advantage.description}
                  </p>
                </div>
              </div>    );
            })}
        </div>
        </div>
      </div>
  );
};

export default Advantages;  