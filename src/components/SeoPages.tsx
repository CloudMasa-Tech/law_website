import { CheckCircle2, ChevronDown } from "lucide-react";
import { useState } from "react";
import About from "./About";
import Compliance from "./Compliance";
import Contact from "./Contact";
import LegalPages from "./LegalPages";
import Offices from "./Offices";
import Process from "./Process";
import SeoHead, { siteUrl } from "./SeoHead";
import Services from "./Services";
import WhyChooseUs from "./WhyChooseUs";
import { firm, legalPolicies, offices, services } from "../siteContent";

type RoutePageProps = {
  path: string;
};

const faqs = [
  {
    q: "How do I book a consultation with Law Arena Associates?",
    a: "Use the contact form, phone, WhatsApp, or email. The team reviews the basic matter details before confirming the next consultation step.",
  },
  {
    q: "Does contacting the firm create a lawyer-client relationship?",
    a: "No. A lawyer-client relationship begins only after conflict checks, formal engagement, and written acceptance by the firm.",
  },
  {
    q: "Which locations does the firm serve?",
    a: "The firm has offices in Puducherry and Chennai and supports Tamil Nadu, Karnataka, Puducherry, and pan-India advisory matters.",
  },
  {
    q: "What details should I share first?",
    a: "Share your name, contact details, location, matter type, deadline if any, and a concise summary. Sensitive documents should be shared after formal consultation is confirmed.",
  },
];

function SectionRoute({ children }: { children: React.ReactNode }) {
  return <main className="route-page min-h-screen bg-white pt-[68px] lg:pt-[76px]">{children}</main>;
}

function ServicesRoute() {
  return (
    <>
      <SeoHead
        title="Legal Services in Puducherry and Chennai"
        description="Civil litigation, property law, family law, document drafting, business agreements, compliance, and advisory services from Law Arena Associates."
        path="/services"
      />
      <SectionRoute>
        <Services />
      </SectionRoute>
    </>
  );
}

