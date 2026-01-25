'use client';

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import WorkExperience from "../components/WorkExperience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className=" min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <div className="p-4 lg:p-25 lg:pt-0 lg:pb-0 pt-0 pb-0">
        <Hero />
        <TechStack />
        <WorkExperience />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
