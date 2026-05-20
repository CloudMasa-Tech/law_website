import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { complianceServices } from "../siteContent";

export default function Compliance() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const activeService = complianceServices[openIndex ?? 0];

  return (
    <section id="compliance" className="relative overflow-hidden bg-[#f6f6f6] py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <img
          src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1600&q=80"
          alt=""
          className="color-reveal h-full w-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-white/50" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-4xl text-center sm:mb-20">
          <div className="sleek-label mb-5">Para-Legal & Compliance Services</div>
          <h2 className="mb-6 font-serif text-[38px] font-bold leading-[0.95] tracking-normal text-black sm:text-5xl md:text-[64px] lg:text-[70px]">
            Compliance <em className="font-normal">Engineered.</em>
          </h2>
          <p className="mx-auto max-w-3xl text-[15px] leading-relaxed text-gray-600 sm:text-base">
            Beyond courtroom representation, Law Arena Associates provides a wide range of para-legal and business compliance services, enabling individuals and enterprises to meet statutory obligations and operational requirements with confidence.
          </p>
        </div>

        <div className="relative mb-24 hidden md:block">
          <div className="absolute left-[6%] right-[6%] top-[48px] z-0 h-px bg-gray-300" />
          <div className="relative z-10 grid grid-cols-6">
            {complianceServices.map((service, i) => {
              const isActive = openIndex === i;

              return (
                <motion.button
                  key={service.id}
                  type="button"
                  onClick={() => setOpenIndex(isActive ? null : i)}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="group flex flex-col items-center text-center"
                >
                  <span
                    className={`mb-7 flex h-24 w-24 items-center justify-center rounded-full shadow-[0_18px_50px_rgba(0,0,0,0.04)] transition-colors ${
                      isActive ? "bg-black text-white" : "bg-white/90 text-black"
                    }`}
                  >
                    <span className="font-serif text-2xl font-bold">{service.id}</span>
                  </span>
                  <span className="max-w-[180px] font-serif text-lg font-bold leading-tight text-black">{service.shortTitle}</span>
                  <span className={`mt-4 h-px transition-all ${isActive ? "w-14 bg-black" : "w-8 bg-gray-400"}`} />
                </motion.button>
              );
            })}
          </div>
        </div>

        <div className="grid items-start gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-14">
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="mb-10"
              >
                <div className="sleek-label mb-6">Selected Service</div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-sm border border-gray-300 bg-white">
                  <activeService.icon className="h-6 w-6 text-black" strokeWidth={1.5} />
                </div>
                <h3 className="mb-6 font-serif text-3xl font-bold leading-[0.95] text-black sm:mb-7 sm:text-4xl md:text-5xl">
                  {activeService.title}
                </h3>
                <p className="max-w-lg text-[15px] leading-relaxed text-gray-600 sm:text-base">
                  {activeService.content}
                </p>
              </motion.div>
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group aspect-[4/3] overflow-hidden rounded-sm"
            >
              <img
                src="https://images.unsplash.com/photo-1617341547535-86265a8566b2?auto=format&fit=crop&w=1600&q=80"
                alt="Open legal books"
                className="color-reveal h-full w-full object-cover group-hover:scale-[1.03]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          <div className="md:pt-2">
            <div className="divide-y divide-gray-300/70">
              {complianceServices.map((service, i) => {
                const isOpen = openIndex === i;

                return (
                  <motion.div key={service.title} layout>
                    <motion.button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.99 }}
                      className="group flex w-full items-start justify-between gap-4 py-5 text-left sm:items-center sm:py-6"
                    >
                      <span className="flex min-w-0 items-start gap-4 sm:items-center sm:gap-8">
                        <span className="pt-1 font-serif text-[10px] tracking-[0.35em] text-gray-400 sm:pt-0">{service.id}</span>
                        <span className="font-serif text-lg font-bold text-black sm:text-xl">{service.title}</span>
                      </span>
                      <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                    </motion.button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pb-7 pl-0 sm:pl-16">
                            <p className="mb-5 text-sm leading-relaxed text-gray-500">{service.content}</p>
                            <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
                              {service.items.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
