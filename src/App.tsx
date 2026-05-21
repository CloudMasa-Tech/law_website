/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowUp, MessageCircle } from "lucide-react";
import { useEffect } from "react";
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
  useEffect(() => {
    const scrollToHash = (hash: string, behavior: ScrollBehavior = "smooth") => {
      if (hash === "#home") {
        window.scrollTo({ top: 0, behavior });
        return true;
      }

      const target = document.querySelector(hash);

      if (!target) {
        return false;
      }

      const header = document.querySelector("header");
      const headerHeight = header instanceof HTMLElement ? header.offsetHeight : 0;
      const contentTarget =
        target instanceof HTMLElement && target.tagName.toLowerCase() === "section"
          ? target.querySelector(":scope > .container") ?? target
          : target;
      const targetTop = contentTarget.getBoundingClientRect().top + window.scrollY;
      const topOffset = headerHeight + 24;

      window.scrollTo({
        top: Math.max(targetTop - topOffset, 0),
        behavior,
      });

      return true;
    };

    const handleHashClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest("a[href^='#']");

      if (!(link instanceof HTMLAnchorElement)) {
        return;
      }

      const hash = link.getAttribute("href");

      if (!hash || hash === "#") {
        return;
      }

      if (!document.querySelector(hash)) {
        return;
      }

      event.preventDefault();
      scrollToHash(hash);
      window.history.pushState(null, "", hash);
    };

    const handleHashChange = () => {
      if (window.location.hash) {
        scrollToHash(window.location.hash);
      }
    };

    document.addEventListener("click", handleHashClick);
    window.addEventListener("hashchange", handleHashChange);

    if (window.location.hash) {
      window.setTimeout(() => scrollToHash(window.location.hash, "auto"), 0);
    }

    return () => {
      document.removeEventListener("click", handleHashClick);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

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
