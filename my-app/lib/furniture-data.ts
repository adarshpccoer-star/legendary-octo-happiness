export interface FurnitureItem {
  id: string;
  name: string;
  category: "chairs" | "tables" | "sofas" | "beds";
  type: "modern" | "minimal" | "luxury" | "wooden";
  price: number;
  image: string;
  description: string;
}

export const furnitureItems: FurnitureItem[] = [
  {
    id: "nordic-lounge-chair",
    name: "Nordic Lounge Chair",
    category: "chairs",
    type: "minimal",
    price: 329,
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=80",
    description: "A curved lounge chair with plush upholstery for relaxed reading corners.",
  },
  {
    id: "oslo-dining-chair",
    name: "Oslo Dining Chair",
    category: "chairs",
    type: "wooden",
    price: 219,
    image: "https://images.unsplash.com/photo-1549497538-303791108f95?auto=format&fit=crop&w=1200&q=80",
    description: "Solid oak dining chair with supportive backrest and natural matte finish.",
  },
  {
    id: "terra-coffee-table",
    name: "Terra Coffee Table",
    category: "tables",
    type: "modern",
    price: 459,
    image: "https://images.unsplash.com/photo-1538688423619-a81d3f23454b?auto=format&fit=crop&w=1200&q=80",
    description: "Low-profile coffee table with rounded edges and a premium stone-look top.",
  },
  {
    id: "walnut-dining-table",
    name: "Walnut Dining Table",
    category: "tables",
    type: "luxury",
    price: 899,
    image: "https://images.unsplash.com/photo-1617104551722-3b2d513664c7?auto=format&fit=crop&w=1200&q=80",
    description: "Six-seater walnut dining table designed for warm family gatherings.",
  },
  {
    id: "cloud-modular-sofa",
    name: "Cloud Modular Sofa",
    category: "sofas",
    type: "modern",
    price: 1249,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
    description: "Deep-seat modular sofa with soft lines that adapts to your living room layout.",
  },
  {
    id: "ava-two-seater",
    name: "Ava Two Seater",
    category: "sofas",
    type: "minimal",
    price: 759,
    image: "https://images.unsplash.com/photo-1617098474202-0d0d7f60f57b?auto=format&fit=crop&w=1200&q=80",
    description: "Compact two-seater sofa with refined silhouette for apartments and studios.",
  },
  {
    id: "haven-queen-bed",
    name: "Haven Queen Bed",
    category: "beds",
    type: "wooden",
    price: 1099,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    description: "Queen-size platform bed with handcrafted wood frame and padded headboard.",
  },
  {
    id: "luna-upholstered-bed",
    name: "Luna Upholstered Bed",
    category: "beds",
    type: "luxury",
    price: 1349,
    image: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=80",
    description: "Premium upholstered bed featuring a channel-tufted headboard and soft texture.",
  },
];
