import { motion } from "motion/react";
import { Award, Briefcase, Globe2, Users } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "15+" },
  { label: "States Practice", value: "4" },
  { label: "Consultations", value: "1000+" },
  { label: "Civil & Corporate", value: "100%" },
];

const locations = ["Tamil Nadu", "Puducherry", "Karnataka", "Pan-India Advisory"];
const metricIcons = [Award, Globe2, Users, Briefcase];

export default function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-24 lg:py-36">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 grid items-center gap-12 lg:mb-28 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <div className="sleek-label mb-6 sm:mb-8">About The Firm</div>
            <h2 className="mb-6 font-serif text-[38px] font-bold leading-[0.95] tracking-normal text-black sm:mb-8 sm:text-5xl md:text-[64px] lg:text-[70px]">
              A Legacy of <em className="font-normal">Trust,</em>
              <br />
              Crafted Since 2010.
            </h2>
            <p className="mb-8 text-[15px] leading-relaxed text-gray-600 sm:mb-10 sm:text-base">
              Law Arena Associates is a multi-disciplinary legal and para-legal services firm established in 2010 with offices in Puducherry and Chennai. We provide comprehensive advisory and litigation services across Tamil Nadu, Puducherry, Karnataka, and pan-India representation for civil and corporate matters.
            </p>

            <div className="flex flex-wrap gap-2">
              {locations.map((loc) => (
                <span
                  key={loc}
                  className="rounded-full border border-gray-200 bg-white px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-gray-500 sm:px-5 sm:tracking-[0.24em]"
                >
                  {loc}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="group relative aspect-[4/5] overflow-hidden rounded-sm border border-gray-200 bg-black">
              <img
                src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1600&q=80"
                alt="Law Arena library"
                className="color-reveal h-full w-full object-cover opacity-75 group-hover:scale-[1.03] group-hover:opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-x-0 bottom-[22%] h-px bg-white/10" />
              <div className="absolute inset-y-0 left-[30%] w-px bg-white/10" />
              <div className="absolute inset-y-0 left-[66%] w-px bg-white/10" />
              <div className="absolute left-8 top-8 text-white/80 sm:left-14 sm:top-16">
                <Briefcase className="h-10 w-10 sm:h-12 sm:w-12" strokeWidth={1.2} />
              </div>
              <div className="absolute right-6 top-8 text-right sm:right-14 sm:top-16">
                <div className="font-serif text-3xl font-bold leading-none text-white sm:text-4xl">2010</div>
                <div className="text-[9px] font-bold uppercase tracking-[0.35em] text-gray-400">Founded</div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 z-10 sm:bottom-10 sm:left-10 sm:right-10">
                <h3 className="mb-2 font-serif text-2xl font-bold text-white sm:text-3xl">Law Arena</h3>
                <div className="mb-8 text-[10px] font-bold uppercase tracking-[0.35em] text-gray-300 sm:mb-10">
                  Associates - Advocates & Legal Consultants
                </div>
                <div className="grid grid-cols-2 gap-6 sm:gap-10">
                  <div>
                    <div className="mb-3 text-[9px] font-bold uppercase tracking-[0.35em] text-white/80">HQ</div>
                    <div className="font-semibold text-white">Puducherry</div>
                  </div>
                  <div>
                    <div className="mb-3 text-[9px] font-bold uppercase tracking-[0.35em] text-white/80">Branch</div>
                    <div className="font-semibold text-white">Chennai</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 divide-y divide-gray-200 border border-gray-200 bg-white sm:grid-cols-2 sm:[&>*:nth-child(odd)]:border-r sm:[&>*:nth-child(odd)]:border-gray-200 lg:grid-cols-4 lg:divide-y-0 lg:[&>*:nth-child(odd)]:border-r-0 lg:[&>*:not(:last-child)]:border-r lg:[&>*:not(:last-child)]:border-gray-200">
          {stats.map((stat, i) => {
            const Icon = metricIcons[i];

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="min-h-[160px] p-7 sm:min-h-[185px] sm:p-9 lg:p-10"
              >
                <Icon className="mb-8 h-5 w-5 text-gray-400" strokeWidth={1.5} />
                <div className="mb-3 font-serif text-4xl font-bold tracking-normal text-black sm:text-5xl">{stat.value}</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.35em] text-gray-400">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
