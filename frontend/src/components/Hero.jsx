import { Link } from "react-router-dom";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";

function Hero() {
  return (
    <section className="bg-slate-950 text-white overflow-hidden relative">
      
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center py-12 sm:py-16 lg:py-24">

          {/* Left Content */}
          <div className="order-1 space-y-6">

            <span className="inline-block text-orange-500 font-semibold uppercase tracking-widest text-xs sm:text-sm bg-orange-500/10 px-3.5 py-1.5 rounded-lg border border-orange-500/20">
              Precision Engineering & Manufacturing
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Quality Parts. <br />
              <span className="text-orange-500">
                Precision Engineering.
              </span>
            </h1>

            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl">
              Right Engineering manufactures reliable mechanical and industrial components with a focus on precision, quality and dependable performance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                to="/products"
                className="text-center bg-orange-500 hover:bg-orange-600 text-white px-7 py-3.5 rounded-xl font-semibold transition shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2"
              >
                Explore Products <FaArrowRight className="text-xs" />
              </Link>

              <Link
                to="/contact"
                className="text-center border border-gray-700 bg-slate-900/50 hover:bg-white hover:text-slate-950 px-7 py-3.5 rounded-xl font-semibold transition backdrop-blur-sm"
              >
                Contact Us
              </Link>
            </div>

            {/* Bottom Quick Feature Highlights */}
            <div className="pt-6 grid grid-cols-3 gap-4 max-w-lg border-t border-gray-800/80">
              <div className="border-l-2 border-orange-500 pl-3">
                <p className="text-sm sm:text-base font-bold text-white">
                  IBR Flanges
                </p>
                <p className="text-xs text-gray-400 mt-0.5">
                  Precision Parts
                </p>
              </div>

              <div className="border-l-2 border-orange-500 pl-3">
                <p className="text-sm sm:text-base font-bold text-white">
                  Machine Parts
                </p>
                <p className="text-xs text-gray-400 mt-0.5">
                  Industrial
                </p>
              </div>

              <div className="border-l-2 border-orange-500 pl-3">
                <p className="text-sm sm:text-base font-bold text-white">
                  Castings
                </p>
                <p className="text-xs text-gray-400 mt-0.5">
                  Manufacturing
                </p>
              </div>
            </div>

          </div>

          {/* Right Image with Glow & Overlay Card */}
          <div className="order-2 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
            
            <div className="relative">
              <img
                src="images\company\right-engineering-works-building.png"
                alt="Engineering manufacturing"
                className="w-full h-[280px] sm:h-[340px] md:h-[420px] lg:h-[500px] object-cover rounded-2xl shadow-2xl border border-white/10"
              />

              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md text-white rounded-xl p-4 shadow-xl border border-white/10">
                <p className="font-bold text-base sm:text-lg text-white">
                  Right Engineering
                </p>
                <p className="text-xs sm:text-sm text-gray-300 mt-0.5">
                  Mechanical & Industrial Manufacturing
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;