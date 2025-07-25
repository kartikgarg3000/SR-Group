import Link from "next/link";
import Image from "next/image";

export default function ChemicalsPage() {
  const products = [
    {
      name: "Citric Acid",
      desc: "Food-grade & industrial use",
      image: "/images/products/citric-acid.jpg",
      specifications: [
        "Appearance: White crystalline powder",
        "Purity: ≥99.5%",
        "Mesh size: 30-100",
        "Packaging: 25kg HDPE bags"
      ]
    },
    {
      name: "Caustic Soda",
      desc: "Available in flakes and pearls",
      image: "/images/products/caustic-soda.jpg",
      specifications: [
        "Appearance: White flakes/pearls",
        "NaOH Content: ≥98%",
        "Chloride (NaCl): ≤0.15%",
        "Packaging: 25kg bags"
      ]
    },
    {
      name: "Acetic Acid",
      desc: "Diluted and glacial variants",
      image: "/images/products/acetic-acid.jpg",
      specifications: [
        "Concentration: 99.8% min",
        "Color: Clear liquid",
        "Freezing point: 16.5°C",
        "Packaging: 35kg carboys"
      ]
    },
    {
      name: "Sodium Benzoate",
      desc: "Preservative for food & pharma",
      image: "/images/products/sodium-benzoate.jpg",
      specifications: [
        "Purity: ≥99.0%",
        "Appearance: White powder",
        "pH (5% solution): 6.5-8.0",
        "Packaging: 25kg bags"
      ]
    },
    {
      name: "Hydrogen Peroxide",
      desc: "Used in sanitation & textiles",
      image: "/images/products/hydrogen-peroxide.jpg",
      specifications: [
        "Concentration: 50%",
        "Appearance: Clear liquid",
        "Stabilized grade",
        "Packaging: 30kg carboys"
      ]
    },
    {
      name: "Sodium Hypochlorite",
      desc: "Disinfectant & bleaching agent",
      image: "/images/products/sodium-hypochlorite.jpg",
      specifications: [
        "Available Chlorine: 10-12%",
        "Appearance: Clear yellow-green liquid",
        "pH: 11.5-13",
        "Packaging: 30kg carboys"
      ]
    }
  ];

  return (
    <main className="bg-white text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 py-24 px-6">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in-up">Your Trusted Chemical Partner</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 animate-fade-in">
            Delivering quality-assured industrial and food-grade chemicals across India, ensuring purity, safety, and timely delivery.
          </p>
          <Link
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            className="inline-block px-8 py-4 bg-white text-blue-700 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
          >
            Contact Us on WhatsApp
          </Link>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Who We Serve</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          At SR Group, we supply essential chemicals for industries including pharmaceuticals, food processing, agriculture, water treatment,
          and cleaning solutions. Our commitment to quality, packaging, and customer satisfaction drives long-term partnerships.
        </p>
      </section>

      {/* Products Grid */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Key Chemicals</h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, i) => (
              <div
                key={i}
                className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
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
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-700 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.desc}</p>
                  <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-700">Specifications:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {product.specifications.map((spec, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2">•</span>
                          {spec}
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

      {/* Features */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose SR Group?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-blue-600 mb-4 text-4xl">✅</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">High Purity</h3>
            <p className="text-gray-600">
              All chemicals are lab-tested for composition and safety compliance.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-blue-600 mb-4 text-4xl">🚚</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Pan-India Delivery</h3>
            <p className="text-gray-600">
              We serve manufacturers, traders, and institutions across India.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-blue-600 mb-4 text-4xl">📦</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Custom Packaging</h3>
            <p className="text-gray-600">
              Bulk or retail-ready packs—tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 py-16 px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Looking for a Chemical Supplier You Can Count On?</h2>
          <p className="text-xl text-white/90 mb-8">
            Reach out now for pricing, samples, or technical specifications.
          </p>
          <Link
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            className="inline-block bg-white text-blue-800 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
          >
            Chat with Us
          </Link>
        </div>
      </section>
    </main>
  );
}