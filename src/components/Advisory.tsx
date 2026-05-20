import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { advisories } from "../siteContent";

export default function Advisory() {
  const [openTitle, setOpenTitle] = useState(advisories[0]?.title ?? "");

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      <div className="dot-field pointer-events-none absolute inset-0 opacity-70" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-10 lg:grid-cols-[0.95fr_1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="sleek-label mb-6">Advisory & Consulting</div>
            <h2 className="mb-6 font-serif text-[38px] font-bold leading-[0.95] tracking-normal text-black sm:mb-8 sm:text-5xl md:text-[64px] lg:text-[70px]">
              Counsel That <em className="font-normal">Travels</em>
              <br />
              With You.
            </h2>
            <p className="mb-8 max-w-lg text-[15px] leading-relaxed text-gray-600 sm:mb-10 sm:text-base">
              Cross-border, cross-domain advisory for individuals, families, and corporations. From foreign exchange to NRI property matters, we bring clarity, structure, and protection.
            </p>

            <div className="group aspect-[10/10] overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1589578527966-fdac0f44566c?auto=format&fit=crop&w=1600&q=80"
                alt="Lady Justice statue"
                className="color-reveal h-full w-full object-cover group-hover:scale-[1.03]"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <div className="grid gap-4 lg:pb-28">
            {advisories.map((ad, i) => (
              <motion.div
                key={ad.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                viewport={{ once: true }}
                className="rounded-sm border border-gray-200 bg-white shadow-[0_12px_35px_rgba(0,0,0,0.025)] transition-colors hover:border-black"
              >
                <button
                  type="button"
                  onClick={() => setOpenTitle(openTitle === ad.title ? "" : ad.title)}
                  className="group flex w-full items-start justify-between gap-4 px-4 py-4 text-left sm:gap-5 sm:px-5"
                  aria-expanded={openTitle === ad.title}
                >
                  <span className="flex min-w-0 items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-gray-200 transition-colors group-hover:border-black">
                      <ad.icon className="h-4 w-4" strokeWidth={1.4} />
                    </span>
                    <span>
                      <span className="block font-serif text-base font-bold leading-tight sm:text-lg">{ad.title}</span>
                      <span className="mt-2 block text-xs leading-relaxed text-gray-500">{ad.desc}</span>
                    </span>
                  </span>
                  <ChevronDown
                    className={`mt-3 h-4 w-4 shrink-0 text-gray-400 transition-transform duration-300 group-hover:text-black ${
                      openTitle === ad.title ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openTitle === ad.title && (
                  <div className="border-t border-gray-100 px-4 pb-5 pt-4 sm:px-5">
                    <ul className="space-y-2">
                      {ad.details.map((line) => (
                        <li key={line} className="flex gap-3 text-xs leading-relaxed text-gray-600 sm:text-sm">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#contact"
                      className="mt-5 inline-flex text-[10px] font-bold uppercase tracking-[0.28em] text-black underline underline-offset-4"
                    >
                      Enquire Now
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
