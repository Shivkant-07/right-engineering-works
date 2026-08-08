function CompanyIntro() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Company Image */}
          <div className="relative group">

            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85"
                alt="Right Engineering manufacturing facility"
                className="w-full h-72 sm:h-96 lg:h-[430px] object-cover rounded-2xl shadow-xl"
              />

              <div className="absolute bottom-5 left-5 bg-slate-900/90 backdrop-blur-md text-white rounded-xl px-4 py-3 shadow-xl">
                <p className="text-xs text-orange-400 font-semibold uppercase tracking-wide">
                  Engineering & Manufacturing
                </p>

                <p className="font-bold text-base sm:text-lg">
                  Right Engineering Works
                </p>
              </div>
            </div>

          </div>

          {/* Company Content */}
          <div>

            <span className="inline-block text-orange-500 font-bold uppercase tracking-widest text-xs sm:text-sm bg-orange-50 px-3 py-1.5 rounded-lg">
              About Right Engineering Works
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
              Reliable Manufacturing.
              <span className="block text-blue-900">
                Quality Engineering.
              </span>
            </h2>

            <p className="mt-5 text-gray-600 text-sm sm:text-base leading-7">
              Right Engineering Works is engaged in manufacturing and supplying
              quality engineering components and industrial products for
              different manufacturing requirements.
            </p>

            <p className="mt-3 text-gray-600 text-sm sm:text-base leading-7">
              Our product range includes IBR flanges, SS rod machine parts,
              machine castings, mild steel components, steel molds and
              plastic packaging products.
            </p>

            {/* Owners */}
            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4">

              <div className="rounded-xl bg-gray-50 border border-gray-200 p-4 hover:shadow-md transition">
                <p className="text-xs text-orange-600 font-bold uppercase tracking-wider">
                  Owner
                </p>

                <p className="mt-1 text-lg font-bold text-slate-900">
                  Mahesh Patel
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 border border-gray-200 p-4 hover:shadow-md transition">
                <p className="text-xs text-orange-600 font-bold uppercase tracking-wider">
                  Owner
                </p>

                <p className="mt-1 text-lg font-bold text-slate-900">
                  Narayan Makode
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default CompanyIntro;