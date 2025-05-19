"use client";
import { RevealOnScroll } from "../components/ui/reveal-on-scroll";
import Header from "../components/header";
import Footer from "../components/Footer";
import React from "react";
import TSA from "../components/TSA";


function RevealLayout({ children }: { children: React.ReactNode }) {
  return React.Children.map(children, (child) => (
    <RevealOnScroll width="100%">
      {child}
    </RevealOnScroll>
  ));
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <RevealLayout>
        <TSA />
        
        <Footer />
      </RevealLayout>
    </div>
  );
}