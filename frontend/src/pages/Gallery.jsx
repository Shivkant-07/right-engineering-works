const galleryItems = [
  {
    title: "IBR Flanges",
    image: "/images/products/ibr-flanges.webp",
  },
  {
    title: "SS Rod Machine Parts",
    image: "/images/products/ss-rod.webp",
  },
  {
    title: "Machine Castings",
    image: "/images/products/machine-casting.webp",
  },
  {
    title: "Machine Parts",
    image: "/images/products/machine-parts.webp",
  },
  {
    title: "Mild Steel Components",
    image: "/images/products/mild-steel.webp",
  },
  {
    title: "Steel Molds",
    image: "/images/products/steel-molds.webp",
  },
  {
    title: "Steel Roller",
    image: "/images/products/steel-roller.webp",
  },
  {
    title: "Plastic Packaging",
    image: "/images/products/plastic-packing.webp",
  },
];

function Gallery() {
  return (
    <main className="bg-white">

      {/* Header */}
      <section className="bg-slate-950 text-white py-14 sm:py-16">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <p className="text-orange-500 font-bold uppercase tracking-widest text-xs sm:text-sm">
            Our Gallery
          </p>

          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Manufacturing & Engineering
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-gray-300 text-sm sm:text-base leading-7">
            Explore our products, machine components and engineering work
            manufactured by Right Engineering Works.
          </p>

        </div>

      </section>

      {/* Gallery */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">

            {galleryItems.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl bg-slate-900 aspect-[4/3] shadow-sm hover:shadow-xl transition duration-300"
              >

                {/* Image */}
                <img
                  src={item.image}
                  alt={`${item.title} - Right Engineering Works`}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end">

                  <div className="p-5 sm:p-6">

                    <h2 className="text-white text-lg sm:text-xl font-bold">
                      {item.title}
                    </h2>

                    <p className="text-gray-300 text-sm mt-1">
                      Right Engineering Works
                    </p>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20">

        <div className="max-w-5xl mx-auto px-4 sm:px-6">

          <div className="bg-blue-900 rounded-2xl p-7 sm:p-10 text-center text-white">

            <h2 className="text-2xl sm:text-3xl font-bold">
              Looking for a Manufacturing Partner?
            </h2>

            <p className="mt-3 text-blue-100 text-sm sm:text-base">
              Share your requirement with Right Engineering Works.
            </p>

            <a
              href="/get-quote"
              className="inline-block mt-6 bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold transition"
            >
              Get a Quote
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Gallery;