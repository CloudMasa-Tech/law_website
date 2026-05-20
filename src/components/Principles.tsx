import { motion } from "motion/react";
import { principles } from "../siteContent";

export default function Principles() {
  return (
    <section className="border-t border-gray-100 bg-white py-20 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="min-h-[220px] border border-gray-200 bg-white p-6 shadow-[0_22px_60px_rgba(0,0,0,0.025)] sm:min-h-[250px] sm:p-8"
            >
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white sm:mb-10">
                <p.icon className="h-5 w-5 text-black" strokeWidth={1.5} />
              </div>
              <h3 className="mb-4 font-serif text-2xl font-bold leading-tight tracking-tight">{p.title}</h3>
              <p className="text-sm leading-relaxed text-gray-500">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
