// Static site configuration only

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  {
    label: 'Our Businesses',
    subLinks: [
      { label: 'SR Trade Vision', href: '/chemicals' },
      { label: 'SR Industrial Corp', href: '/industrial' },
    ],
  },
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

export const siteStats = [
  { label: "Years In Business", value: 40, suffix: "+" },
  { label: "Product Range", value: 50, suffix: "+" },
  { label: "Business Verticals", value: 2, suffix: "" },
];
