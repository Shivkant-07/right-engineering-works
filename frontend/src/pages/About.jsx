import { FaIndustry, FaBullseye, FaCheckCircle } from "react-icons/fa";

function About() {
  return (
    <main className="bg-slate-50">

      {/* Page Header */}
      <section className="bg-slate-950 text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <p className="text-orange-500 font-bold uppercase tracking-widest text-xs sm:text-sm">
            About Us
          </p>

          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Right Engineering Works
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-gray-300 text-sm sm:text-base leading-7">
            Manufacturing reliable mechanical and industrial components
            for diverse engineering requirements.
          </p>

        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-12 sm:py-16 lg:py-20">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Image */}
            <div className="relative">

              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl blur opacity-20"></div>

              <img
                src="images\company\right-engineering-works-building.png"
                alt="Right Engineering Works manufacturing"
                className="relative w-full h-72 sm:h-96 lg:h-[430px] object-cover rounded-2xl shadow-xl"
              />

            </div>

            {/* Content */}
            <div>

              <p className="text-orange-500 font-bold uppercase tracking-widest text-xs sm:text-sm">
                Who We Are
              </p>

              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
                Engineering With Quality & Precision
              </h2>

              <p className="mt-5 text-gray-600 text-sm sm:text-base leading-7">
                Right Engineering Works is engaged in manufacturing and
                supplying mechanical and industrial products for different
                engineering requirements.
              </p>

              <p className="mt-4 text-gray-600 text-sm sm:text-base leading-7">
                Our product range includes IBR flanges, SS rod machine
                parts, machine castings, mild steel components, steel molds
                and plastic packaging products.
              </p>

              <p className="mt-4 text-gray-600 text-sm sm:text-base leading-7">
                We focus on dependable manufacturing, product quality and
                understanding the specific requirements of our customers.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Owners */}
      

            {/* Owners */}
<section className="bg-white py-12 sm:py-16 lg:py-20">

  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="text-center">

      <p className="text-orange-500 font-bold uppercase tracking-widest text-xs sm:text-sm">
        Our Leadership
      </p>

      <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
        Meet The Owners
      </h2>

      <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-sm sm:text-base">
        The people behind Right Engineering Works, committed to quality,
        reliability and customer satisfaction.
      </p>

    </div>

    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">

      {/* Mahesh Patel */}
      <div className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition duration-300">

        <div className="h-80 sm:h-96 overflow-hidden bg-gray-100">
          <img
            src="/images/company/mosaji.jpeg"
            alt="Mahesh Patel - Owner"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
          />
        </div>

        <div className="p-6 text-center">

          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
            Mahesh Patel
          </h3>

          <p className="mt-1 text-sm text-orange-600 font-semibold">
            Owner
          </p>

        </div>

      </div>

      {/* Narayan Makode */}
      <div className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition duration-300">

        <div className="h-80 sm:h-96 overflow-hidden bg-gray-100">
          <img
            src="/images/company/uncleji.png"
            alt="Narayan Makode - Owner"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
          />
        </div>

        <div className="p-6 text-center">

          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
            Narayan Makode
          </h3>

          <p className="mt-1 text-sm text-blue-900 font-semibold">
            Owner
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* Our Approach */}
      <section className="bg-slate-50 py-12 sm:py-16 lg:py-20">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto">

            <p className="text-orange-500 font-bold uppercase tracking-widest text-xs sm:text-sm">
              Our Approach
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
              What We Focus On
            </h2>

          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <FaIndustry className="text-orange-500 text-2xl" />

              <h3 className="mt-4 text-xl font-bold text-slate-900">
                Manufacturing
              </h3>

              <p className="mt-3 text-gray-600 text-sm leading-6">
                Manufacturing mechanical and industrial components for
                different applications.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <FaCheckCircle className="text-orange-500 text-2xl" />

              <h3 className="mt-4 text-xl font-bold text-slate-900">
                Quality
              </h3>

              <p className="mt-3 text-gray-600 text-sm leading-6">
                Focus on reliable products and consistent manufacturing
                quality.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <FaBullseye className="text-orange-500 text-2xl" />

              <h3 className="mt-4 text-xl font-bold text-slate-900">
                Customer Requirements
              </h3>

              <p className="mt-3 text-gray-600 text-sm leading-6">
                Understanding customer specifications and requirements for
                suitable manufacturing solutions.
              </p>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default About;