function ServiceDetail({ slug }: { slug: string }) {
  const service = services.find((item) => item.slug === slug);
  if (!service) return <NotFound />;

  const path = `/services/${service.slug}`;
  return (
    <>
      <SeoHead
        title={`${service.title} Lawyers in Puducherry and Chennai`}
        description={service.desc}
        path={path}
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.title,
          description: service.desc,
          provider: { "@type": "LegalService", name: firm.name, url: `${siteUrl}/` },
          areaServed: firm.serviceAreas,
          url: `${siteUrl}${path}`,
        }}
      />
      <main className="min-h-screen bg-white pt-28 sm:pt-32">
        <section className="section-grid border-b border-gray-100 py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="sleek-label mb-6">Practice Area</div>
            <h1 className="max-w-5xl font-serif text-[42px] font-bold leading-[0.95] tracking-normal text-black sm:text-6xl lg:text-[80px]">
              {service.title}
            </h1>
          </div>
        </section>
        <section className="py-16 sm:py-20">
          <div className="container mx-auto grid gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_420px] lg:px-8">
            <div>
              <p className="mb-10 max-w-3xl text-lg leading-relaxed text-gray-600">{service.desc}</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {service.items.map((item) => (
                  <div key={item} className="flex items-center gap-3 border border-gray-200 p-5 text-sm font-semibold text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-black" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <aside className="border border-gray-200 bg-[#f7f7f7] p-8">
              <h2 className="mb-4 font-serif text-3xl font-bold">Discuss This Matter</h2>
              <p className="mb-8 text-sm leading-relaxed text-gray-600">Share the basic facts, documents available, location, and deadline so the firm can assess the next step.</p>
              <a href="/contact" className="sharp-cta inline-flex px-7 py-4 text-[10px] font-bold uppercase tracking-[0.28em]">Book Consultation</a>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
}

function AboutRoute() {
  return (
    <>
      <SeoHead title="About Law Arena Associates" description={firm.description} path="/about" />
      <SectionRoute>
        <About />
        <WhyChooseUs />
      </SectionRoute>
    </>
  );
}

function ComplianceRoute() {
  return (
    <>
      <SeoHead title="Compliance and Licensing Services" description="Entity registration, licences, customs support, retainers, notary assistance, and business structuring services." path="/compliance" />
      <SectionRoute>
        <Compliance />
      </SectionRoute>
    </>
  );
}

function ProcessRoute() {
  return (
    <>
      <SeoHead title="Client Engagement Process" description="A clear legal engagement process from consultation through assessment, strategy, execution, and follow-up." path="/process" />
      <SectionRoute>
        <Process />
      </SectionRoute>
    </>
  );
}

function OfficesRoute({ slug }: { slug?: string }) {
  const selected = slug ? offices.find((office) => office.slug === slug) : null;

  if (slug && !selected) return <NotFound />;

  if (selected) {
    return (
      <>
        <SeoHead title={`${selected.label} Legal Office`} description={selected.summary} path={`/locations/${selected.slug}`} />
        <main className="min-h-screen bg-white pt-28 sm:pt-32">
          <section className="section-grid border-b border-gray-100 py-16 sm:py-20 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="sleek-label mb-6">Office Location</div>
              <h1 className="max-w-5xl font-serif text-[42px] font-bold leading-[0.95] tracking-normal text-black sm:text-6xl lg:text-[80px]">{selected.city}</h1>
            </div>
          </section>
          <section className="py-16 sm:py-20">
            <div className="container mx-auto grid gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_420px] lg:px-8">
              <iframe title={`${selected.city} map`} src={selected.map} className="h-[380px] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              <aside className="border border-gray-200 bg-[#f7f7f7] p-8">
                <h2 className="mb-4 font-serif text-3xl font-bold">{selected.label}</h2>
                <p className="mb-6 whitespace-pre-line text-sm leading-relaxed text-gray-600">{selected.address}</p>
                <p className="mb-8 text-sm leading-relaxed text-gray-600">{selected.summary}</p>
                <h3 className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-gray-500">Office Focus</h3>
                <ul className="mb-8 space-y-3 text-sm text-gray-600">
                  {selected.focus.map((item) => <li key={item}>- {item}</li>)}
                </ul>
                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selected.address.replace(/\n/g, ", "))}`} target="_blank" rel="noreferrer" className="mb-5 inline-flex text-[10px] font-bold uppercase tracking-[0.28em] text-gray-600 underline underline-offset-4 hover:text-black">Open Map</a>
                <br />
                <a href="/contact" className="sharp-cta inline-flex px-7 py-4 text-[10px] font-bold uppercase tracking-[0.28em]">Book Consultation</a>
              </aside>
            </div>
          </section>
        </main>
      </>
    );
  }

  return (
    <>
      <SeoHead title="Puducherry and Chennai Offices" description="Law Arena Associates office locations in Puducherry and Chennai for legal, compliance, and advisory matters." path="/offices" />
      <SectionRoute>
        <Offices />
      </SectionRoute>
    </>
  );
}
function ContactRoute() {
  return (
    <>
      <SeoHead title="Book a Confidential Consultation" description="Contact Law Arena Associates by phone, WhatsApp, email, or enquiry form." path="/contact" />
      <SectionRoute>
        <Contact />
      </SectionRoute>
    </>
  );
}

function LegalRoute() {
  return (
    <>
      <SeoHead title="Legal Policies" description="Legal disclaimer, privacy policy, and terms of use for Law Arena Associates website visitors." path="/legal" />
      <SectionRoute>
        <LegalPages />
      </SectionRoute>
    </>
  );
}

function FaqPage() {
  const [open, setOpen] = useState(0);
  return (
    <>
      <SeoHead title="Legal Services FAQ" description="Frequently asked questions about consultations, service areas, and contacting Law Arena Associates." path="/faq" schema={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) }} />
      <main className="min-h-screen bg-white pt-28 sm:pt-32">
        <section className="section-grid border-b border-gray-100 py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="sleek-label mb-6">FAQ</div>
            <h1 className="max-w-5xl font-serif text-[42px] font-bold leading-[0.95] tracking-normal text-black sm:text-6xl lg:text-[80px]">Common Questions</h1>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            {faqs.map((faq, index) => (
              <div key={faq.q} className="border-b border-gray-200 py-5">
                <button className="flex w-full items-center justify-between gap-4 text-left font-serif text-2xl font-bold" onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}>
                  {faq.q}
                  <ChevronDown className={`h-5 w-5 transition-transform ${open === index ? "rotate-180" : ""}`} />
                </button>
                {open === index && <p className="mt-4 text-sm leading-relaxed text-gray-600">{faq.a}</p>}
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

function PolicyPage({ id }: { id: string }) {
  const policy = legalPolicies.find((item) => item.id === id);
  if (!policy) return <NotFound />;
  const path = id === "privacy" ? "/privacy-policy" : id === "terms" ? "/terms-of-use" : "/disclaimer";

  return (
    <>
      <SeoHead title={policy.title} description={policy.body} path={path} />
      <main className="min-h-screen bg-white pt-28 sm:pt-32">
        <section className="section-grid border-b border-gray-100 py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="sleek-label mb-6">Legal</div>
            <h1 className="max-w-5xl font-serif text-[42px] font-bold leading-[0.95] tracking-normal text-black sm:text-6xl lg:text-[80px]">{policy.title}</h1>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <p className="mb-8 text-base leading-relaxed text-gray-700">{policy.body}</p>
            <ul className="space-y-4">
              {policy.statements.map((statement) => (
                <li key={statement} className="border border-gray-200 p-5 text-sm leading-relaxed text-gray-600">{statement}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}

function AiOverviewPage() {
  return (
    <>
      <SeoHead title="Law Arena Associates Overview" description={firm.description} path="/ai-overview" />
      <SectionRoute>
        <About />
        <Services />
        <Compliance />
        <Offices />
        <Contact />
      </SectionRoute>
    </>
  );
}

function NotFound() {
  return (
    <>
      <SeoHead title="Page Not Found" description="The requested Law Arena Associates page could not be found." path="/404" />
      <main className="min-h-screen bg-white pt-28 sm:pt-32">
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="sleek-label mb-6">404</div>
            <h1 className="mb-8 font-serif text-5xl font-bold">Page Not Found</h1>
            <a className="underline" href="/">Return home</a>
          </div>
        </section>
      </main>
    </>
  );
}

export default function RoutePage({ path }: RoutePageProps) {
  if (path === "/services") return <ServicesRoute />;
  if (path.startsWith("/services/")) return <ServiceDetail slug={path.split("/")[2]} />;
  if (path === "/about") return <AboutRoute />;
  if (path === "/compliance") return <ComplianceRoute />;
  if (path === "/process") return <ProcessRoute />;
  if (path === "/offices") return <OfficesRoute />;
  if (path === "/contact") return <ContactRoute />;
  if (path === "/legal") return <LegalRoute />;
  if (path === "/faq") return <FaqPage />;
  if (path === "/disclaimer") return <PolicyPage id="disclaimer" />;
  if (path === "/privacy-policy") return <PolicyPage id="privacy" />;
  if (path === "/terms-of-use") return <PolicyPage id="terms" />;
  if (path === "/ai-overview") return <AiOverviewPage />;
  if (path.startsWith("/locations/")) return <OfficesRoute slug={path.split("/")[2]} />;
  return <NotFound />;
}