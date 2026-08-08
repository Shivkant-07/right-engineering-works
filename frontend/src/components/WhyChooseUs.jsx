import {
  FaBullseye,
  FaCogs,
  FaShieldAlt,
  FaHandshake,
} from "react-icons/fa";

function WhyChooseUs() {
  const features = [
    {
      icon: <FaBullseye />,
      title: "Precision & Accuracy",
      description:
        "We focus on accurate dimensions and consistent manufacturing quality for every component.",
    },
    {
      icon: <FaCogs />,
      title: "Quality Manufacturing",
      description:
        "Our manufacturing process is focused on producing durable and reliable mechanical components.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Quality Assurance",
      description:
        "Every component is manufactured with attention to quality, finishing and performance.",
    },
    {
      icon: <FaHandshake />,
      title: "Customer Focus",
      description:
        "We understand customer requirements and work towards delivering the right engineering solution.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-orange-500 font-semibold uppercase tracking-widest text-sm">
            Why Choose Us
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Engineering You Can Rely On
          </h2>

          <p className="mt-4 text-gray-600 text-sm sm:text-base leading-7">
            We combine precision, quality and customer-focused manufacturing
            to deliver dependable mechanical components.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">

          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 sm:p-7 rounded-2xl border border-gray-200 bg-white hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center text-2xl group-hover:bg-blue-900 group-hover:text-white transition">
                {feature.icon}
              </div>

              <h3 className="mt-5 text-lg sm:text-xl font-bold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-3 text-gray-600 text-sm leading-6">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;