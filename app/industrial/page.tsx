import Link from "next/link";
import { sanityClient } from "@/lib/sanity";
import { SanityImage } from "@/types/sanity";
import {
  FaMedal,
  FaLeaf,
  FaShippingFast,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import IndustrialClientSection from "@/components/IndustrialClientSection";

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
      {/* Hero and Products with Client-side Animations */}
      <IndustrialClientSection products={products} />

      {/* ================= WHY CHOOSE US ================= */}
      <section className="px-6 py-32 max-w-7xl mx-auto">
        <div className="text-center mb-28">
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Why Choose SR Industrial Corp
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering excellence through quality, performance, and reliability across all our products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Feature 1 */}
          <div className="group relative rounded-3xl p-12 bg-gradient-to-br from-orange-50 to-white border-2 border-orange-100 shadow-lg hover:shadow-2xl hover:border-orange-300 transition-all duration-300 text-center overflow-hidden">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-orange-600 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 group-hover:bg-orange-200 transition-colors mb-6">
                <FaMedal className="text-orange-600 text-4xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Uncompromising Quality
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Strict quality controls across construction chemicals and agricultural products with international certifications.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="group relative rounded-3xl p-12 bg-gradient-to-br from-green-50 to-white border-2 border-green-100 shadow-lg hover:shadow-2xl hover:border-green-300 transition-all duration-300 text-center overflow-hidden">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-green-600 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 group-hover:bg-green-200 transition-colors mb-6">
                <FaLeaf className="text-green-600 text-4xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Purity &amp; Performance
              </h3>
              <p className="text-gray-600 leading-relaxed">
                High-performance Sealan solutions and farm-fresh dry fruits sourced from India&apos;s finest regions.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="group relative rounded-3xl p-12 bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 shadow-lg hover:shadow-2xl hover:border-blue-300 transition-all duration-300 text-center overflow-hidden">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-blue-600 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors mb-6">
                <FaShippingFast className="text-blue-600 text-4xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Reliable Supply Chain
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Timely delivery powered by a strong national logistics network with efficient distribution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HIGHLIGHTS ================= */}
      <section className="px-6 py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            What Sets Us Apart
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Multi-industry presence in construction & agriculture",
              "Authorized distributor of premium construction chemicals",
              "Direct sourcing from India&apos;s finest dry fruit regions",
              "Professional grade products for retail and industrial use",
              "Certified quality assurance and compliance standards",
              "Fast and reliable pan-India delivery network",
            ].map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all hover:translate-x-2"
              >
                <div className="flex-shrink-0">
                  <FaCheckCircle className="text-orange-600 text-2xl mt-1" />
                </div>
                <p className="text-lg text-gray-700 font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-32 px-6 text-white">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8">
            Let&apos;s Build Something Reliable Together
          </h2>

          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you need construction materials or premium dry fruits, our team is ready to support your requirements with excellence.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 bg-orange-500 text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-orange-600 transition-all shadow-2xl hover:shadow-3xl hover:scale-105"
          >
            Contact Our Team
            <FaArrowRight className="text-sm" />
          </Link>
        </div>
      </section>
    </main>
  );
}