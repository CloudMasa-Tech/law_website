import { useEffect } from "react";
import { firm, offices, services } from "../siteContent";

const siteUrl = "https://lawarena.in";

type SeoData = {
  title: string;
  description: string;
  path?: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
};

const baseSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: firm.name,
  url: `${siteUrl}/`,
  email: firm.email,
  telephone: `+${firm.phone}`,
  foundingDate: firm.established,
  areaServed: firm.serviceAreas,
  address: offices.map((office) => ({
    "@type": "PostalAddress",
    streetAddress: office.address.split("\n")[0],
    addressLocality: office.label,
    postalCode: office.address.match(/\d{6}/)?.[0],
    addressCountry: "IN",
  })),
  serviceType: services.map((service) => service.title),
};

function setMeta(selector: string, attr: "content" | "href", value: string) {
  const element = document.head.querySelector(selector);
  if (element) {
    element.setAttribute(attr, value);
  }
}

export default function SeoHead({ title, description, path = "/", schema }: SeoData) {
  useEffect(() => {
    const canonical = `${siteUrl}${path}`;
    const fullTitle = title.includes(firm.name) ? title : `${title} | ${firm.name}`;

    document.title = fullTitle;
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", fullTitle);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", canonical);
    setMeta('meta[name="twitter:title"]', "content", fullTitle);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('link[rel="canonical"]', "href", canonical);

    const json = JSON.stringify(schema ?? baseSchema);
    let script = document.getElementById("route-json-ld") as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = "route-json-ld";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = json;
  }, [title, description, path, schema]);

  return null;
}

export { baseSchema, siteUrl };
