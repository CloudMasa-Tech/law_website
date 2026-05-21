import BrandLogo from "./BrandLogo";
import { firm, legalPolicies, navItems, services } from "../siteContent";

export default function Footer() {
  return (
    <footer className="group relative overflow-hidden bg-black pb-10 pt-20 text-white sm:pt-24">
      <div className="pointer-events-none absolute inset-0 opacity-[0.18]">
        <img
          src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1600&q=80"
          alt="Law library"
          className="color-reveal h-full w-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-black/70" />
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-serif text-[14vw] font-bold leading-none tracking-[0.05em] text-white/[0.035]">
        LAW ARENA
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:mb-20 lg:grid-cols-4 lg:gap-16">
          <div>
            <div className="mb-8 flex items-center gap-3">
              <BrandLogo tone="light" compact />
            </div>
            <p className="mb-8 max-w-[260px] text-sm leading-relaxed text-gray-400">
              Multi-disciplinary legal and para-legal services. Strategic counsel grounded in integrity, since {firm.established}.
            </p>
          </div>

          <div>
            <h4 className="mb-8 text-[10px] font-bold uppercase tracking-[0.35em] text-gray-400">Practice Areas</h4>
            <ul className="space-y-4">
              {services.slice(0, 6).map((link) => (
                <li key={link.title}>
                  <a href="#services" className="text-sm text-gray-400 transition-colors hover:text-white">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-8 text-[10px] font-bold uppercase tracking-[0.35em] text-gray-400">Quick Links</h4>
            <ul className="space-y-4">
              {[...navItems, ...legalPolicies.map((policy) => ({ label: policy.title, href: "#legal" }))].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-400 transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-8 text-[10px] font-bold uppercase tracking-[0.35em] text-gray-400">Offices</h4>
            <div className="space-y-8">
              <div>
                <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.35em] text-white">Puducherry</div>
                <div className="text-sm leading-relaxed text-gray-400">
                  No. 115-117, Chetty Street,
                  <br />
                  Puducherry - 605001
                </div>
              </div>
              <div>
                <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.35em] text-white">Chennai</div>
                <div className="text-sm leading-relaxed text-gray-400">
                  No. 8/29, Loganathan Street,
                  <br />
                  West Tambaram, Chennai - 600045
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <div className="space-y-2 text-xs text-gray-500">
            <div>Copyright 2026 {firm.name}. All rights reserved.</div>
            <div>
              Built by{" "}
              <a
                href="https://cloudmasa.com"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-gray-300 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white"
              >
                CloudMaSa Innovation
              </a>
              .
            </div>
          </div>
          <div className="max-w-2xl text-xs leading-relaxed text-gray-500 md:text-right">
            <a href="#legal" className="font-semibold text-gray-300 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white">
              Privacy Policy
            </a>
            <span className="mx-2 text-gray-700">/</span>
            Disclaimer: Contacting us does not constitute creation of a lawyer-client relationship.
          </div>
        </div>
      </div>
    </footer>
  );
}
