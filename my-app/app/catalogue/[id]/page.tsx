import Link from "next/link";
import { notFound } from "next/navigation";
import { furnitureItems } from "@/lib/furniture-data";

interface ProductDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params;
  const item = furnitureItems.find((product) => product.id === id);

  if (!item) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f4f1ec] px-6 pb-16 pt-28 md:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/catalogue"
          className="mb-6 inline-flex rounded-full border border-black/20 px-4 py-2 text-xs uppercase tracking-[0.16em] text-black/70 transition hover:border-black hover:text-black"
        >
          Back To Catalogue
        </Link>

        <div className="grid gap-8 rounded-3xl border border-black/10 bg-white/75 p-5 md:grid-cols-2 md:p-8">
          <div className="overflow-hidden rounded-2xl">
            <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.2em] text-black/45">
              {item.category} / {item.type}
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-black md:text-5xl">{item.name}</h1>
            <p className="mt-5 text-sm leading-relaxed text-black/65">{item.description}</p>
            <p className="mt-6 text-2xl font-semibold text-black">${item.price}</p>

            <button className="mt-8 w-fit rounded-full border border-black bg-black px-6 py-3 text-sm uppercase tracking-[0.14em] text-white transition hover:bg-transparent hover:text-black">
              Add To Inquiry
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
