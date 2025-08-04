import Link from "next/link";
import Image from "next/image";
import { industrialProducts } from "@/lib/data"; // Using data from our central file
import { FaCogs, FaShippingFast, FaTools } from "react-icons/fa";

export default function IndustrialPage() {
  return (
    <main className="bg-white text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-800 to-gray-900 py-32 px-6">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('/images/industrial-pattern.svg')" }}></div>
        <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 animate-fade-in-up">SR Industrial Corp</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 animate-fade-in">
            Engineering robust and reliable solutions for modern industry. We supply precision parts and systems that power your progress.
          </p>
          <Link
            href="https://wa.me/91XXXXXXXXXX" // Add your WhatsApp number
            target="_blank"
            className="inline-block px-8 py-4 bg-brand-orange text-white rounded-full font-bold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg"
          >
            Request a Quote
          </Link>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="px-6 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Industrial Products</h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {industrialProducts.map((product, i) => (
              <div
                key={i}
                className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image} alt={product.name} fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.desc}</p>
                  <div className="mt-4 border-t pt-4">
                    <h4 className="font-semibold text-gray-700">Key Specs:</h4>
                    <ul className="text-sm text-gray-600 space-y-1 mt-2">
                      {product.specifications.map((spec, index) => (
                        <li key={index} className="flex items-center">
                          <span className="text-brand-orange mr-2">◆</span>{spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">The SR Industrial Advantage</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <FaCogs className="text-5xl text-brand-orange mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">Precision Engineering</h3>
            <p className="text-gray-600">Products manufactured to the highest tolerance for maximum performance.</p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <FaTools className="text-5xl text-brand-orange mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">Durable Materials</h3>
            <p className="text-gray-600">We use robust, high-grade materials to ensure longevity and reliability.</p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <FaShippingFast className="text-5xl text-brand-orange mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">Reliable Supply Chain</h3>
            <p className="text-gray-600">Efficient logistics ensure you get the parts you need, when you need them.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gray-800 py-16 px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Power Your Operations with SR Corp</h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Contact our engineering team today to discuss your specific industrial requirements.
          </p>
          <Link href="/contact" className="inline-block bg-brand-orange text-white px-10 py-4 rounded-full font-bold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Speak to an Expert
          </Link>
      </section>
    </main>
  );
}