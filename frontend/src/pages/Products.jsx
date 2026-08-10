import {
  FaIndustry,
  FaCogs,
  FaCube,
  FaTools,
  FaBoxOpen,
  FaWrench,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const products = [
  {
    name: "IBR Flanges",
    description:
      "Precision-manufactured IBR flanges designed for industrial and mechanical applications.",
    image: "/images/products/ibr-flanges.webp",
    icon: FaIndustry,
  },
  {
    name: "SS Rod Machine Parts",
    description:
      "Stainless steel rod machine components manufactured according to required specifications.",
    image: "/images/products/ss-rod.webp",
    icon: FaCogs,
  },
  {
    name: "Machine Castings",
    description:
      "Reliable machine casting components suitable for various industrial manufacturing requirements.",
    image: "/images/products/machine-casting.webp",
    icon: FaCube,
  },
  {
    name: "Mild Steel Components",
    description:
      "Durable mild steel components manufactured for different engineering applications.",
    image: "/images/products/mild-steel.webp",
    icon: FaTools,
  },
  {
    name: "Steel Molds",
    description:
      "Strong and reliable steel molds manufactured according to customer requirements.",
    image: "/images/products/steel-molds.webp",
    icon: FaWrench,
  },
  {
    name: "Plastic Packaging",
    description:
      "Plastic packaging solutions for industrial and product packaging requirements.",
    image: "/images/products/plastic-packing.webp",
    icon: FaBoxOpen,
  },
];

function Products() {
  return (
    <main className="bg-white">

      {/* Header */}
      <section className="bg-slate-950 text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <p className="text-orange-500 font-bold uppercase tracking-widest text-xs sm:text-sm">
            Our Products
          </p>

          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Engineering & Industrial Products
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-gray-300 text-sm sm:text-base leading-7">
            Explore our range of mechanical and industrial products
            manufactured for different engineering requirements.
          </p>

        </div>
      </section>

      {/* Products */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

            {products.map((product) => {
              const Icon = product.icon;

              return (
                <div
                  key={product.name}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300"
                >

                  {/* Product Image */}
                  <div className="h-52 sm:h-56 overflow-hidden bg-gray-100">
                    <img
                      src={product.image}
                      alt={`${product.name} - Right Engineering Works`}
                      className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-7">

                    <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center text-lg">
                      <Icon />
                    </div>

                    <h2 className="mt-5 text-xl font-bold text-slate-900">
                      {product.name}
                    </h2>

                    <p className="mt-3 text-gray-600 text-sm leading-6">
                      {product.description}
                    </p>

                    <div className="mt-5 text-sm font-semibold text-blue-900">
                      Manufacturing & Supply →
                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* Bottom CTA */}
      <section className="py-14 sm:py-20">

        <div className="max-w-5xl mx-auto px-4 sm:px-6">

          <div className="bg-blue-900 rounded-2xl p-7 sm:p-10 text-center text-white">

            <h2 className="text-2xl sm:text-3xl font-bold">
              Have a Specific Manufacturing Requirement?
            </h2>

            <p className="mt-3 text-blue-100 text-sm sm:text-base">
              Tell us what you need and discuss your requirement with
              Right Engineering Works.
            </p>

            <Link
              to="/get-quote"
              className="inline-block mt-6 bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold transition"
            >
               <FaPhoneAlt className="text-xs" />
              Request a Quote
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Products;