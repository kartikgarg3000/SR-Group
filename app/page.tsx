export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-xl">
            Welcome to <span className="text-yellow-400">SR Group</span>
          </h1>
          <p className="text-lg md:text-2xl mb-8 text-white/80 font-light">
            Empowering industries with reliable <br className="hidden md:block" />
            <span className="text-yellow-300 font-medium">chemicals</span> and nourishing families with
            <span className="text-yellow-300 font-medium"> premium dry fruits</span>.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#about"
              className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300 shadow-lg"
            >
              Learn More
            </a>
            <a
              href="#contact"
              className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Business Units */}
      <section className="py-24 px-4 max-w-7xl mx-auto" id="about">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Business Units</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We operate across key sectors, delivering high-quality, trusted products through our specialized verticals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* SR Chemicals */}
          <div className="group rounded-xl overflow-hidden shadow-xl transition-transform hover:-translate-y-2 bg-white">
            <div className="overflow-hidden">
              <img
                src="/images/chemicals.jpg"
                alt="SR Chemicals"
                className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 bg-gray-900 text-white space-y-3">
              <h3 className="text-2xl font-semibold">SR Chemicals</h3>
              <p className="text-white/80">
                Sustainable and innovative chemical solutions trusted by leading industries and partners.
              </p>
              <a
                href="/chemicals"
                className="inline-block text-sm font-semibold text-yellow-300 hover:text-yellow-400 transition"
              >
                Explore Products →
              </a>
            </div>
          </div>

          {/* SR Dry Fruits */}
          <div className="group rounded-xl overflow-hidden shadow-xl transition-transform hover:-translate-y-2 bg-white">
            <div className="overflow-hidden">
              <img
                src="/images/dryfruits.jpg"
                alt="SR Dry Fruits"
                className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 bg-gray-900 text-white space-y-3">
              <h3 className="text-2xl font-semibold">SR Dry Fruits</h3>
              <p className="text-white/80">
                Premium, farm-sourced dry fruits processed and packed with uncompromised hygiene and quality.
              </p>
              <a
                href="/dryfruits"
                className="inline-block text-sm font-semibold text-yellow-300 hover:text-yellow-400 transition"
              >
                Explore Products →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            { label: 'Years of Excellence', value: '10+' },
            { label: 'Product Range', value: '30+' },
            { label: 'Business Verticals', value: '2' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <p className="text-5xl font-extrabold text-gray-800">{stat.value}</p>
              <p className="mt-2 text-gray-600 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 bg-white" id="contact">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Get in Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            Looking to place an order or become a distributor? Our team is here to assist you with any queries.
          </p>
          <a
            href="/contact"
            className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
