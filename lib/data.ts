// All your site's data in one place for easy management.

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Chemicals', href: '/chemicals' },
  { label: 'Industrial', href: '/industrial' }, // Corrected from Dry Fruits
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];

export const carouselSlides = [
  {
    title: 'Welcome to SR Group',
    subtitle: 'Pioneering Excellence in Chemical and Industrial Solutions',
    img: '/images/welcome-hero.jpg', // Use a high-quality, relevant image
    href: '#about',
    isWelcome: true,
  },
  {
    title: 'SR Trade Vision',
    subtitle: 'Innovative Industrial & Food-Grade Chemicals',
    img: '/images/chemicals-hero.jpg',
    href: '/chemicals',
    isWelcome: false,
  },
  {
    title: 'SR Industrial Corp',
    subtitle: 'Engineering Tomorrow\'s Industrial Excellence',
    img: '/images/industrial-hero.jpg',
    href: '/industrial',
    isWelcome: false,
  },
];

export const businessUnits = [
  {
    name: "SR Trade Vision",
    description: "Sustainable and innovative chemical solutions trusted by leading industries and partners.",
    image: "/images/chemicals.jpg",
    href: "/chemicals",
  },
  {
    name: "SR Industrial Corp",
    description: "Engineering excellence with cutting-edge industrial solutions and innovative manufacturing.",
    image: "/images/industrial.jpg",
    href: "/industrial",
  }
];

export const siteStats = [
  { label: "Years of Excellence", value: 10, suffix: "+" },
  { label: "Product Range", value: 30, suffix: "+" },
  { label: "Business Verticals", value: 2, suffix: "" },
];

export const chemicalProducts = [
  {
    name: "Citric Acid",
    desc: "Food-grade & industrial use",
    image: "/images/products/citric-acid.jpg",
    specifications: [
      "Purity: ≥99.5%",
      "Mesh size: 30-100",
      "Packaging: 25kg HDPE bags"
    ]
  },
  // ... Add all other chemical products here
  {
    name: "Sodium Hypochlorite",
    desc: "Disinfectant & bleaching agent",
    image: "/images/products/sodium-hypochlorite.jpg",
    specifications: [
      "Available Chlorine: 10-12%",
      "pH: 11.5-13",
      "Packaging: 30kg carboys"
    ]
  }
];

// We'll create some placeholder data for the new Industrial page
export const industrialProducts = [
    {
    name: "Precision Bearings",
    desc: "High-load capacity for heavy machinery",
    image: "/images/products/bearings.jpg", // Replace with actual image path
    specifications: [
      "Material: Hardened Chrome Steel",
      "Seals: Double-sided rubber seal",
      "Tolerance: ABEC-5",
    ]
  },
  {
    name: "Hydraulic Systems",
    desc: "Custom-built for industrial automation",
    image: "/images/products/hydraulics.jpg",
    specifications: [
      "Pressure: Up to 350 bar",
      "Flow Rate: 10-200 L/min",
      "Reservoir: 50L to 500L capacity",
    ]
  },
  {
    name: "Industrial Conveyor Belts",
    desc: "Durable belts for material handling",
    image: "/images/products/conveyor.jpg",
    specifications: [
      "Material: PVC, Rubber, PU",
      "Width: 300mm to 1200mm",
      "Feature: Heat & oil resistant",
    ]
  }
];