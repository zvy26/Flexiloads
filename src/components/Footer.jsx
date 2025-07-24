import React from 'react';
import { Search, Youtube, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: "INFORMATION",
      links: [
        "Contact Us",
        "Our Address", 
        "Privacy Policy",
        "Choose a Service"
      ]
    },
    {
      title: "SERVICES",
      links: [
        "Update Personal Information",
        "Special Offers",
        "SMS Services", 
        "Main Services"
      ]
    },
    {
      title: "INTERNET",
      links: [
        "Internet Services",
        "Information",
        "Careers",
        "Sitemap"
      ]
    }
  ];

  return (
    <footer className="bg-blue-600 text-white">
      {/* Top Section with Logo and Newsletter */}
      <div className="px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* Logo */}
            <div>
              <h2 className="text-4xl font-bold text-white">Logo</h2>
            </div>
            
            {/* Newsletter Signup */}
            <div className="flex items-center max-w-lg bg-white rounded-lg overflow-hidden">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  placeholder="Enter your email to get the latest news..."
                  className="w-full pl-12 pr-4 py-4 bg-white text-gray-900 placeholder-gray-500 focus:outline-none text-base border-0"
                />
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 px-8 py-4 font-medium text-white transition-colors duration-200 text-base whitespace-nowrap">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-blue-500 opacity-50"></div>

      {/* Main Footer Content */}
      <div className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="text-lg font-bold text-white mb-6 tracking-wide">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href="#" 
                        className="text-blue-100 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Social Media Section */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6 tracking-wide">
                FOLLOW US ON SOCIAL MEDIA
              </h3>
              <div className="mb-4">
                <p className="text-blue-100 text-sm mb-4">Join Us</p>
                <div className="flex gap-4">
                  <a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">
                    <Youtube className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="border-t border-blue-500 opacity-50"></div>

      {/* Copyright */}
      <div className="px-6 py-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-blue-100 text-sm">
            Greelogix © 202X. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;