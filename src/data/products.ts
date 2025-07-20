export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  sizes: string[];
  color: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Classic Straight Leg Jeans",
    price: 650,
    originalPrice: 792.68,
    image: "/WhatsApp Image 2025-07-14 at 20.47.20_934f543b.jpg",
    category: "Men",
    sizes: ["30", "32", "34", "36", "38", "40", "42", "44"],
    color: "Blue",
    description: "Timeless straight-leg jeans perfect for everyday wear with a comfortable fit and classic styling."
  },
  {
    id: 2,
    name: "Skinny Fit Dark Wash",
    price: 650,
    image: "/WhatsApp Image 2025-07-14 at 21.02.01_884f4848.jpg",
    category: "Women",
    sizes: ["26", "28", "30", "32", "34", "40", "42", "44"],
    color: "Dark Blue",
    description: "Sleek skinny jeans in a rich dark wash that flatters your silhouette with stretch comfort."
  },
  {
    id: 3,
    name: "Vintage Bootcut Jeans",
    price: 650,
    originalPrice: 792.68,
    image: "/WhatsApp Image 2025-07-14 at 21.02.02_17b5163d.jpg",
    category: "Women",
    sizes: ["26", "28", "30", "32", "34", "40", "42", "44"],
    color: "Light Blue",
    description: "Retro-inspired bootcut jeans with a vintage wash and flared hem for a classic 70s vibe."
  },
  {
    id: 4,
    name: "Relaxed Fit Carpenter Jeans",
    price: 650,
    image: "/WhatsApp Image 2025-07-14 at 21.02.02_c0ab4730.jpg",
    category: "Men",
    sizes: ["30", "32", "34", "36", "38", "40", "42", "44"],
    color: "Blue",
    description: "Durable carpenter jeans with tool loops and hammer holder, perfect for work or casual wear."
  },
  {
    id: 5,
    name: "High-Waisted Skinny Jeans",
    price: 650,
    image: "/WhatsApp Image 2025-07-14 at 21.02.02_f56e2e01.jpg",
    category: "Women",
    sizes: ["26", "28", "30", "32", "34", "40", "42", "44"],
    color: "Black",
    description: "Flattering high-waisted skinny jeans that elongate your legs and provide all-day comfort."
  },
  {
    id: 6,
    name: "Wide Leg Palazzo Jeans",
    price: 650,
    originalPrice: 792.68,
    image: "/WhatsApp Image 2025-07-14 at 21.02.03_990f319a.jpg",
    category: "Women",
    sizes: ["26", "28", "30", "32", "34", "40", "42", "44"],
    color: "Light Blue",
    description: "Trendy wide-leg jeans with a palazzo silhouette for a relaxed, bohemian-inspired look."
  },
  {
    id: 7,
    name: "Distressed Slim Fit Jeans",
    price: 650,
    image: "/WhatsApp Image 2025-07-14 at 21.02.03_b94dde90.jpg",
    category: "Men",
    sizes: ["30", "32", "34", "36", "38", "40", "42", "44"],
    color: "Blue",
    description: "Edgy distressed jeans with strategic rips and fading for a modern, lived-in appearance."
  }
];