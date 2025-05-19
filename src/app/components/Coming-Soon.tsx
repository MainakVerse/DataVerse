"use client";
import React from 'react';
import Typewriter from 'typewriter-effect';

export default function ComingSoon() {
  return (
    <div className="relative animate-ocean-wave overflow-hidden pb-28">
      
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffffff33_1px,transparent_1px)] [mask-image:radial-gradient(circle_at_center,_black,transparent_90%)] [background-size:16px_16px]" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem]">
        <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-[128px]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col gap-12">
          <div className="mx-auto max-w-3xl text-center space-y-8">
            <div className="space-y-4">
              <h1 className="mt-40 text-5xl sm:text-6xl lg:text-9xl font-bold bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent leading-tight">
                <span>Coming </span>
                <span className="font-light">Soon</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-5xl mx-auto font-light text-blue-200">
                <Typewriter
                options={{
                  strings: ['Ace Machine Learning', 'Conquer Deep Learning', 'Master Natural Language Processing', 'Understand Time Series Analysis', 'Dive In Data Structures', 'Live In Databases'],
                  autoStart: true,
                  loop: true,
                }}
              />
              </p>
            </div>
            
            
          </div>

          
        </div>
      </div>
    </div>
  );
}