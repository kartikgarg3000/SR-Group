import Link from "next/link";
import Image from "next/image";
import { industrialProducts } from "@/lib/data";
// Updated icons to better represent both business verticals
import { FaMedal, FaLeaf, FaShippingFast } from "react-icons/fa";

export default function IndustrialPage() {
  return (
    <main className="bg-white text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-800 to-gray-900 py-32 px-6">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('/images/industrial-pattern.svg')" }}></div>
        <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 animate-fade-in-up">SR Industrial Corp</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 animate-fade-in">
            Where industrial innovation meets natural quality. We specialize in providing both high-performance Sealan block chemicals and the finest selection of premium dry fruits.
          </p>
          <Link
            href="https://wa.me/91XXXXXXXXXX" // Remember to replace with your actual WhatsApp number
            target="_blank"
            className="inline-block px-8 py-4 bg-orange-500 text-white rounded-full font-bold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg"
          >
            Request a Quote
          </Link>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="px-6 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Changed Title for broader scope */}
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Product Range</h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {industrialProducts.map((product, i) => (
              <div
                key={i}
                className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Rewritten for dual business */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Commitment to Excellence</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <FaMedal className="text-5xl text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">Uncompromising Quality</h3>
            <p className="text-gray-600">From industrial chemicals to premium dry fruits, we adhere to the strictest quality standards.</p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <FaLeaf className="text-5xl text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">Purity & Performance</h3>
            <p className="text-gray-600">Sourcing the finest natural products and formulating high-performance chemical solutions.</p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <FaShippingFast className="text-5xl text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">Reliable Supply Chain</h3>
            <p className="text-gray-600">Efficient logistics ensure you get the products you need, right when you need them.</p>
          </div>
        </div>
      </section>

      {/* Final CTA - Rewritten for broader audience */}
      <section className="bg-gray-800 py-16 px-6 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Interested in Our Products?</h2>
        <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
          Get in touch with us to discuss your specific needs, whether for industrial chemicals or premium dry fruits.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-orange-500 text-white px-10 py-4 rounded-full font-bold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Get In Touch
        </Link>
      </section>
    </main>
  );
}