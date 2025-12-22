import Link from "next/link";
import Image from "next/image";
import { sanityClient } from "@/lib/sanity";
import { urlFor } from "@/lib/sanityImage";
import { SanityImage } from "@/types/sanity";
import { FaMedal, FaLeaf, FaShippingFast } from "react-icons/fa";

/* =========================
   GROQ QUERY
========================= */
const productsQuery = `
  *[_type == "product" && business->slug.current == "sr-industrial-corp"] | order(_createdAt desc){
    _id,
    name,
    description,
    image
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
};

export default async function IndustrialPage() {
  const products: Product[] = await sanityClient.fetch(productsQuery);

  return (
    <main className="bg-white text-gray-800 min-h-screen overflow-x-hidden">
      {/* ================= HERO ================= */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-36 px-6">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "url('/images/industrial-pattern.svg')" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
          <span className="inline-block mb-6 px-4 py-1 rounded-full bg-orange-500/10 text-orange-400 text-sm font-semibold tracking-wide">
            Industrial & Agricultural Division
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight">
            SR Industrial Corp
          </h1>

          <p className="text-xl md:text-2xl text-white/85 max-w-4xl mx-auto mb-12">
            Delivering <span className="text-orange-400 font-semibold">high-performance construction solutions</span>  
            and <span className="text-orange-400 font-semibold">premium agricultural produce</span> with
            uncompromising standards.
          </p>

          <Link
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            className="inline-flex items-center gap-2 px-12 py-4 bg-orange-500 text-white rounded-full font-bold text-lg hover:bg-orange-600 transition-all transform hover:scale-105 shadow-xl"
          >
            Request a Quote →
          </Link>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section id="products" className="px-6 py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Product Portfolio
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Each product is carefully selected to meet industry demands,
              performance benchmarks, and quality expectations.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product._id}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={urlFor(product.image).width(600).height(400).url()}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition" />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* <span className="inline-block text-sm font-semibold text-orange-500 group-hover:translate-x-1 transition-transform">
                    Enquire Now →
                  </span> */}
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {products.length === 0 && (
            <p className="text-center text-gray-500 mt-20 text-lg">
              Products will be added shortly. Please check back soon.
            </p>
          )}
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="px-6 py-28 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
          Why Choose SR Industrial Corp
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition">
            <FaMedal className="text-6xl text-orange-500 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">
              Uncompromising Quality
            </h3>
            <p className="text-gray-600 text-lg">
              Strict quality controls across construction chemicals and
              agricultural products.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition">
            <FaLeaf className="text-6xl text-orange-500 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">
              Purity & Performance
            </h3>
            <p className="text-gray-600 text-lg">
              High-performance Sealan solutions and farm-fresh dry fruits.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition">
            <FaShippingFast className="text-6xl text-orange-500 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">
              Reliable Supply Chain
            </h3>
            <p className="text-gray-600 text-lg">
              Timely delivery powered by a strong national logistics network.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-24 px-6 text-center text-white">
        <h2 className="text-4xl font-bold mb-6">
          Let’s Build Something Reliable Together
        </h2>
        <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto">
          Whether you need construction materials or premium dry fruits,
          our team is ready to support your requirements.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-orange-500 text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-all transform hover:scale-105 shadow-xl"
        >
          Contact Our Team →
        </Link>
      </section>
    </main>
  );
}
