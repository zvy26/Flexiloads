import React, { useState } from 'react';
import { Phone, Mail, MapPin, Upload } from 'lucide-react';
import { Link } from 'react-router-dom';
import Shipment from '../assets/images/Shipment.png';
import Map from '../assets/images/Map.png';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    contactName: '',
    street: '',
    city: '',
    postcode: '',
    contactPhone: '',
    email: '',
    message: '',
    protectData: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      <nav className="flex items-center justify-between px-20 py-7">
        <h1 className="text-[22px] font-bold text-black font-inter leading-normal flex w-[460px] justify-between items-center flex-shrink-0">
          FLEXILOADS
        </h1>

        <div className="flex space-x-10">
          <a
            href="#about"
            className="text-[#000] text-[22px] leading-none hover:text-blue-600 transition-colors"
          >
            About
          </a>
          <Link
            to="/services"
            className="text-[#000] text-[22px] leading-none hover:text-blue-600 transition-colors"
          >
            Services
          </Link>
          <Link
            to="/tariffs"
            className="text-[#000] text-[22px] leading-none hover:text-blue-600 transition-colors"
          >
            Tariffs
          </Link>
          <Link
            to="/contact"
            className="text-[#000] text-[22px] leading-none hover:text-blue-600 transition-colors"
          >
            Contact
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        <div
          className="w-[1365px] h-[460px] flex-shrink-0 rounded-[10px] mx-auto bg-cover bg-no-repeat bg-center relative overflow-hidden"
          style={{
            backgroundImage: `url(${Shipment})`,
            backgroundColor: 'lightgray',
            backgroundPosition: '50%',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40 rounded-[10px]"></div>
        </div>

        <div className="w-[1450px] mx-auto px-8 md:px-12 py-8">
          <div className="text-white max-w-2xl">
            <p className="text-blue-700 font-bold mb-2 text-lg">Contact Us</p>
            <h2 className="relative top-10 text-7xl font-bold mb-4 leading-tight text-black">
              Reach Out to Us<br />
              Anytime
            </h2>
            <p className="relative left-230 bottom-25 text-black max-w-md text-lg leading-relaxed">
              We're Here to Help. Whether You Have Questions or Need Assistance, Our Team is Ready to Provide Support and Ensure a Smooth Experience."
            </p>
          </div>
        </div>
      </div>

      <div className="containermx-auto px-20 py-16 bg-blue-50">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className=" w-full lg:w-1/2">
            <div className="bg-white rounded-[15px] p-10">
              <h3 className="text-black font-inter text-[40px] font-medium leading-[48px] mb-4">
                Get in <span className="text-blue-600">touch</span>
              </h3>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo 
                molestie vel, ornare non id blandit netus.
              </p>

              <div className="space-y-6">
                <input
                  type="text"
                  name="contactName"
                  placeholder="Contact name"
                  value={formData.contactName}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-lg"
                />

                <input
                  type="text"
                  name="street"
                  placeholder="Street"
                  value={formData.street}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-lg"
                />

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="px-6 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-lg"
                  />
                  <input
                    type="text"
                    name="postcode"
                    placeholder="Postcode"
                    value={formData.postcode}
                    onChange={handleInputChange}
                    className="px-6 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-lg"
                  />
                </div>

                <input
                  type="tel"
                  name="contactPhone"
                  placeholder="Contact Phone"
                  value={formData.contactPhone}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-lg"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-lg"
                />

                <textarea
                  name="message"
                  placeholder="Let's talk about your idea"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none text-lg"
                ></textarea>

                <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-blue-400 transition-colors">
                  <Upload className="mx-auto h-10 w-10 text-gray-400 mb-3" />
                  <p className="text-gray-600 text-lg font-medium">Upload Additional File</p>
                  <p className="text-sm text-gray-400 mt-2">
                    Attach file. File size of your documents should not exceed 10MB
                  </p>
                </div>

                <div className="flex items-start pt-2">
                  <input
                    type="checkbox"
                    name="protectData"
                    checked={formData.protectData}
                    onChange={handleInputChange}
                    className="mt-1 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label className="ml-3 text-gray-600 text-lg">
                    I want to protect my data by signing an NDA
                  </label>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-blue-50 hover:bg-blue-600 text-black font-bold py-4 px-6 rounded-2xl transition-all duration-300 shadow-md hover:shadow-lg text-lg"
                >
                  Submit
                </button>

                <div className="grid grid-cols-3 gap-4 pt-4">
                  <button className="flex items-center justify-center px-4 py-3 text-black duration-300 font-bold">
                    <Phone className="h-5 w-5 mr-2" />
                    Phone<br/>
                    111 111 111
                  </button>
                  <button className="flex items-center justify-center px-4 py-3  text-black font-bold">
                    <Mail className="h-5   w- mr-2" />
                    E-MAIL<br/>
                    info@company.com
                  </button>
                  <button className="flex items-center justify-center px-4 py-3 text-black font-bold">
                    <MapPin className="h-5 w-5 mr-2" />
                    HELPDESK<br/>
                    https://helpdesk.
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-[30px] shadow-xl overflow-hidden h-full min-h-[600px]">
              <div 
                className="h-full bg-cover bg-center bg-no-repeat relative"
                style={{
                  backgroundImage: `url(${Map})`,
                  backgroundColor: 'lightgray'
                }}
              >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;