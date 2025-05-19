"use client";
import {
  IconAdjustmentsBolt,
  IconAwardFilled,
  IconCurrencyDollar,
  IconEaseInOut,
  IconCarambola,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";
import React from 'react';

export default function Features() {
  const features = [
    {
      title: "Code Snippet",
      description: "Not just mere concepts but proper code snippets with explanations that will make the learning easy.",
      icon: <IconTerminal2 className="w-8 h-8" />,
    },
    {
      title: "Best Fit Curve", 
      description: "Absolutely no need to rush as we have curated the content for the easiest grasp.",
      icon: <IconEaseInOut className="w-8 h-8" />,
    },
    {
      title: "Learning Always Free",
      description: "We believe in free education and the right to knowledge. Hence we charge you nothing.",
      icon: <IconCurrencyDollar className="w-8 h-8" />,
    },
    {
      title: "Verified Content",
      description: "You can blindly trust our resource for the best learning, as we are verified educators.",
      icon: <IconAwardFilled className="w-8 h-8" />,
    },
    {
      title: "Curated Roadmaps",
      description: "Want an overview? We have curated roadmaps for each learning path to help your way.",
      icon: <IconRouteAltLeft className="w-8 h-8" />,
    },
    {
      title: "Doubt Clearance",
      description: "Require one-on-one classes? Book an educational consultant who can help you with it.",
      icon: <IconHelp className="w-8 h-8" />,
    },
    {
      title: "Streamlined Content",
      description: "No extra fuss. No useless talks. Just pure content with best possible information and examples.",
      icon: <IconAdjustmentsBolt className="w-8 h-8" />,
    },
    {
      title: "Future-Proof",
      description: "Stay ahead with continuous AI updates and new feature rollouts and boast about your knowledge.",
      icon: <IconCarambola className="w-8 h-8" />,
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
          <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
            Why Choose DataVerse?
          </h2>
          <p className="text-lg md:text-xl text-blue-200/90 max-w-2xl mx-auto">
            We are not just another tutorial platform but a genuine career guide in Data Science & Data Analytics
          </p>
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