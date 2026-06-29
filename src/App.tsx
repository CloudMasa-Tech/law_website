/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowUp, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
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
import RoutePage from "./components/SeoPages";
import SeoHead, { baseSchema } from "./components/SeoHead";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";

function normalizePath() {
  return window.location.pathname.replace(/\/$/, "") || "/";
}

function HomePage() {
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

      window.scrollTo({ top: Math.max(targetTop - topOffset, 0), behavior });
      return true;
    };

    if (window.location.hash) {
      window.setTimeout(() => scrollToHash(window.location.hash, "auto"), 0);
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, []);

  return (
    <main>
      <SeoHead
        title="Law Arena Associates | Advocates & Legal Consultants"
        description="Law Arena Associates provides civil litigation, property law, family law, corporate counsel, compliance, licensing, and legal advisory services in Puducherry, Chennai, Tamil Nadu, Karnataka, and pan-India matters."
        path="/"
        schema={baseSchema}
      />
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
  );
}

export default function App() {
  const [path, setPath] = useState(normalizePath);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [path]);
  useEffect(() => {
    const navigate = (nextPath: string, hash = "") => {
      const normalized = nextPath.replace(/\/$/, "") || "/";
      window.history.pushState(null, "", `${normalized}${hash}`);
      setPath(normalized);
    };

    const handleClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest("a[href]");
      if (!(link instanceof HTMLAnchorElement)) return;

      const href = link.getAttribute("href");
      if (!href || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("http")) return;

      const url = new URL(href, window.location.origin);
      if (url.origin !== window.location.origin) return;

      event.preventDefault();
      navigate(url.pathname, url.hash);
    };

    const handlePopState = () => setPath(normalizePath());

    document.addEventListener("click", handleClick);
    window.addEventListener("popstate", handlePopState);
    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-black selection:bg-black selection:text-white">
      <Navbar />
      {path === "/" ? <HomePage /> : <RoutePage path={path} />}
      <Footer />
      <a href="/contact" className="floating-action bottom-5 left-4 sm:bottom-6 sm:left-6 lg:bottom-7 lg:left-7" aria-label="Open contact form">
        <MessageCircle className="h-5 w-5" />
      </a>
      <a href="/" className="floating-action bottom-5 right-4 sm:bottom-6 sm:right-6 lg:bottom-7 lg:right-7" aria-label="Back to top">
        <ArrowUp className="h-5 w-5" />
      </a>
    </div>
  );
}
