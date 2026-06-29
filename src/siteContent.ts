import {
  Award,
  BookOpen,
  Briefcase,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  FileText,
  Gavel,
  Globe2,
  Handshake,
  Heart,
  Home,
  Landmark,
  Lock,
  MapPin,
  Scale,
  ScrollText,
  Star,
  Timer,
  Users,
} from "lucide-react";

export const firm = {
  name: "Law Arena Associates",
  shortName: "Law Arena",
  established: "2010",
  email: "vakkilrrajesh@gmail.com",
  phone: "919363552448",
  phoneLabel: "+91 93635 52448",
  whatsappLabel: "Chat on WhatsApp",
  whatsappUrl: "https://wa.me/919363552448",
  tagline: "Strategic Legal Solutions With Integrity & Precision",
  description:
    "Multi-disciplinary legal and para-legal services for individuals, startups, entrepreneurs, and businesses across Puducherry, Chennai, Tamil Nadu, Karnataka, and pan-India advisory matters.",
  serviceAreas: ["Puducherry", "Chennai", "Tamil Nadu", "Karnataka", "Pan-India Advisory"],
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Compliance", href: "/compliance" },
  { label: "Process", href: "/process" },
  { label: "Offices", href: "/offices" },
  { label: "Contact", href: "/contact" },
];

export const heroStats = [
  { label: "Years Practice", value: "15+" },
  { label: "Consultations", value: "1000+" },
  { label: "States Covered", value: "4" },
  { label: "Offices", value: "2" },
];

export const services = [
  {
    slug: "court-representation",
    id: "01",
    title: "Court Representation",
    desc: "Skilled representation before district and civil courts across Puducherry and Chennai through every stage of litigation.",
    image: "https://images.unsplash.com/photo-1593115057322-e94b77572f20?auto=format&fit=crop&w=1200&q=75",
    icon: Gavel,
    items: ["Civil Suits", "Property Disputes", "Family Court Matters", "Appeals"],
  },
  {
    slug: "civil-litigation",
    id: "02",
    title: "Civil Litigation",
    desc: "Thorough case preparation, evidence management, written submissions, and courtroom advocacy for complex disputes.",
    image: "https://images.unsplash.com/photo-1617341547535-86265a8566b2?auto=format&fit=crop&w=1200&q=75",
    icon: ScrollText,
    items: ["Partition Suits", "Contract Disputes", "Consumer Disputes"],
  },
  {
    slug: "document-drafting",
    id: "03",
    title: "Document Drafting",
    desc: "Precise drafting for notices, pleadings, commercial agreements, affidavits, and settlement documents.",
    image: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?auto=format&fit=crop&w=1200&q=75",
    icon: FileText,
    items: ["Legal Notices", "Agreements", "Affidavits", "Sale Deeds"],
  },
  {
    slug: "property-real-estate-law",
    id: "04",
    title: "Property & Real Estate",
    desc: "Transaction, title, registration, and dispute support for land and real-estate matters in Tamil Nadu and Puducherry.",
    image: "/images/property-real-estate.jpg",
    icon: Home,
    items: ["Title Verification", "Registration Assistance", "Land Disputes"],
  },
  {
    slug: "family-personal-law",
    id: "05",
    title: "Family & Personal Law",
    desc: "Discreet assistance for sensitive family matters with a clear focus on fair, practical resolution.",
    image: "/images/family-personal-law.jpg",
    icon: Users,
    items: ["Divorce", "Child Custody", "Succession"],
  },
  {
    slug: "transaction-agreements",
    id: "06",
    title: "Transaction & Agreements",
    desc: "Business contract support that protects commercial interests from due diligence through execution.",
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1200&q=75",
    icon: Briefcase,
    items: ["NDA", "MoU", "Due Diligence", "Joint Ventures"],
  },
];

