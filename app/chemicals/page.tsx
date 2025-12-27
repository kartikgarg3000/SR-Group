import Link from "next/link";
import { sanityClient } from "@/lib/sanity";
import {
  FaIndustry,
  FaShippingFast,
  FaShieldAlt,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { SanityImage } from "@/types/sanity";
import ClientSection from "@/components/ChemicalsClientSection";

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
    <main className="bg-white text-gray-800 min-h-screen overflow-x-hidden">
      {/* Hero and Products with Client-side Animations */}
      <ClientSection groupedProducts={groupedProducts} />

      {/* ================= FEATURES ================= */}
      <section className="relative px-6 py-32 max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900">
            The SR Trade Vision Advantage
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built on decades of industry trust, technical expertise, and dependable supply chains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="group relative rounded-3xl p-12 bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 shadow-lg hover:shadow-2xl hover:border-blue-300 transition-all duration-300 text-center overflow-hidden">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-blue-600 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors mb-6">
                <FaIndustry className="text-blue-700 text-4xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Comprehensive Portfolio
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Industrial chemicals, oils, and solutions across multiple sectors with proven performance.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="group relative rounded-3xl p-12 bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-100 shadow-lg hover:shadow-2xl hover:border-emerald-300 transition-all duration-300 text-center overflow-hidden">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-emerald-600 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 group-hover:bg-emerald-200 transition-colors mb-6">
                <FaShieldAlt className="text-emerald-700 text-4xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Quality &amp; Compliance
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Strict quality control aligned with national and international standards and certifications.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="group relative rounded-3xl p-12 bg-gradient-to-br from-orange-50 to-white border-2 border-orange-100 shadow-lg hover:shadow-2xl hover:border-orange-300 transition-all duration-300 text-center overflow-hidden">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-orange-600 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 group-hover:bg-orange-200 transition-colors mb-6">
                <FaShippingFast className="text-orange-700 text-4xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Pan-India Distribution
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Reliable logistics ensuring timely deliveries across India with efficient supply chains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HIGHLIGHTS ================= */}
      <section className="px-6 py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            Why Choose SR Trade Vision?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "40+ years of industry expertise and proven track record",
              "ISO-certified manufacturing and quality processes",
              "Competitive pricing with volume discounts",
              "Dedicated technical support and consultation",
              "Eco-friendly and sustainable product lines",
              "Customized solutions for specific industrial needs",
            ].map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all hover:translate-x-2"
              >
                <div className="flex-shrink-0">
                  <FaCheckCircle className="text-blue-600 text-2xl mt-1" />
                </div>
                <p className="text-lg text-gray-700 font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-950 to-blue-900 py-32 px-6 text-white">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8">
            Partner with an Industry Leader
          </h2>

          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Connect with us for pricing, technical specifications, and bulk supply discussions. Our team is ready to support your industrial needs.
          </p>

          <Link
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            className="inline-flex items-center justify-center gap-3 bg-white text-blue-900 px-12 py-5 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-2xl hover:shadow-3xl hover:scale-105"
          >
            Speak With an Expert
            <FaArrowRight className="text-sm" />
          </Link>
        </div>
      </section>
    </main>
  );
}