import Link from "next/link";
import Image from "next/image";
import { FaIndustry, FaShippingFast, FaShieldAlt } from "react-icons/fa";

// Import your categorized data structure from the central data file
import { industryCategories } from "@/lib/data";

export default function ChemicalsPage() {
  return (
    <main className="bg-white text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-teal-700 py-24 px-6">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in-up">SR Trade Vision</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 animate-fade-in">
            Sustainable and innovative industrial solutions trusted by leading industries and partners.
          </p>
          <Link
            href="https://wa.me/91XXXXXXXXXX" // Remember to add your WhatsApp number
            target="_blank"
            className="inline-block px-8 py-4 bg-white text-blue-700 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
          >
            Inquire on WhatsApp
          </Link>
        </div>
      </section>

      {/* Categorized Products Section */}
      <section id="products" className="px-6 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Chemicals by Industry</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              We provide specialized chemical solutions tailored to the unique needs of different industrial sectors.
            </p>
          </div>
          
          {/* Main loop for each industry category */}
          <div className="space-y-16">
            {industryCategories.map((category) => (
              <div key={category.categoryName}>
                {/* Category Header */}
                <div className="mb-8 md:flex md:items-center md:justify-between">
                    <h3 className="text-3xl font-bold text-gray-800">{category.categoryName}</h3>
                    <p className="text-gray-500 mt-2 md:mt-0 max-w-md">{category.categoryDesc}</p>
                </div>
                
                {/* Nested grid for products within the category */}
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {category.products.map((product) => (
                    <div
                      key={product.name}
                      className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col"
                    >
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <div className="p-6 flex-grow">
                        <h4 className="text-lg font-bold text-blue-800 mb-2">{product.name}</h4>
                        <p className="text-gray-600 text-sm">{product.desc}</p>
                        {/* The specifications block has been removed from here */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">The SR Trade Vision Advantage</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <FaIndustry className="text-blue-600 mx-auto mb-4 text-4xl" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">Comprehensive Solutions</h3>
            <p className="text-gray-600">
              One-stop source for industrial chemicals, oils, and essential machinery.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <FaShieldAlt className="text-blue-600 mx-auto mb-4 text-4xl" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">Assured Quality</h3>
            <p className="text-gray-600">
              All products are rigorously tested to meet stringent industry standards for safety and purity.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <FaShippingFast className="text-blue-600 mx-auto mb-4 text-4xl" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">Reliable Distribution</h3>
            <p className="text-gray-600">
              A robust supply chain ensures timely and dependable delivery across India.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 py-16 px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Partner with an Industry Leader</h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today for competitive pricing, technical data sheets, or to discuss your unique industrial needs.
          </p>
          <Link
            href="https://wa.me/91XXXXXXXXXX" // Remember to add your WhatsApp number
            target="_blank"
            className="inline-block bg-white text-blue-800 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
          >
            Speak With an Expert
          </Link>
        </div>
      </section>
    </main>
  );
}