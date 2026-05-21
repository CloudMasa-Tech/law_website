import { motion } from "motion/react";
import { FileText, LockKeyhole, ShieldCheck } from "lucide-react";
import { legalPolicies } from "../siteContent";

const icons = [ShieldCheck, LockKeyhole, FileText];

export default function LegalPages() {
  return (
    <section id="legal" className="border-t border-gray-100 bg-[#f7f7f7] py-20 sm:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <div className="sleek-label mb-5">Legal Pages</div>
          <h2 className="font-serif text-[38px] font-bold leading-[0.95] tracking-normal text-black sm:text-5xl md:text-[60px]">
            Clear Policies.
            <br />
            <em className="font-normal">Transparent Use.</em>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {legalPolicies.map((policy, index) => {
            const Icon = icons[index];

            return (
              <motion.article
                id={policy.id}
                key={policy.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="min-h-[260px] border border-gray-200 bg-white p-6 shadow-[0_16px_50px_rgba(0,0,0,0.025)] sm:p-8"
              >
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-sm border border-gray-200">
                  <Icon className="h-5 w-5 text-black" strokeWidth={1.5} />
                </div>
                <h3 className="mb-5 font-serif text-2xl font-bold text-black">{policy.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{policy.body}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}