import { motion } from "motion/react";
import { whyChooseUs } from "../siteContent";

export default function WhyChooseUs() {
  return (
    <section className="border-t border-gray-100 bg-white py-20 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center sm:mb-20">
          <div className="sleek-label mb-5">Why Choose Us</div>
          <h2 className="font-serif text-[38px] font-bold leading-[0.95] tracking-normal text-black sm:text-5xl md:text-[60px] lg:text-[64px]">
            The Difference is
            <br />
            <em className="font-normal">Measurable.</em>
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              viewport={{ once: true }}
              className="min-h-[210px] rounded-sm border border-gray-200 bg-white p-6 shadow-[0_16px_50px_rgba(0,0,0,0.025)] sm:p-8"
            >
              <div className="mb-4 font-serif text-5xl font-bold tracking-normal text-gray-500">{stat.value}</div>
              <div className="mb-3 font-serif text-2xl font-bold text-black">{stat.label}</div>
              <div className="mb-4 h-px w-8 bg-gray-400" />
              <p className="text-sm leading-relaxed text-gray-500">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
