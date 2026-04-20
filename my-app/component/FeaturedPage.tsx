import React from "react";

interface FeaturedProduct {
  id: string;
  name: string;
  type: string;
  price: string;
  image: string;
}

const featuredProducts: FeaturedProduct[] = [
  {
    id: "01",
    name: "Nordic Cloud Sofa",
    type: "Living Room",
    price: "$1,249",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "02",
    name: "Oakline Dining Set",
    type: "Dining",
    price: "$899",
    image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "03",
    name: "Luma Accent Chair",
    type: "Seating",
    price: "$459",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "04",
    name: "Minimalist Work Desk",
    type: "Office",
    price: "$629",
    image: "https://images.unsplash.com/photo-1582582429416-4f45d4f7c7f4?auto=format&fit=crop&w=1200&q=80",
  },
];

function FeaturedPage() {
  return (
    <section className="min-h-screen w-full bg-[#f4f1ec] px-6 py-12 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 border-b border-black/10 pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-black/50">Signature Selection</p>
            <h1 className="text-4xl font-semibold tracking-tight text-black sm:text-6xl lg:text-7xl">Featured Products</h1>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-black/60">
            Handpicked furniture made for modern homes. Explore timeless pieces that balance comfort, elegance,
            and durability.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <article
              key={product.id}
              className="group overflow-hidden rounded-2xl border border-black/10 bg-white/60 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="mb-2 text-xs uppercase tracking-[0.2em] text-black/45">{product.type}</p>
                <h2 className="text-xl font-medium tracking-tight text-black">{product.name}</h2>
                <div className="mt-4 flex items-center justify-between border-t border-black/10 pt-4">
                  <span className="text-sm text-black/50">SKU {product.id}</span>
                  <span className="text-base font-semibold text-black">{product.price}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedPage;
