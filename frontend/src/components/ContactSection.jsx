import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function ContactSection() {
  return (
    <section className="bg-slate-950 text-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-orange-500 font-bold uppercase tracking-widest text-xs sm:text-sm">
            Get In Touch
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Request a Quote
          </h2>

          <p className="mt-4 text-gray-300 text-sm sm:text-base leading-7">
            Have a requirement for mechanical or industrial components?
            Send us your details and our team will get in touch with you.
          </p>
        </div>

        {/* Content */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Contact Information */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">

            <h3 className="text-2xl font-bold">
              Let's Work Together
            </h3>

            <p className="mt-3 text-gray-400 text-sm leading-6">
              Right Engineering is ready to discuss your manufacturing
              requirements and provide suitable engineering solutions.
            </p>

            <div className="mt-8 space-y-5">

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 shrink-0 rounded-lg bg-orange-500 flex items-center justify-center">
                  <FaPhoneAlt />
                </div>

                <div>
                  <p className="text-sm text-gray-400">
                    Phone
                  </p>

                  <p className="font-semibold mt-1">
                    Contact for enquiries
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 shrink-0 rounded-lg bg-orange-500 flex items-center justify-center">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-sm text-gray-400">
                    Email
                  </p>

                  <p className="font-semibold mt-1">
                    Send us your enquiry
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 shrink-0 rounded-lg bg-orange-500 flex items-center justify-center">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="text-sm text-gray-400">
                    Location
                  </p>

                  <p className="font-semibold mt-1">
                    Madhya Pradesh, India
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Quote Form */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 text-slate-900 shadow-xl">

            <h3 className="text-2xl font-bold">
              Send Your Requirement
            </h3>

            <form className="mt-6 space-y-4">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-orange-500"
                />

                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-orange-500"
                />

              </div>

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-orange-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-orange-500"
              />

              <input
                type="text"
                placeholder="Product / Requirement"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-orange-500"
              />

              <textarea
                rows="4"
                placeholder="Tell us about your requirement..."
                className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none resize-none focus:border-orange-500"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition"
              >
                Send Enquiry
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactSection;