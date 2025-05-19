"use client";

import { FaArrowTrendUp } from "react-icons/fa6";
import { VscGraphLine } from "react-icons/vsc";
import { SlGraph } from "react-icons/sl";
import { BsGraphUpArrow } from "react-icons/bs";
import React from 'react';

export default function Stats() {
  const features = [
    {
      title: "Descriptive and Exploratory Statistics",
      description: "Summarizes and visualizes data using measures like mean, standard deviation, and graphs to reveal patterns, trends, and distributions.",
      icon: <FaArrowTrendUp className="w-8 h-8" />,
    },
    {
      title: "Probability and Statistical Inference", 
      description: "Uses probability theory and sampling to draw conclusions about populations, test hypotheses, estimate parameters, and quantify uncertainty in data.",
      icon: <VscGraphLine className="w-8 h-8" />,
    },
    {
      title: " Modeling and Multivariate Analysis",
      description: "Analyzes relationships between multiple variables using regression, correlation, and dimensionality reduction to build predictive and explanatory statistical models.",
      icon: <SlGraph className="w-8 h-8" />,
    },
    {
      title: "Specialized and Advanced Methods",
      description: "Applies techniques like time series, experimental design, and non-parametric tests to handle complex, structured, or non-normal data scenarios effectively.",
      icon: <BsGraphUpArrow className="w-8 h-8" />,
    },
    
  ];

  return (
    <section className="relative bg-black overflow-hidden py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(circle_at_center,_black,transparent_75%)]" />
      
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[40rem] w-[40rem] bg-blue-500/20 rounded-full blur-[128px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20 space-y-4">
          <h2 className="pb-4 text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
            Exploring Statistics
          </h2>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div className="relative">
      <div 
        className="absolute inset-0 opacity-90 blur-2xl animate-gradient"
        style={{
          background: `linear-gradient(45deg, 
            rgb(var(--color-1)), 
            rgb(var(--color-2)), 
            rgb(var(--color-3)), 
            rgb(var(--color-4)))`,
          backgroundSize: "500% 500%",
          borderRadius: "16px",
          "--color-1": "96, 165, 250",   /* blue-400 */
          "--color-2": "37, 99, 235",    /* blue-600 */
          "--color-3": "29, 78, 216",    /* blue-700 */
          "--color-4": "147, 51, 234",   /* purple-600 */
        } as React.CSSProperties}
      />
      
      <div 
        className="relative h-full bg-black/70 border border-neutral-800/50 rounded-xl p-8 backdrop-blur-sm"
      >
        <div className="space-y-6">
          <div className="text-blue-400">
            {icon}
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-blue-100">
              {title}
            </h3>
            
            <p className="text-blue-300/80 text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};