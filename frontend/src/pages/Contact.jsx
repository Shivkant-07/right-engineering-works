import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

function Contact() {
  return (
    <main>

      {/* Page Header */}
      <section className="bg-slate-950 text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <p className="text-orange-500 font-bold uppercase tracking-widest text-xs sm:text-sm">
            Contact Us
          </p>

          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Get In Touch With Us
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-gray-300 text-sm sm:text-base leading-7">
            Have a question or want to discuss your manufacturing
            requirements? Get in touch with Right Engineering Works.
          </p>

        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

            {/* Left Side */}
            <div>

              <p className="text-orange-500 font-bold uppercase tracking-widest text-xs sm:text-sm">
                Right Engineering Works
              </p>

              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
                Let's Connect
              </h2>

              <p className="mt-4 text-gray-600 text-sm sm:text-base leading-7">
                We are available to discuss your mechanical and industrial
                manufacturing requirements. Contact us for product
                information, enquiries and business discussions.
              </p>

              <div className="mt-8 space-y-4">

                {/* Mahesh */}
                <a
                  href="tel:+919926835986"
                  className="block bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition"
                >
                  <div className="flex gap-4">

                    <div className="w-11 h-11 shrink-0 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
                      <FaPhoneAlt />
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">
                        Contact — Mahesh Patel
                      </p>

                      <p className="mt-1 font-semibold text-slate-900">
                        +91 99268 35986
                      </p>
                    </div>

                  </div>
                </a>

                {/* Narayan */}
                <a
                  href="tel:+919826093966"
                  className="block bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition"
                >
                  <div className="flex gap-4">

                    <div className="w-11 h-11 shrink-0 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
                      <FaPhoneAlt />
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">
                        Contact — Narayan Makode
                      </p>

                      <p className="mt-1 font-semibold text-slate-900">
                        +91 98260 93966
                      </p>
                    </div>

                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:rightengineering1981@gmail.com"
                  className="block bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition"
                >
                  <div className="flex gap-4">

                    <div className="w-11 h-11 shrink-0 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
                      <FaEnvelope />
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">
                        Email
                      </p>

                      <p className="mt-1 font-semibold text-slate-900 break-all">
                        rightengineering1981@gmail.com
                      </p>
                    </div>

                  </div>
                </a>

                {/* Address */}
                <div className="bg-white border border-gray-200 rounded-xl p-5">

                  <div className="flex gap-4">

                    <div className="w-11 h-11 shrink-0 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
                      <FaMapMarkerAlt />
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">
                        Address
                      </p>

                      <p className="mt-1 font-semibold text-slate-900 leading-6">
                        751, Ganesh Dham Colony,
                        <br />
                        Near New Life Hospital,
                        <br />
                        Sanwer Road, Indore (M.P.)
                      </p>
                    </div>

                  </div>

                </div>

                {/* Business Hours */}
                <div className="bg-white border border-gray-200 rounded-xl p-5">

                  <div className="flex gap-4">

                    <div className="w-11 h-11 shrink-0 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
                      <FaClock />
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">
                        Business Hours
                      </p>

                      <p className="mt-1 font-semibold text-slate-900">
                        Monday - Saturday
                      </p>

                      <p className="text-sm text-gray-500 mt-1">
                        Contact us for availability.
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* Right Side */}
            <div className="bg-slate-950 rounded-2xl p-6 sm:p-8 text-white">

              <p className="text-orange-500 font-bold uppercase tracking-widest text-xs">
                Visit Us
              </p>

              <h3 className="mt-3 text-2xl sm:text-3xl font-bold">
                Right Engineering Works
              </h3>

              <p className="mt-4 text-gray-400 text-sm sm:text-base leading-7">
                We manufacture and supply engineering components and
                industrial products according to customer requirements.
              </p>

              <div className="mt-8 space-y-5">

                <div className="border-l-2 border-orange-500 pl-4">
                  <h4 className="font-semibold">
                    Our Products
                  </h4>

                  <p className="text-sm text-gray-400 mt-1">
                    IBR Flanges, SS Rod Machine Parts, Machine Castings,
                    Mild Steel Components, Steel Molds and Plastic Packaging.
                  </p>
                </div>

                <div className="border-l-2 border-orange-500 pl-4">
                  <h4 className="font-semibold">
                    Manufacturing Support
                  </h4>

                  <p className="text-sm text-gray-400 mt-1">
                    Discuss your specific engineering and manufacturing
                    requirements with our team.
                  </p>
                </div>

              </div>

              {/* Map Button */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=751%20Ganesh%20Dham%20Colony%20Near%20New%20Life%20Hospital%20Sanwer%20Road%20Indore"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center mt-8 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                <FaMapMarkerAlt className="mr-2" />
                View Location
              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Contact;