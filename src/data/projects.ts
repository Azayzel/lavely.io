export type Project = {
  slug: "kinvite" | "kennasits" | "veerdonk-furniture";
  name: string;
  domain: string;
  href: string;
  category: string;
  headline: string;
  intro: string;
  challenge: string;
  solution: string;
  capabilities: string[];
  technologies: string[];
  number: string;
};

export const projects: Project[] = [
  {
    slug: "kinvite",
    name: "KinVite",
    domain: "kinvite.io",
    href: "https://kinvite.io",
    category: "Independent product · Family technology",
    headline: "Less coordinating. More celebrating.",
    intro: "One place for families to organize events, track birthdays, RSVP, manage gift lists and stay in touch.",
    challenge: "Family plans end up scattered across texts, calendars, notes and shopping links. Keeping everyone in the loop shouldn't be another job.",
    solution: "I designed KinVite around the actual occasion: invite people, coordinate the details, respond, manage gifts and bring the same people together again. The web experience shares its secure backend with the Apple app.",
    capabilities: ["Private family circles", "Events, RSVPs and birthdays", "Gift lists and hidden claims", "Messaging and shared coordination"],
    technologies: ["Next.js", "React", "TypeScript", "Supabase", "Apple ecosystem"],
    number: "01"
  },
  {
    slug: "kennasits",
    name: "KennaSits",
    domain: "kennasits.com",
    href: "https://kennasits.com",
    category: "Client website · Local services",
    headline: "A welcoming home for a care-first business.",
    intro: "A dedicated online presence for a pet-care service, built around clarity, trust and getting in touch.",
    challenge: "For a service built on trust, the first impression matters. Visitors need to quickly understand the offering and know how to reach out.",
    solution: "A focused website that puts the business front and center instead of burying visitors in features. The experience prioritizes a warm presentation, straightforward navigation and an obvious next step.",
    capabilities: ["Service-focused storytelling", "Responsive presentation", "Clear paths to inquiry", "Focused information architecture"],
    technologies: ["Website design", "Responsive UI", "Content design"],
    number: "02"
  },
  {
    slug: "veerdonk-furniture",
    name: "Veerdonk Furniture",
    domain: "veerdonkfurniture.com",
    href: "https://veerdonkfurniture.com",
    category: "Client platform · Craftsmanship",
    headline: "Let the craftsmanship do the talking.",
    intro: "An inquiry-first furniture portfolio backed by practical tools for running a custom workshop.",
    challenge: "A furniture maker needs more than a beautiful gallery: customers need to explore the work and owners need to manage content and inquiries without a developer.",
    solution: "I developed a modern portfolio and owner administration experience with collections, rich product imagery, an inquiry inbox and invoicing workflows. Online payment processing is intentionally not enabled.",
    capabilities: ["Custom portfolio collections", "Owner-managed content and media", "Inquiry management", "Invoices and customer-facing documents"],
    technologies: ["Next.js", "TypeScript", "MongoDB", "Owner CMS"],
    number: "03"
  }
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
