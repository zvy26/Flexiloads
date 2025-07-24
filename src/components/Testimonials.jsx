import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Business from '../assets/images/Business.png';
import Bitpay from '../assets/svg/Bitpay.svg';
import Discover from '../assets/svg/Discover.svg';
import Payoneer from '../assets/svg/Payoneer.svg';
import Skrill from '../assets/svg/Skrill.svg';
import Stripe from '../assets/svg/Stripe.svg';

const testimonials = [
  {
    text: "Thank you very much Cicero for saving my time. With Cicero, the delivery of goods is faster even though it is very far away. I also don't need to be afraid and doubtful because Cicero provides a place to store my shipping documents and makes it easier with excellent real-time tracking",
    author: "Christina Martha Tiahahu",
    position: "CEO of Marthapura Gold & Diamond"
  },
];

const Testimonials = () => {
  return (
    <section className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="mb-16">
              <p className="text-blue-700 text-sm font-medium tracking-wide uppercase mb-4">
                Testimonials
              </p>
              <h2 className="text-black text-5xl lg:text-6xl font-bold leading-tight max-w-md">
                Sound from our happy partners
              </h2>
            </div>
            <div className="bg-blue-50 p-8 rounded-2xl">
              <blockquote className="text-black text-base leading-relaxed mb-8">
                "{testimonials[0].text}"
              </blockquote>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-black text-lg mb-1">
                    {testimonials[0].author}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    {testimonials[0].position}
                  </p>
                </div>
                <div className="relative top-20 right-100 gap-3">
                  <button
                    className="p-2 rounded-full border border-gray-200 hover:bg-white transition-colors duration-200"
                  >
                    <ChevronLeft className="w-15 h-8 text-blue-700" />
                  </button>
                  <button
                    className="p-2 rounded-full border border-gray-200 hover:bg-white transition-colors duration-200"
                  >
                    <ChevronRight className="w-15 h-8 text-blue-700" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 h-full flex items-center flex-col justify-end">
            <div className="flex gap-16">
              <div>
                <div className="text-5xl lg:text-6xl font-bold text-black mb-2">25<span className="text-blue-600">+</span></div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Winning award best<br />shipping company
                </p>
              </div>
              <div>
                <div className="text-5xl lg:text-6xl font-bold text-black mb-2">100K<span className="text-blue-600">+</span></div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Happy customers<br />around the world
                </p>
              </div>
            </div>
            <div className="w-full max-w-lg">
              <img 
                src={Business} 
                alt="Business partners" 
                className="w-full h-auto rounded-2xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-24">
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-20">
            <img src={Stripe} alt="Stripe" className="h-12" />
            <img src={Skrill} alt="Skrill" className="h-12" />
            <img src={Payoneer} alt="Payoneer" className="h-12" />
            <img src={Bitpay} alt="Bitpay" className="h-12" />
            <img src={Discover} alt="Discover" className="h-12" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;