import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { firm, heroStats } from "../siteContent";

export default function Hero() {
  return (
    <section id="home" className="section-grid relative flex min-h-screen flex-col justify-center overflow-hidden pt-28 sm:pt-32 lg:pt-20">
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center opacity-[0.09]">
        <img
          src="/images/home-justice-background.jpg"
          alt="Lady Justice"
          className="h-[88%] translate-x-6 translate-y-4 object-contain sm:h-[96%] sm:translate-x-16 lg:h-[105%] lg:translate-x-24"
        />
      </div>
      <span className="hero-dot bottom-[30%] left-[8%]" />
      <span className="hero-dot bottom-[16%] left-[18%]" />
      <span className="hero-dot left-[40%] top-[30%]" />
      <span className="hero-dot bottom-[36%] right-[18%]" />
      <span className="hero-dot bottom-[18%] right-[10%]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:-translate-y-10 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-6xl text-center"
        >
          <div className="mb-8 inline-flex max-w-full items-center gap-3 rounded-full border border-black/15 bg-white/80 px-4 py-2 sm:mb-10 sm:px-5 sm:py-1.5">
            <Sparkles className="h-3 w-3 text-gray-500" />
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-500 sm:text-[10px] sm:tracking-[0.35em]">
              Established {firm.established} | Multi-State Practice
            </span>
          </div>

          <h1 className="mb-6 text-balance font-serif text-[42px] font-bold leading-[0.95] tracking-normal text-black sm:mb-8 sm:text-6xl md:text-7xl lg:text-[84px] xl:text-[92px]">
            Strategic Legal Solutions
            <br />
            <em className="font-normal">With Integrity & Precision</em>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl px-1 text-[15px] leading-relaxed text-gray-700 sm:text-base md:text-lg">
            {firm.description}
          </p>

          <div className="mb-14 flex flex-col justify-center gap-3 sm:mb-20 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="/contact"
              className="sharp-cta inline-flex items-center justify-center gap-4 px-6 py-4 text-[10px] font-bold uppercase tracking-[0.22em] sm:gap-5 sm:px-8 sm:py-5 sm:text-[11px] sm:tracking-[0.32em]"
            >
              Book Consultation
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center border border-gray-300 bg-white/80 px-6 py-4 text-[10px] font-bold uppercase tracking-[0.22em] text-black transition-all hover:bg-black hover:text-white sm:px-8 sm:py-5 sm:text-[11px] sm:tracking-[0.32em]"
            >
              Explore Services
            </a>
          </div>
        </motion.div>

        <div className="relative mx-auto grid max-w-[895px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {heroStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
              className="premium-card px-6 py-5 text-center sm:h-[88px] sm:px-8"
            >
              <div className="mb-1 font-serif text-3xl font-bold tracking-normal">{stat.value}</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.35em] text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
