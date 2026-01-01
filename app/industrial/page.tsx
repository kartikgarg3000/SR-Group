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
      <section className="px-6 py-40 max-w-7xl mx-auto relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <div className="text-center mb-32 relative z-10">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-8">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800 bg-clip-text text-transparent">
              SR Industrial Corp
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Delivering excellence through quality, performance, and reliability across all our products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          {/* Feature 1 */}
          <div className="group relative rounded-3xl p-12 bg-gradient-to-br from-orange-50 via-white to-orange-50/30 border-2 border-orange-100 shadow-xl hover:shadow-2xl hover:border-orange-400 transition-all duration-500 text-center overflow-hidden">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-orange-600 to-orange-700 transition-opacity duration-500"></div>
            
            {/* Animated background orb */}
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-orange-200 rounded-full opacity-0 group-hover:opacity-20 transition-opacity blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-200 group-hover:from-orange-200 group-hover:to-orange-300 transition-all duration-300 shadow-lg mb-6">
                <FaMedal className="text-orange-600 text-4xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-700 transition-colors">
                Uncompromising Quality
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Strict quality controls across waterproofing solutions and agricultural products with international certifications.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="group relative rounded-3xl p-12 bg-gradient-to-br from-green-50 via-white to-green-50/30 border-2 border-green-100 shadow-xl hover:shadow-2xl hover:border-green-400 transition-all duration-500 text-center overflow-hidden">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-green-600 to-green-700 transition-opacity duration-500"></div>
            
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-green-200 rounded-full opacity-0 group-hover:opacity-20 transition-opacity blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-100 to-green-200 group-hover:from-green-200 group-hover:to-green-300 transition-all duration-300 shadow-lg mb-6">
                <FaLeaf className="text-green-600 text-4xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">
                Purity &amp; Performance
              </h3>
              <p className="text-gray-600 leading-relaxed">
                High-performance Sealan solutions and farm-fresh dry fruits sourced from India&apos;s finest regions.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="group relative rounded-3xl p-12 bg-gradient-to-br from-blue-50 via-white to-blue-50/30 border-2 border-blue-100 shadow-xl hover:shadow-2xl hover:border-blue-400 transition-all duration-500 text-center overflow-hidden">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-blue-600 to-blue-700 transition-opacity duration-500"></div>
            
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-blue-200 rounded-full opacity-0 group-hover:opacity-20 transition-opacity blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300 shadow-lg mb-6">
                <FaShippingFast className="text-blue-600 text-4xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
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
      <section className="px-6 py-40 bg-gradient-to-br from-white via-orange-50/30 to-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-32 text-gray-900">
            What Sets Us{' '}
            <span className="bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800 bg-clip-text text-transparent">
              Apart
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Multi-industry presence in waterproofing & agriculture",
              "Authorized distributor of premium waterproofing chemicals",
              "Direct sourcing from India's finest dry fruit regions",
              "Professional grade products for retail and industrial use",
              "Certified quality assurance and compliance standards",
              "Fast and reliable pan-India delivery network",
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group relative flex items-start gap-4 p-8 bg-white rounded-2xl border-2 border-gray-100 hover:border-orange-300 hover:shadow-2xl transition-all duration-500 hover:translate-x-2 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-orange-600 transition-opacity duration-500"></div>
                
                <div className="flex-shrink-0 relative z-10">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 group-hover:bg-orange-200 transition-colors">
                    <FaCheckCircle className="text-orange-600 text-xl" />
                  </div>
                </div>
                <p className="text-lg text-gray-700 font-medium relative z-10">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-orange-900 to-gray-900 py-40 px-6 text-white">
        {/* Advanced Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gray-700 rounded-full blur-3xl opacity-20"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight">
            <span className="block">Let&apos;s Build Something</span>
            <span className="block bg-gradient-to-r from-orange-300 via-orange-200 to-orange-300 bg-clip-text text-transparent">
              Reliable Together
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-white/90 mb-14 max-w-3xl mx-auto leading-relaxed font-light">
            Whether you need waterproofing solutions or premium dry fruits, our team is ready to support your requirements with excellence and reliability.
          </p>

          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center gap-3 px-14 py-6 bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800 text-white rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            {/* Shimmer Effect */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000"></div>
            
            <span className="relative z-10">Contact Our Team</span>
            <FaArrowRight className="relative z-10 text-sm" />
          </Link>
        </div>
      </section>
    </main>
  );
}