export const principles = [
  { icon: Award, title: "Professionalism", desc: "Held to a high standard of practice in every engagement." },
  { icon: Star, title: "Quality", desc: "Rigorous attention to detail and uncompromising legal craft." },
  { icon: Timer, title: "On-Time Completion", desc: "Disciplined timelines, transparent milestones, predictable delivery." },
  { icon: Lock, title: "Confidentiality", desc: "Bound by contract and ethics. Your matter is protected." },
  { icon: Heart, title: "Individual Approach", desc: "Tailored counsel for every client, matter, and commercial objective." },
];

export const complianceServices = [
  {
    id: "01",
    title: "Entity Registration & Re-registration",
    shortTitle: "Entity Registration",
    icon: Building2,
    content: "Complete support for registering, restructuring, and re-registering legal entities in Tamil Nadu and Puducherry.",
    items: ["Private and Public Limited Companies", "Partnership Firms", "LLP Registration", "Sole Proprietorships", "NGO and Trust Registration", "MOA/AOA Amendments"],
  },
  {
    id: "02",
    title: "Licence Acquisition",
    shortTitle: "Licence Acquisition",
    icon: FileCheck2,
    content: "End-to-end licence procurement from government authorities for smooth business operations.",
    items: ["Factory Licence", "Shop and Establishment Licence", "FSSAI", "Labour Licences", "Police NOC", "Trade Licence Renewals"],
  },
  {
    id: "03",
    title: "Customs & Brokerage Services",
    shortTitle: "Customs & Brokerage",
    icon: Landmark,
    content: "Customs advisory and brokerage support for import-export businesses operating from Chennai and Puducherry.",
    items: ["Customs Documentation", "Import-Export Compliance", "EXIM Advisory", "Bill of Lading Review", "Duty Assessment", "Customs Disputes"],
  },
  {
    id: "04",
    title: "Subscription & Retainer Services",
    shortTitle: "Retainer Services",
    icon: ClipboardCheck,
    content: "Ongoing legal support for businesses that need continuous counsel without maintaining an in-house legal team.",
    items: ["Monthly Legal Retainer", "Document Review", "Compliance Calendar", "Notice Management", "Regulatory Updates", "Annual Legal Audit"],
  },
  {
    id: "05",
    title: "Document Attestation & Notary",
    shortTitle: "Document Attestation",
    icon: ScrollText,
    content: "Para-legal support for attestation, notarisation, affidavits, and authentication required for official use.",
    items: ["Notarised Affidavits", "Document Attestation", "Sworn Statements", "Undertakings", "Translation Attestation"],
  },
  {
    id: "06",
    title: "Partnership & Business Structuring",
    shortTitle: "Partnership Structuring",
    icon: Handshake,
    content: "Strategic documentation for business partnerships, restructuring, dispute resolution, and dissolution.",
    items: ["Partnership Deeds", "Partnership Disputes", "Firm Reconstitution", "Dissolution", "Profit-Sharing Agreements"],
  },
];

export const advisories = [
  {
    title: "Legal Advisory",
    desc: "Expert opinion across civil, criminal, economic, family, and corporate law.",
    icon: BookOpen,
    details: [
      "Legal opinion letters for personal, business, and institutional decisions.",
      "Due diligence advisory before signing, investing, buying, or restructuring.",
      "Risk assessment, mitigation planning, and regulatory compliance review.",
      "One-time consultation or ongoing retainer advisory based on your requirement.",
    ],
  },
  {
    title: "Individual, Family & Corporate Counselling",
    desc: "Structured counselling for personal, family, company, and organisational legal challenges.",
    icon: Heart,
    details: [
      "Individual legal counselling for disputes, documentation, and decision-making.",
      "Family mediation and counselling for sensitive relationship or settlement matters.",
      "Corporate governance counselling for directors, partners, and management teams.",
      "Conflict resolution and pre-litigation strategy sessions before formal action.",
    ],
  },
  {
    title: "International Legal Support",
    desc: "Advisory and documentation support for cross-border and NRI matters governed by Indian law.",
    icon: Globe2,
    details: [
      "NRI property advisory for ownership, documentation, title, and representation.",
      "Cross-border contract advisory and international agreement review.",
      "FEMA compliance guidance for India-linked foreign exchange requirements.",
      "Apostille, legalisation, and documentation support for international use.",
    ],
  },
];

