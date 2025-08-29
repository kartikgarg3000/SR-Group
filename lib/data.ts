// All your site's data in one place for easy management.

export const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Our Businesses',
    // This new structure allows for dropdown menus in the header
    subLinks: [
      { label: 'SR Trade Vision', href: '/chemicals' },
      { label: 'SR Industrial Corp', href: '/industrial' },
    ],
  },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/contact' },
];

export const carouselSlides = [
  {
    title: 'Welcome to SR Group',
    subtitle: 'Pioneering Excellence in Industrial and Consumer Goods',
    img: '/images/welcome-hero.jpg',
    href: '#about',
    isWelcome: true,
  },
  {
    title: 'SR Trade Vision',
    subtitle: 'Innovative Industrial Oils, Chemicals, and Machineries',
    img: '/images/chemicals-hero.jpg',
    href: '/chemicals',
    isWelcome: false,
  },
  {
    title: 'SR Industrial Corp',
    subtitle: 'From High-Performance Industrial Solutions to Premium Dry Fruits',
    img: '/images/industrial-hero.jpg',
    href: '/industrial',
    isWelcome: false,
  },
];

export const businessUnits = [
  {
    name: "SR Trade Vision",
    description: "Sustainable and innovative industrial solutions trusted by leading industries and partners.",
    image: "/images/chemicals.jpg",
    href: "/chemicals",
  },
  {
    name: "SR Industrial Corp",
    description: "Building strong foundations with industrial chemicals and providing natural goodness with premium dry fruits.",
    image: "/images/industrial.jpg",
    href: "/industrial",
  }
];

export const siteStats = [
  // Updated value to reflect history since 1983
  { label: "Years In Business", value: 40, suffix: "+" },
  { label: "Product Range", value: 50, suffix: "+" },
  { label: "Business Verticals", value: 2, suffix: "" },
];

export const industryCategories = [
  {
    categoryName: "Paint Industry",
    categoryDesc: "Essential solvents, pigments, and additives for vibrant and durable coatings.",
    products: [
      {
        name: "Titanium Dioxide",
        desc: "Superior opacity and whiteness for premium paints.",
        image: "/images/products/titanium-dioxide.jpg",
      },
      {
        name: "Toluene",
        desc: "High-purity solvent for thinning paints and coatings.",
        image: "/images/products/toluene.jpg",
      }
    ]
  },
  {
    categoryName: "Pharmaceutical Industry",
    categoryDesc: "High-purity excipients and APIs for safe and effective formulations.",
    products: [
      {
        name: "Isopropyl Alcohol (IPA)",
        desc: "Pharma-grade (99.9%) for sterilization and as a solvent.",
        image: "/images/products/ipa.jpg",
      },
      {
        name: "Glycerine",
        desc: "Used as a humectant, solvent, and sweetener in pharma.",
        image: "/images/products/glycerine.jpg",
      }
    ]
  },
  {
    categoryName: "Paper Industry",
    categoryDesc: "Specialty chemicals to enhance paper quality, strength, and the pulping process.",
    products: [
      {
        name: "Caustic Soda",
        desc: "Essential for the chemical pulping of wood to produce paper.",
        image: "/images/products/caustic-soda.jpg",
      },
      {
        name: "Hydrogen Peroxide",
        desc: "An environmentally friendly bleaching agent for paper pulp.",
        image: "/images/products/hydrogen-peroxide.jpg",
      }
    ]
  },
  {
    categoryName: "Pesticides Industry",
    categoryDesc: "High-performance solvents and emulsifiers for effective crop protection formulations.",
    products: [
      {
        name: "Cyclohexanone",
        desc: "A key solvent used in the formulation of insecticides and herbicides.",
        image: "/images/products/cyclohexanone.jpg",
      },
      {
        name: "Emulsifiers",
        desc: "Custom blends to ensure stable and effective pesticide emulsions.",
        image: "/images/products/emulsifiers.jpg",
      }
    ]
  }
];

export const industrialProducts = [
  {
    name: "Sealan Chemical",
    desc: "Advanced chemical solutions for construction and industrial applications.",
    image: "/images/products/sealan-chemical.jpg",
  },
  {
    name: "Almonds",
    desc: "Premium quality almonds, rich in nutrients and flavor.",
    image: "/images/products/almonds.jpg",
  },
  {
    name: "Cashews",
    desc: "Creamy and delicious cashews, perfect for snacking and cooking.",
    image: "/images/products/cashews.jpg",
  },
  {
    name: "Raw Cashew Nuts (RCN)",
    desc: "High-quality raw cashew nuts for processing and export.",
    image: "/images/products/rcn.jpg",
  },
  {
    name: "Pistachios",
    desc: "Nutritious and flavorful pistachios, a delightful and healthy snack.",
    image: "/images/products/pista.jpg",
  },
  {
    name: "Walnuts",
    desc: "Rich and earthy walnuts, packed with omega-3 fatty acids.",
    image: "/images/products/walnuts.jpg",
  },
  {
    name: "Raisins",
    desc: "Sweet and chewy raisins, a versatile and healthy dried fruit.",
    image: "/images/products/raisins.jpg",
  },
];