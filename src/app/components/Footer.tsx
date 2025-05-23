"use client";
import { Mail, Phone } from 'lucide-react';
import React from 'react';

export default function Footer() {
 

  

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(circle_at_center,_black,transparent_75%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#3b82f620_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#1d4ed820_0%,transparent_50%)]" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        

        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 mb-4">
              Dataverse
            </h3>
            <p className="text-blue-200/80 mb-6">
              Learn, understand and implement advanced data science concepts from the scratch, absolutely free of cost.
            </p>
            
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['Topics', 'Roadmaps', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-blue-200/80 hover:text-white transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-semibold mb-4 text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
              Features
            </h4>
            <ul className="space-y-2">
              {['Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Time Series Analysis', 'Advanced Statistics'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-blue-200/80 hover:text-white transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-semibold mb-4 text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
              Contact Us
            </h4>
            <div className="space-y-4">
              <a 
                href="mailto:support@Dataverse.com" 
                className="flex items-center gap-3 text-blue-200/80 hover:text-white group transition-colors duration-300"
              >
                <div className="p-2 rounded-md bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-300">
                  <Mail className="w-4 h-4" />
                </div>
                support@Dataverse.com
              </a>
              <a 
                href="tel:+919876543210" 
                className="flex items-center gap-3 text-blue-200/80 hover:text-white group transition-colors duration-300"
              >
                <div className="p-2 rounded-md bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-300">
                  <Phone className="w-4 h-4" />
                </div>
                +91 98765 43210
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative mt-16 pt-8">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
          <p className="text-center text-blue-200/60">
            &copy; {new Date().getFullYear()} Dataverse. All rights reserved.
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -left-32 -bottom-32 w-64 h-64 bg-blue-500 rounded-full filter blur-[128px] opacity-20" />
      <div className="absolute -right-32 -top-32 w-64 h-64 bg-blue-500 rounded-full filter blur-[128px] opacity-20" />
    </footer>
  );
}