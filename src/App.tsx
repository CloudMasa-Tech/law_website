/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowUp, MessageCircle } from "lucide-react";
import About from "./components/About";
import Advisory from "./components/Advisory";
import Compliance from "./components/Compliance";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LegalPages from "./components/LegalPages";
import Navbar from "./components/Navbar";
import Offices from "./components/Offices";
import Principles from "./components/Principles";
import Process from "./components/Process";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-black selection:bg-black selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Principles />
        <Services />
        <Compliance />
        <Advisory />
        <WhyChooseUs />
        <Process />
        <Offices />
        <LegalPages />
        <Contact />
      </main>
      <Footer />
      <a
        href="#contact"
        className="floating-action bottom-5 left-4 sm:bottom-6 sm:left-6 lg:bottom-7 lg:left-7"
        aria-label="Open contact form"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
      <a
        href="#home"
        className="floating-action bottom-5 right-4 sm:bottom-6 sm:right-6 lg:bottom-7 lg:right-7"
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </a>
    </div>
  );
}
