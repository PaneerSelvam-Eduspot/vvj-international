export type MangoVariety = {
  slug: string;
  name: string;
  origin: string;
  season: string;
  taste: string;
  description: string;
  exportSpec: string;
  packaging: string;
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  href: string;
  tagline: string;
  description: string;
  highlights: string[];
  image: string;
  varieties?: MangoVariety[];
};

export const mangoVarieties: MangoVariety[] = [
  {
    slug: "alphonso",
    name: "Alphonso (Hapus)",
    origin: "Ratnagiri & Devgad, Maharashtra",
    season: "March - May",
    taste: "Rich, creamy, fiberless with intense sweetness",
    description:
      "The king of mangoes. Alphonso is India's most prized export variety - GI tagged, globally recognized, and unmatched in aroma and sweetness.",
    exportSpec: "Premium A-grade, 200-350g per fruit, uniform golden-yellow skin",
    packaging: "2kg & 4kg wooden crates with individual foam net wrapping",
  },
  {
    slug: "kesar",
    name: "Kesar",
    origin: "Gir, Saurashtra, Gujarat",
    season: "May - July",
    taste: "Sweet, mild, saffron-like aroma",
    description:
      "The Queen of Saurashtra. GI-tagged Kesar mangoes are celebrated for their deep orange pulp, low fiber, and distinctive saffron fragrance.",
    exportSpec: "Grade A, 200-300g per fruit, firm skin ideal for long-haul freight",
    packaging: "4kg corrugated boxes with ventilation slots",
  },
  {
    slug: "banganapalli",
    name: "Banganapalli (Safeda)",
    origin: "Kurnool, Andhra Pradesh",
    season: "April - June",
    taste: "Mildly sweet, smooth, fiberless flesh",
    description:
      "One of India's largest commercial mango varieties. Banganapalli is prized across Middle East and Southeast Asia for its size, shelf life and clean taste.",
    exportSpec: "350-500g per fruit, bright yellow skin, excellent shelf life",
    packaging: "5kg & 10kg cartons, single-layer tray packing",
  },
  {
    slug: "totapuri",
    name: "Totapuri",
    origin: "Karnataka, Andhra Pradesh, Tamil Nadu",
    season: "May - July",
    taste: "Mildly sweet, slightly tangy, firm flesh",
    description:
      "The most widely grown processing variety in India. Totapuri is the backbone of India's mango pulp export - used in juices, nectars and concentrates globally.",
    exportSpec: "300-450g, elongated parrot-beak shape, firm skin for transit",
    packaging: "Bulk bins (200kg) for processing, 10kg cartons for fresh export",
  },
  {
    slug: "dasheri",
    name: "Dasheri",
    origin: "Malihabad, Uttar Pradesh",
    season: "June - July",
    taste: "Extremely sweet, aromatic, minimal fiber",
    description:
      "North India's most beloved mango - over 500 years of cultivation history. Dasheri's exceptional sweetness and fragrance commands premium pricing in Gulf markets.",
    exportSpec: "150-200g per fruit, slender shape, thin skin, deep yellow pulp",
    packaging: "3kg & 5kg gift cartons for premium retail export",
  },
];

export const products: Product[] = [
  {
    slug: "onion",
    name: "Red Onion",
    category: "Vegetables",
    categorySlug: "vegetables",
    href: "/products/vegetables/onion",
    tagline: "India's Most Exported Vegetable",
    image: "/images/onion.jpg",
    description:
      "Premium grade Indian red onions sourced from Nashik, Pune and Solapur - India's export heartland. Available in calibrated sizes, graded and packed to international standards.",
    highlights: [
      "Sourced from Nashik & Solapur growing belts",
      "Red, white and pink varieties available",
      "20mm-70mm size grading",
      "Packed in mesh, jute, or carton as per buyer spec",
      "APEDA certified export quality",
      "Minimum order: 1 FCL (20MT)",
    ],
  },
  {
    slug: "peanut",
    name: "Peanut",
    category: "Nuts",
    categorySlug: "nuts",
    href: "/products/nuts/peanut",
    tagline: "Bold, Clean, Aflatoxin-Tested",
    image: "/images/peanut-20260519.jpg",
    description:
      "Java-type groundnuts with high oil content, machine-cleaned and tested for aflatoxin compliance. Available in multiple processing forms - in-shell, shelled, blanched, splits and roasted.",
    highlights: [
      "Java & Bold type varieties",
      "Aflatoxin tested - EU/US compliant",
      "In-shell, shelled, blanched, splits available",
      "50kg PP/jute bags or 25kg vacuum packs",
      "Oil content 48-52%",
      "Moisture below 8%",
    ],
  },
  {
    slug: "peanut-candy",
    name: "Chikki",
    category: "Confectionery",
    categorySlug: "confectionery",
    href: "/products/confectionery/peanut-candy",
    tagline: "Specialist Traditional Peanut Candy, Ready for Global Retail",
    image: "/images/peanut-candy.jpg",
    description:
      "Authentic Indian peanut brittle crafted with natural jaggery, backed by VVJ's core expertise in traditional peanut candy. Long shelf life, consistent quality, and available in bulk or retail-ready packaging for direct import and domestic supply.",
    highlights: [
      "Made with natural jaggery - no refined sugar",
      "6-month shelf life",
      "Bulk (5kg/10kg) and retail pack (100g/200g) options",
      "FSSAI licensed production unit",
      "Private label / custom branding available",
      "Domestic shipping support available",
      "MOQ: 500kg",
    ],
  },
  {
    slug: "mango",
    name: "Mango",
    category: "Fruits",
    categorySlug: "fruits",
    href: "/products/fruits/mango",
    tagline: "India's Crown Export - 5 Premium Varieties",
    image: "/images/mango.jpg",
    description:
      "Hand-picked at peak ripeness from India's finest growing regions. VVJ exports five premium mango varieties covering the full season from March to July - each with distinct flavour profiles, origins and export specifications.",
    highlights: [
      "5 varieties: Alphonso, Kesar, Banganapalli, Totapuri, Dasheri",
      "Full season coverage: March - July",
      "APEDA certified, phytosanitary compliant",
      "Air freight and sea freight options",
      "GI-tagged varieties available",
      "Custom packaging for retail export",
    ],
    varieties: mangoVarieties,
  },
];

const productCategoryOrder = ["vegetables", "fruits", "confectionery", "nuts"];

export const productsByCategory: Product[] = [...products].sort(
  (a, b) => productCategoryOrder.indexOf(a.categorySlug) - productCategoryOrder.indexOf(b.categorySlug)
);

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getVarietyBySlug(slug: string): MangoVariety | undefined {
  return mangoVarieties.find((v) => v.slug === slug);
}
