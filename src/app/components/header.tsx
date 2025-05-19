"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/logo.png";

const Header = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const progress = Math.min(window.scrollY / 100, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const shadowOpacity = 0.65 * (1 - scrollProgress);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-6 py-4",
        "backdrop-blur-xl border-b border-white/10",
        "after:absolute after:bottom-[-20px] after:left-0 after:right-0 after:h-[20px] after:bg-gradient-to-b after:from-black/20 after:to-transparent after:pointer-events-none"
      )}
      style={{
        boxShadow: `0 80px 200px 0 rgba(59,130,246,${shadowOpacity})`
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Logo */}
        <Link href="/" className="flex text-3xl font-bold bg-clip-text text-transparent">
          <Image
            src={Logo}
            alt="Bot Interface"
            height={50}
            width={50}
            className="rounded-2xl object-cover"
            draggable={false}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="relative group">
  <button className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors">
    Topics
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </button>

  <div className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
    <ul className="py-2 text-sm text-gray-200">
      <li>
        <Link href="/ml" className="block px-4 py-2 hover:bg-gray-700">
          Machine Learning
        </Link>
      </li>
      <li>
        <Link href="/dl" className="block px-4 py-2 hover:bg-gray-700">
          Deep Learning
        </Link>
      </li>
      <li>
        <Link href="/nlp" className="block px-4 py-2 hover:bg-gray-700">
          Natural Language Processing
        </Link>
      </li>
      <li>
        <Link href="/tsa" className="block px-4 py-2 hover:bg-gray-700">
          Time Series Analysis
        </Link>
      </li>
      <li>
        <Link href="/stats" className="block px-4 py-2 hover:bg-gray-700">
          Advanced Statistics
        </Link>
      </li>
    </ul>
  </div>
</div>

<Link href="/roadmaps" className="text-gray-300 hover:text-white">
  Roadmaps
</Link>

          <Link href="/about" className="text-gray-300 hover:text-white">About</Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden text-white z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 bg-black/90 px-6 py-4 flex flex-col space-y-4 rounded-b-xl md:hidden"
            >
              <Link href="/topics/data-science" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-white">Machine Learning</Link>
              <Link href="/topics/web-development" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-white">Deep Learning</Link>
              <Link href="/topics/cloud-computing" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-white">NLP</Link>
              <Link href="/roadmaps" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-white">Roadmaps</Link>
              <Link href="/about" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-white">About</Link>
              <Link href="/contact" className="text-gray-300 hover:text-white">Contacts</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
