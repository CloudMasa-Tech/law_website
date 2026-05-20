import { motion } from "motion/react";
import { processSteps } from "../siteContent";

export default function Process() {
  return (
    <section id="process" className="border-t border-gray-100 bg-white py-20 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-14 sm:mb-24">
          <div className="sleek-label mb-6">Client Engagement Process</div>
          <h2 className="font-serif text-[38px] font-bold leading-[0.95] tracking-normal text-black sm:text-5xl md:text-[64px] lg:text-[70px]">
            A Process Built on
            <br />
            <em className="font-normal">Clarity.</em>
          </h2>
        </div>

        <div className="relative pt-4">
          <div className="absolute left-[8%] right-[8%] top-[48px] hidden h-px bg-gray-300 lg:block" />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="relative z-10 flex flex-col items-center"
              >
                <div
                  className={`mb-7 flex h-20 w-20 items-center justify-center rounded-full border bg-white shadow-[0_14px_35px_rgba(0,0,0,0.035)] ${
                    i === 2 ? "border-black" : "border-gray-200"
                  }`}
                >
                  <span className="font-serif text-xl font-bold">{step.id}</span>
                </div>

                <h3 className="mb-3 font-serif text-xl font-bold text-black">{step.title}</h3>
                <p className="max-w-[220px] text-sm leading-relaxed text-gray-500">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
