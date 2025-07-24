import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

const Faqs = () => {
  const [openFaq, setOpenFaq] = useState(0); // First FAQ is open by default

  const faqs = [
    {
      question: "How do I book a trip with your travel service?",
      answer: "You can book a trip through our website, by calling our customer service hotline, or by visiting one of our offices. Simply choose your destination, travel dates, and preferred accommodations."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, bank transfers, and cash payments at our physical locations. All transactions are secured with SSL encryption."
    },
    {
      question: "How do I know if my booking is confirmed?",
      answer: "Once your booking is complete, you'll receive an immediate confirmation email with your booking reference number. You can also check your booking status online using our booking portal or by calling our support team."
    },
    {
      question: "Do you offer group travel packages?",
      answer: "Yes, we offer special group travel packages for 10 or more travelers. Group bookings include discounted rates, dedicated tour guides, and customizable itineraries. Contact our group travel specialists for more information."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-gray-50 py-16 px-6 w-">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-1xl font-bold text-blue-700 mb-4 tracking-wide uppercase">
            FAQs
          </p>
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Frequently Asked<br/>
              Questions
            </h2>
            <div className="lg:max-w-md">
              <p className="relative top-5 text-lg text-black leading-relaxed">
                Explore our comprehensive FAQ section, designed to answer all your queries and help 
                you plan a seamless and unforgettable journey.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 w-5xl">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden bg-white"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-xl font-semibold text-black pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {isOpen ? (
                      <X className="w-6 h-6 text-gray-600" />
                    ) : (
                      <Plus className="w-6 h-6 text-gray-600" />
                    )}
                  </div>
                </button>

                <div className={`transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                  <div className="px-8 pb-6">
                    <p className="text-black leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faqs;