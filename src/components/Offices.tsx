import { motion } from "motion/react";
import { Clock, MapPin } from "lucide-react";
import { offices } from "../siteContent";

export default function Offices() {
  return (
    <section id="offices" className="border-t border-gray-100 bg-white py-20 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center sm:mb-16">
          <div className="sleek-label mb-5">Our Offices</div>
          <h2 className="font-serif text-[38px] font-bold leading-[0.95] tracking-normal text-black sm:text-5xl md:text-[64px] lg:text-[70px]">
            Two Locations. <em className="font-normal">One</em>
            <br />
            <em className="font-normal">Standard.</em>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {offices.map((office, i) => (
            <motion.div
              key={office.city}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-sm border border-gray-200 bg-white shadow-[0_24px_70px_rgba(0,0,0,0.035)]"
            >
              <div className="h-[280px] overflow-hidden bg-gray-100 sm:h-[320px] lg:h-[370px]">
                <iframe
                  title={`${office.city} map`}
                  src={office.map}
                  className="color-reveal h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-start gap-5 border-b border-gray-200 pb-8">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-black" strokeWidth={1.5} />
                  <div>
                    <h3 className="mb-4 font-serif text-2xl font-bold sm:text-3xl">{office.city}</h3>
                    <p className="whitespace-pre-line text-sm leading-relaxed text-gray-600">{office.address}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 pb-5 pt-7">
                  <Clock className="h-4 w-4 shrink-0 text-gray-500" />
                  <p className="text-sm text-gray-600">Mon - Sat : 09:30 - 18:30</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {office.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-gray-200 bg-white px-3 py-2 text-[9px] font-bold uppercase tracking-[0.24em] text-gray-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
