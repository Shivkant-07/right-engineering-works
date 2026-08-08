import {
  FaIndustry,
  FaCogs,
  FaTools,
  FaCube,
  FaFlask,
  FaBoxOpen,
} from "react-icons/fa";

function OurProducts() {
  const products = [
    {
      icon: <FaIndustry />,
      title: "IBR Flanges",
      description:
        "Precision-manufactured IBR flanges designed for industrial applications and reliable performance.",
    },
    {
      icon: <FaCogs />,
      title: "SS Rod Machine Parts",
      description:
        "Machine components manufactured from stainless steel rods with attention to precision and finish.",
    },
    {
      icon: <FaTools />,
      title: "Machine Castings",
      description:
        "Industrial machine casting components manufactured according to required specifications.",
    },
    {
      icon: <FaCube />,
      title: "Mild Steel Components",
      description:
        "Durable mild steel components suitable for different industrial and engineering requirements.",
    },
    {
      icon: <FaCogs />,
      title: "Steel Molds",
      description:
        "Steel molds manufactured for industrial production and component forming requirements.",
    },
    {
      icon: <FaBoxOpen />,
      title: "Plastic Packaging",
      description:
        "Plastic packaging solutions manufactured for practical industrial and product packaging needs.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-orange-500 font-semibold uppercase tracking-widest text-sm">
            Our Products
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Engineering Products We Manufacture
          </h2>

          <p className="mt-4 text-gray-600 text-sm sm:text-base leading-7">
            From precision machine components to industrial casting and
            packaging solutions, Right Engineering offers a range of
            manufacturing products for industrial requirements.
          </p>
        </div>

        {/* Product Cards */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">

          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-gray-200 p-6 sm:p-7 hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center text-2xl group-hover:bg-blue-900 group-hover:text-white transition duration-300">
                {product.icon}
              </div>

              {/* Title */}
              <h3 className="mt-5 text-xl font-bold text-slate-900">
                {product.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-gray-600 text-sm leading-6">
                {product.description}
              </p>

              {/* Bottom Line */}
              <div className="mt-6 h-1 w-12 bg-orange-500 rounded-full group-hover:w-20 transition-all duration-300"></div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default OurProducts;