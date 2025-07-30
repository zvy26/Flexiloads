import React from 'react';
import { Globe, Monitor, MapPin } from 'lucide-react';
import WorldMap from '../assets/images/WorldMap.png';

const About = () => {
  return (
    <div
      className=" bg-gray-50 relative overflow-hidden"
      style={{
        backgroundImage: `url(${WorldMap})`,
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="container mx-auto px-6 pt-16 relative z-10">
        <nav className="mb-16">
          <span className="text-blue-600 text-xl font-medium">About</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight mb-6 break-words ">
              Solution for your<br/>
              business need
            </h1>
          </div>

          <div className="lg:pl-8">
            <p className=" relative  top-5 left-8 text-black font-bold text-lg leading-relaxed mb-12 max-w-md lg:ml-40 lg:mt-12">
              We make logistic shipping much easier and straightforward. Combining good service and technology makes everything efficient.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-20 text-center md:text-left">
          {[Globe, Monitor, MapPin].map((Icon, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-xl shadow-2xl transition-transform hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-gray-100"
            >
              <div className="flex items-start gap-5 mb-5">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 leading-snug">
                  Your intercontinental shipping solutions
                </h3>
              </div>
              <p className="text-gray-600 text-base leading-relaxed">
                Wit h enhanced supply chain solution, we will accelerate your business while also driving efficiency.
              </p>
            </div>
          ))}
        </div>

        <div className="mx-4 my-16 flex w-full items-center justify-center bg-blue-50 rounded-xl shadow-md mt-[100px]">
          <div className="flex flex-col md:flex-row w-full max-w-5xl items-center justify-between py-10 border-b md:border-none gap-10 md:gap-0">
            <div className="w-full border-x flex items-center justify-center flex-col px-4">
              <p className="text-5xl font-semibold text-gray-800">12<span className='text-blue-600 font-bold'>+</span></p>
              <p className="text-xl text-gray-600">Year Services</p>
            </div>
            <div className="w-full border-x flex items-center justify-center flex-col px-4">
              <p className="text-5xl font-semibold text-gray-800"><span className='text-blue-600 font-bold '>+</span>20K</p>
              <p className="text-xl text-gray-600">Cargo Delivered</p>
            </div>
            <div className="w-full border-x flex items-center justify-center flex-col px-4">
              <p className="text-5xl font-semibold text-gray-800">500</p>
              <p className="text-xl text-gray-600">Total Cargo</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
