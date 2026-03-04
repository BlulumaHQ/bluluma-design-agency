export interface Project {
  slug: string;
  name: string;
  industry: string;
  services: string[];
  description: string;
  image: string;
  featured?: boolean;
  caseStudy?: boolean;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "friendly-dental",
    name: "Friendly Dental",
    industry: "Healthcare",
    services: ["Brand Identity", "Website Platform", "Marketing Collateral"],
    description: "Modern dental clinic brand and website designed to communicate trust, clarity, and professionalism.",
    image: "/projects/friendly-dental.jpg",
    featured: true,
    caseStudy: true,
    liveUrl: "https://friendlydental.ca",
  },
  {
    slug: "live-at-headwater",
    name: "Live at Headwater",
    industry: "Real Estate Development",
    services: ["Brand Identity", "Website Platform", "Marketing Collateral"],
    description: "Brand identity and digital platform for a modern residential development.",
    image: "/projects/live-at-headwater.jpg",
    featured: true,
    caseStudy: true,
    liveUrl: "https://liveatheadwater.com",
  },
  {
    slug: "btn-real-estate",
    name: "BTN Real Estate",
    industry: "Real Estate",
    services: ["Brand Identity", "Website Platform"],
    description: "Brand and website platform created for a real estate development advisory firm.",
    image: "/projects/btn-real-estate.jpg",
    featured: true,
    caseStudy: true,
    liveUrl: "https://btnrealestate.com",
  },
  {
    slug: "nuera-nutra",
    name: "NuEra Nutra",
    industry: "Ecommerce",
    services: ["Website Platform"],
    description: "Modern ecommerce website designed for a nutrition brand.",
    image: "/projects/nuera-nutra.jpg",
    featured: true,
    liveUrl: "https://nueranutra.com",
  },
  {
    slug: "vita-environmental",
    name: "Vita Environmental",
    industry: "Construction",
    services: ["Website Platform"],
    description: "TBD",
    image: "/projects/vita-environmental.jpg",
    liveUrl: "https://vitaenvironmental.ca",
  },
  {
    slug: "spa-alita",
    name: "Spa Alita",
    industry: "Lifestyle",
    services: ["Website Platform"],
    description: "TBD",
    image: "/projects/spa-alita.jpg",
    liveUrl: "https://spaalita.com",
  },
];
