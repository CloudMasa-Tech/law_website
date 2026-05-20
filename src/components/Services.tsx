import { AnimatePresence, motion } from "motion/react";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { useState } from "react";
import { services } from "../siteContent";

export default function Services() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="services" className="border-t border-gray-100 bg-white py-20 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 grid items-end gap-8 lg:mb-16 lg:grid-cols-[1fr_440px] lg:gap-16">
          <div>
            <div className="sleek-label mb-5">Legal Services</div>
            <h2 className="font-serif text-[38px] font-bold leading-[0.95] tracking-normal text-black sm:text-5xl md:text-[64px] lg:text-[70px]">
              Full-Spectrum <em className="font-normal">Counsel</em>
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-gray-600 sm:text-base">
            From courtroom representation to complex corporate transactions, we provide comprehensive legal services across every major practice area.
          </p>
        </div>

        <div className="grid divide-y divide-gray-200 border border-gray-200 bg-white md:grid-cols-2 md:[&>*:nth-child(odd)]:border-r md:[&>*:nth-child(odd)]:border-gray-200 lg:grid-cols-3 lg:[&>*:nth-child(odd)]:border-r-0 lg:[&>*:not(:nth-child(3n))]:border-r lg:[&>*:not(:nth-child(3n))]:border-gray-200">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              viewport={{ once: true }}
              className="group bg-white"
            >
              <div className="relative h-[240px] overflow-hidden bg-black sm:h-[280px]">
                <img
                  src={s.image}
                  alt={s.title}
                  className="color-reveal h-full w-full object-cover opacity-76 group-hover:scale-105 group-hover:opacity-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-sm bg-white">
                  <s.icon className="h-5 w-5 text-black" strokeWidth={1.5} />
                </div>
                <div className="absolute right-5 top-5 font-serif text-[12px] tracking-[0.3em] text-white/55">{s.id}</div>
                <h3 className="absolute bottom-5 left-5 right-5 font-serif text-2xl font-bold tracking-tight text-white md:text-3xl">
                  {s.title}
                </h3>
              </div>
              <div className="min-h-[112px] p-6 md:p-7">
                <p className="mb-6 text-sm leading-relaxed text-gray-500">{s.desc}</p>

                <AnimatePresence initial={false}>
                  {expandedId === s.id && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="mb-6 space-y-3 overflow-hidden"
                    >
                      {s.items.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-sm text-gray-600">
                          <CheckCircle2 className="h-4 w-4 text-gray-500" strokeWidth={1.7} />
                          {item}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>

                <button
                  type="button"
                  onClick={() => setExpandedId(expandedId === s.id ? null : s.id)}
                  className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.35em] text-gray-500 transition-colors hover:text-black"
                >
                  <span>{expandedId === s.id ? "Close" : "View Details"}</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${expandedId === s.id ? "rotate-180" : ""}`} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
