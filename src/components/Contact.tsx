import { motion } from "motion/react";
import { ChevronDown, Mail, MessageCircle, Phone } from "lucide-react";
import type { ChangeEvent, FormEvent } from "react";
import { useMemo, useState } from "react";
import { advisories, firm, services } from "../siteContent";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  matter: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("");

  const matterOptions = useMemo(
    () => [...services.map((service) => service.title), ...advisories.map((advisory) => advisory.title)],
    [],
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.phone.trim() || !form.matter || !form.message.trim()) {
      setStatus("Please complete all fields before submitting.");
      return;
    }

    const subject = encodeURIComponent(`Website enquiry - ${form.matter}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nMatter Type: ${form.matter}\n\nMessage:\n${form.message}`,
    );
    window.location.href = `mailto:${firm.email}?subject=${subject}&body=${body}`;
    setStatus("Your email client has been opened with the enquiry details.");
  };

  const updateField = (field: keyof typeof initialForm) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
  };

  return (
    <section id="contact" className="soft-grid bg-white py-20 sm:py-24 lg:py-36">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <div className="sleek-label mb-6 sm:mb-8">Get in Touch</div>
            <h2 className="mb-6 font-serif text-[38px] font-bold leading-[0.95] tracking-normal text-black sm:mb-8 sm:text-5xl md:text-[64px] lg:text-[70px]">
              Begin With a
              <br />
              <em className="font-normal">Confidential</em>
              <br />
              Conversation.
            </h2>
            <p className="mb-8 text-[15px] leading-relaxed text-gray-600 sm:mb-10 sm:text-base">
              Share a brief description of your matter. Our team will respond within one business day with a confidential initial assessment.
            </p>

            <div className="mb-10 space-y-6">
              {[
                { icon: Mail, label: "Email", value: firm.email, href: `mailto:${firm.email}` },
                { icon: Phone, label: "Phone", value: firm.phoneLabel, href: `tel:+${firm.phone}` },
                { icon: MessageCircle, label: "WhatsApp", value: firm.whatsappLabel, href: firm.whatsappUrl },
              ].map((item) => (
                <a
                  className="group flex items-center gap-5"
                  href={item.href}
                  key={item.label}
                  target={item.label === "WhatsApp" ? "_blank" : undefined}
                  rel={item.label === "WhatsApp" ? "noreferrer" : undefined}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-gray-200 bg-white">
                    <item.icon className="h-4 w-4 text-gray-600" strokeWidth={1.7} />
                  </div>
                  <div>
                    <div className="mb-1 text-[9px] font-bold uppercase tracking-[0.35em] text-gray-400">{item.label}</div>
                    <div className="text-base font-semibold text-gray-800 transition-colors group-hover:text-black group-hover:underline">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="group aspect-[16/7] overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1593115057322-e94b77572f20?auto=format&fit=crop&w=1600&q=80"
                alt="Gavel"
                className="color-reveal h-full w-full object-cover group-hover:scale-[1.03]"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="border border-gray-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,15,15,0.05)] sm:p-8 md:p-10 lg:p-12"
          >
            <form className="space-y-8 sm:space-y-9" onSubmit={handleSubmit}>
              <div className="grid gap-6 md:grid-cols-2 md:gap-8">
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={updateField("name")}
                  className="w-full border-b border-gray-300 bg-transparent py-4 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-black"
                  placeholder="Full Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={updateField("email")}
                  className="w-full border-b border-gray-300 bg-transparent py-4 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-black"
                  placeholder="Email Address"
                  required
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2 md:gap-8">
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={updateField("phone")}
                  className="w-full border-b border-gray-300 bg-transparent py-4 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-black"
                  placeholder="Phone Number"
                  required
                />
                <div className="relative">
                  <select
                    name="matter"
                    value={form.matter}
                    onChange={updateField("matter")}
                    className="w-full appearance-none border-b border-gray-300 bg-transparent py-4 text-sm text-gray-500 outline-none transition-colors focus:border-black"
                    required
                  >
                    <option value="" disabled>
                      Legal Matter Type
                    </option>
                    {matterOptions.map((matter) => (
                      <option key={matter}>{matter}</option>
                    ))}
                    <option>Compliance & Licensing</option>
                    <option>Other Legal Matter</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute bottom-5 right-0 h-4 w-4 text-gray-400" />
                </div>
              </div>

              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={updateField("message")}
                className="w-full resize-none border-b border-gray-300 bg-transparent py-4 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-black"
                placeholder="Brief Description of Your Matter"
                required
              />

              <button
                type="submit"
                className="w-full bg-black py-5 text-[10px] font-bold uppercase tracking-[0.28em] text-white shadow-2xl shadow-black/10 transition-colors hover:bg-gray-800 sm:text-[11px] sm:tracking-[0.35em]"
              >
                Submit Enquiry
              </button>

              <p className="text-[10px] text-gray-400">
                Contacting us does not constitute the creation of a lawyer-client relationship.
              </p>
              {status && <p className="text-sm font-semibold text-gray-700" role="status">{status}</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