export const processSteps = [
  { id: 1, title: "Initial Consultation", desc: "Confidential first meeting to understand your matter." },
  { id: 2, title: "Case Assessment", desc: "Legal review, risk mapping, and strategy options." },
  { id: 3, title: "Strategy & Brief", desc: "Documented strategy, timeline, and commercial estimate." },
  { id: 4, title: "Execution", desc: "Drafting, filing, representation, and stakeholder coordination." },
  { id: 5, title: "Resolution & Follow-up", desc: "Closure, post-resolution compliance, and retainer support." },
];

export const whyChooseUs = [
  { label: "Years Practice", value: "15+", sub: "A track record built across evolving legal and business needs." },
  { label: "Jurisdictions", value: "4", sub: "Multi-state coverage with pan-India advisory capability." },
  { label: "Office Locations", value: "2", sub: "Puducherry HQ and Chennai branch, locally rooted." },
  { label: "Full-Spectrum", value: "100%", sub: "From courtroom representation to compliance and corporate counsel." },
  { label: "Confidential", value: "100%", sub: "Confidentiality protected by contract and professional ethics." },
  { label: "Resolved", value: "1000+", sub: "Practical legal solutions delivered to real clients." },
];

export const offices = [
  {
    slug: "puducherry",
    label: "Puducherry",
    city: "Puducherry Office",
    address: "No. 115-117, Chetty Street,\nPuducherry - 605001",
    tags: ["HQ", "Civil Litigation", "Property Law"],
    map: "https://maps.google.com/maps?q=Chetty%20Street%20Puducherry%20605001&t=m&z=15&output=embed",
  },
  {
    slug: "chennai",
    label: "Chennai",
    city: "Chennai Office",
    address: "No. 8/29, Loganathan Street,\nWest Tambaram, Chennai - 600045",
    tags: ["Corporate", "Compliance", "Family Law"],
    map: "https://maps.google.com/maps?q=Loganathan%20Street%20West%20Tambaram%20Chennai%20600045&t=m&z=14&output=embed",
  },
];

export const contactOptions = [
  { icon: Scale, label: "Consultation", value: "Confidential first review" },
  { icon: MapPin, label: "Service Area", value: "Puducherry, Chennai & pan-India advisory" },
  { icon: CheckCircle2, label: "Response", value: "Within one business day" },
];

export const legalPolicies = [
  {
    id: "disclaimer",
    title: "Legal Disclaimer",
    body: "The information on this website is for general awareness only and should not be treated as legal advice. A lawyer-client relationship is created only after conflict checks, formal engagement, and written acceptance by the firm.",
    statements: [
      "Website content is provided to explain our general areas of work and does not replace advice for a specific matter.",
      "Any action taken based on website information is at the visitor's own discretion until a formal consultation is completed.",
    ],
  },
  {
    id: "privacy",
    title: "Privacy Policy",
    body: "Law Arena Associates respects visitor privacy and handles enquiry details with care. Information shared through calls, WhatsApp, email, or contact forms is used only to understand the enquiry, respond to the visitor, schedule consultation, and maintain necessary professional records.",
    statements: [
      "We may collect name, contact number, email address, location, and the basic description of the legal or compliance enquiry submitted by the visitor.",
      "We do not sell, rent, or trade visitor information to third parties for marketing purposes.",
      "Enquiry information may be shared only with authorised team members, legal associates, consultants, or service providers when required to review or respond to the matter.",
      "Sensitive documents and detailed case facts should be shared only after a formal consultation or engagement is confirmed.",
      "Visitors may contact us to request correction or removal of enquiry information, subject to legal, professional, and record-keeping requirements.",
    ],
  },
  {
    id: "terms",
    title: "Terms of Use",
    body: "Visitors may use this website for lawful information purposes only. Content, branding, and service descriptions belong to Law Arena Associates and may not be copied or republished without written permission.",
    statements: [
      "Visitors must not misuse the website, submit false enquiries, or copy the site's content and branding without written approval.",
      "External links, maps, messaging apps, and third-party services are governed by their own terms and privacy practices.",
    ],
  },
];
