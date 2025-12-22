import Link from "next/link";
import Image from "next/image";
import { sanityClient } from "@/lib/sanity";
import { urlFor } from "@/lib/sanityImage";
import {
  FaIndustry,
  FaShippingFast,
  FaShieldAlt,
} from "react-icons/fa";
import { SanityImage } from "@/types/sanity";

/* =========================
   GROQ QUERY
========================= */
const productsQuery = `
  *[_type == "product" && business->slug.current == "sr-trade-vision"]{
    _id,
    name,
    description,
    image,
    category
  }
`;

/* =========================
   TYPES
========================= */
type Product = {
  _id: string;
  name: string;
  description: string;
  image: SanityImage;
  category: string;
};

export default async function ChemicalsPage() {
  const products: Product[] = await sanityClient.fetch(productsQuery);

  /* =========================
     GROUP BY CATEGORY
  ========================= */
  const groupedProducts = products.reduce<Record<string, Product[]>>(
    (acc, product) => {
      const category = product.category || "Other Industries";
      if (!acc[category]) acc[category] = [];
      acc[category].push(product);
      return acc;
    },
    {}
  );

  return (
    <main className="bg-white text-gray-800 min-h-screen">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-teal-800 py-28 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_60%)]" />
        <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
          <span className="inline-block mb-5 px-4 py-1 text-sm tracking-wide rounded-full bg-white/10 border border-white/20">
            Industrial Chemicals Division
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            SR Trade Vision
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10">
            Engineering reliable, high-performance chemical solutions for India’s
            core industries.
          </p>
          <Link
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            className="inline-flex items-center justify-center px-9 py-4 bg-white text-blue-900 rounded-full font-semibold hover:bg-blue-50 transition-all shadow-xl hover:scale-105"
          >
            Inquire on WhatsApp
          </Link>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section id="products" className="px-6 py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-5">
              Chemicals by Industry
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Purpose-built chemical solutions tailored to meet the demands of
              diverse industrial sectors.
            </p>
          </div>

          <div className="space-y-28">
            {Object.entries(groupedProducts).map(([category, items]) => (
              <section key={category}>
                {/* Category Header */}
                <div className="mb-14">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {category}
                  </h3>
                  <div className="mt-3 h-1 w-20 bg-blue-700 rounded-full" />
                  <p className="mt-6 text-gray-600 max-w-2xl">
                    High-quality chemical formulations engineered specifically
                    for {category.toLowerCase()} applications.
                  </p>
                </div>

                {/* Products Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {items.map((product) => (
                    <article
                      key={product._id}
                      className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-2xl flex flex-col"
                    >
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          src={urlFor(product.image)
                            .width(600)
                            .height(400)
                            .url()}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                      </div>

                      <div className="p-6 flex flex-col flex-grow">
                        <h4 className="text-lg font-bold text-blue-900 mb-2">
                          {product.name}
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                          {product.description}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="px-6 py-28 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">
            The SR Trade Vision Advantage
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Built on decades of industry trust, technical expertise, and
            dependable supply.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="rounded-2xl p-10 bg-white shadow-lg hover:shadow-2xl transition">
            <FaIndustry className="text-blue-700 mx-auto mb-6 text-5xl" />
            <h3 className="text-xl font-bold mb-4">
              Comprehensive Portfolio
            </h3>
            <p className="text-gray-600">
              Industrial chemicals, oils, and solutions across multiple sectors.
            </p>
          </div>

          <div className="rounded-2xl p-10 bg-white shadow-lg hover:shadow-2xl transition">
            <FaShieldAlt className="text-blue-700 mx-auto mb-6 text-5xl" />
            <h3 className="text-xl font-bold mb-4">
              Quality & Compliance
            </h3>
            <p className="text-gray-600">
              Strict quality control aligned with national and international
              standards.
            </p>
          </div>

          <div className="rounded-2xl p-10 bg-white shadow-lg hover:shadow-2xl transition">
            <FaShippingFast className="text-blue-700 mx-auto mb-6 text-5xl" />
            <h3 className="text-xl font-bold mb-4">
              Pan-India Distribution
            </h3>
            <p className="text-gray-600">
              Reliable logistics ensuring timely deliveries across India.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-blue-950 py-24 px-6 text-white text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(255,255,255,0.12),_transparent_65%)]" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Partner with an Industry Leader
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Connect with us for pricing, technical specifications, and bulk
            supply discussions.
          </p>
          <Link
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            className="inline-flex items-center justify-center bg-white text-blue-900 px-10 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all shadow-xl hover:scale-105"
          >
            Speak With an Expert
          </Link>
        </div>
      </section>
    </main>
  );
}
