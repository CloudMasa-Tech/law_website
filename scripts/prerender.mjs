import fs from "node:fs";
import path from "node:path";

const distDir = path.resolve("dist");
const templatePath = path.join(distDir, "index.html");
const siteUrl = "https://lawarena.in";

const services = [
  ["court-representation", "Court Representation", "Skilled representation before district and civil courts across Puducherry and Chennai through every stage of litigation."],
  ["civil-litigation", "Civil Litigation", "Thorough case preparation, evidence management, written submissions, and courtroom advocacy for complex disputes."],
  ["document-drafting", "Document Drafting", "Precise drafting for notices, pleadings, commercial agreements, affidavits, and settlement documents."],
  ["property-real-estate-law", "Property & Real Estate", "Transaction, title, registration, and dispute support for land and real-estate matters in Tamil Nadu and Puducherry."],
  ["family-personal-law", "Family & Personal Law", "Discreet assistance for sensitive family matters with a clear focus on fair, practical resolution."],
  ["transaction-agreements", "Transaction & Agreements", "Business contract support that protects commercial interests from due diligence through execution."],
];

const baseSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Law Arena Associates",
  url: `${siteUrl}/`,
  email: "vakkilrrajesh@gmail.com",
  telephone: "+919363552448",
  foundingDate: "2010",
  areaServed: ["Puducherry", "Chennai", "Tamil Nadu", "Karnataka", "India"],
  address: [
    { "@type": "PostalAddress", streetAddress: "No. 115-117, Chetty Street", addressLocality: "Puducherry", postalCode: "605001", addressCountry: "IN" },
    { "@type": "PostalAddress", streetAddress: "No. 8/29, Loganathan Street, West Tambaram", addressLocality: "Chennai", postalCode: "600045", addressCountry: "IN" },
  ],
  serviceType: services.map(([, title]) => title),
};

const routes = [
  ["/", "Law Arena Associates | Advocates & Legal Consultants", "Law Arena Associates provides civil litigation, property law, family law, corporate counsel, compliance, licensing, and legal advisory services in Puducherry, Chennai, Tamil Nadu, Karnataka, and pan-India matters.", baseSchema],
  ["/about", "About Law Arena Associates | Law Arena Associates", "Multi-disciplinary legal and para-legal services for individuals, startups, entrepreneurs, and businesses across Puducherry, Chennai, Tamil Nadu, Karnataka, and pan-India advisory matters.", baseSchema],
  ["/services", "Legal Services in Puducherry and Chennai | Law Arena Associates", "Civil litigation, property law, family law, document drafting, business agreements, compliance, and advisory services from Law Arena Associates.", baseSchema],
  ["/compliance", "Compliance and Licensing Services | Law Arena Associates", "Entity registration, licences, customs support, retainers, notary assistance, and business structuring services.", baseSchema],
  ["/process", "Client Engagement Process | Law Arena Associates", "A clear legal engagement process from consultation through assessment, strategy, execution, and follow-up.", baseSchema],
  ["/offices", "Puducherry and Chennai Offices | Law Arena Associates", "Law Arena Associates office locations in Puducherry and Chennai for legal, compliance, and advisory matters.", baseSchema],
  ["/locations/puducherry", "Puducherry Legal Office | Law Arena Associates", "The Puducherry office supports civil litigation, property, documentation, family, and compliance matters for clients in and around Puducherry.", baseSchema],
  ["/locations/chennai", "Chennai Legal Office | Law Arena Associates", "The Chennai office supports corporate, compliance, property, family, and advisory matters for clients in Chennai and Tamil Nadu.", baseSchema],
  ["/contact", "Book a Confidential Consultation | Law Arena Associates", "Contact Law Arena Associates by phone, WhatsApp, email, or enquiry form.", baseSchema],
  ["/faq", "Legal Services FAQ | Law Arena Associates", "Frequently asked questions about consultations, service areas, and contacting Law Arena Associates.", baseSchema],
  ["/disclaimer", "Legal Disclaimer | Law Arena Associates", "Website information is for general awareness only and should not be treated as legal advice.", baseSchema],
  ["/privacy-policy", "Privacy Policy | Law Arena Associates", "How Law Arena Associates handles enquiry details and visitor information.", baseSchema],
  ["/terms-of-use", "Terms of Use | Law Arena Associates", "Website use terms for Law Arena Associates visitors.", baseSchema],
  ["/ai-overview", "Law Arena Associates Overview | Law Arena Associates", "Overview of Law Arena Associates legal, compliance, and advisory services in Puducherry and Chennai.", baseSchema],
  ...services.map(([slug, title, description]) => [`/services/${slug}`, `${title} Lawyers in Puducherry and Chennai | Law Arena Associates`, description, {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description,
    provider: { "@type": "LegalService", name: "Law Arena Associates", url: `${siteUrl}/` },
    areaServed: ["Puducherry", "Chennai", "Tamil Nadu", "Karnataka", "India"],
    url: `${siteUrl}/services/${slug}`,
  }]),
];

function escapeAttr(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
}

function replaceMeta(html, route, title, description, schema) {
  const canonical = `${siteUrl}${route === "/" ? "/" : route}`;
  let out = html;
  out = out.replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);
  out = out.replace(/<meta\s+name="description"\s+content="[\s\S]*?"\s*\/>/, `<meta name="description" content="${escapeAttr(description)}" />`);
  out = out.replace(/<meta\s+property="og:title"\s+content="[\s\S]*?"\s*\/>/, `<meta property="og:title" content="${escapeAttr(title)}" />`);
  out = out.replace(/<meta\s+property="og:description"\s+content="[\s\S]*?"\s*\/>/, `<meta property="og:description" content="${escapeAttr(description)}" />`);
  out = out.replace(/<meta\s+property="og:url"\s+content="[\s\S]*?"\s*\/>/, `<meta property="og:url" content="${escapeAttr(canonical)}" />`);
  out = out.replace(/<meta\s+name="twitter:title"\s+content="[\s\S]*?"\s*\/>/, `<meta name="twitter:title" content="${escapeAttr(title)}" />`);
  out = out.replace(/<meta\s+name="twitter:description"\s+content="[\s\S]*?"\s*\/>/, `<meta name="twitter:description" content="${escapeAttr(description)}" />`);
  out = out.replace(/<link\s+rel="canonical"\s+href="[\s\S]*?"\s*\/>/, `<link rel="canonical" href="${escapeAttr(canonical)}" />`);
  out = out.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, `<script type="application/ld+json">${JSON.stringify(schema)}</script>`);
  return out;
}

const template = fs.readFileSync(templatePath, "utf8");
for (const [route, title, description, schema] of routes) {
  const html = replaceMeta(template, route, title, description, schema);
  const targetDir = route === "/" ? distDir : path.join(distDir, route.slice(1));
  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(path.join(targetDir, "index.html"), html);
}

console.log(`prerendered ${routes.length} routes`);
