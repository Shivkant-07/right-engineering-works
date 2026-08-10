import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold">
              Right Engineering
              <span className="text-orange-500"> Works</span>
            </h2>

            <p className="mt-4 text-gray-400 text-sm leading-6">
              Reliable mechanical and industrial manufacturing solutions
              with a focus on precision, quality and customer satisfaction.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">

              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-orange-500 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-orange-500 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-orange-500 transition"
              >
                <FaLinkedinIn />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">
              Quick Links
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-400">

              <Link
                to="/"
                className="hover:text-orange-500 transition"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="hover:text-orange-500 transition"
              >
                About Us
              </Link>

              <Link
                to="/products"
                className="hover:text-orange-500 transition"
              >
                Products
              </Link>

              <Link
                to="/gallery"
                className="hover:text-orange-500 transition"
              >
                Gallery
              </Link>

              <Link
                to="/contact"
                className="hover:text-orange-500 transition"
              >
                Contact
              </Link>

            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold">
              Our Products
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-400">

              <p>IBR Flanges</p>
              <p>SS Rod Machine Parts</p>
              <p>Machine Castings</p>
              <p>Mild Steel Components</p>
              <p>Steel Molds</p>
              <p>Plastic Packaging</p>

            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold">
              Contact Us
            </h3>

            <div className="mt-4 space-y-5">

              <div className="flex gap-3">
                <FaPhoneAlt className="text-orange-500 mt-1 shrink-0" />

                <div>
                  <p className="text-sm text-gray-400">
                    Phone
                  </p>

                  <p className="text-sm mt-1">
                    Contact for enquiries
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <FaEnvelope className="text-orange-500 mt-1 shrink-0" />

                <div>
                  <p className="text-sm text-gray-400">
                    Email
                  </p>

                  <p className="text-sm mt-1">
                    Send us your enquiry
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <FaMapMarkerAlt className="text-orange-500 mt-1 shrink-0" />

                <div>
                  <p className="text-sm text-gray-400">
                    Location
                  </p>

                  <p className="text-sm mt-1">
                    Madhya Pradesh, India
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">

          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left">

            <p className="text-xs sm:text-sm text-gray-500">
              © 2026 Right Engineering Works. All Rights Reserved.
            </p>

            <div className="flex items-center gap-5">

              <Link
                to="/get-quote"
                className="text-xs sm:text-sm text-orange-500 hover:text-orange-400 font-semibold"
              >
                Request a Quote →
              </Link>

              <Link
                to="/admin/login"
                className="text-xs sm:text-sm text-gray-500 hover:text-orange-500 transition"
              >
                Admin Login
              </Link>

            </div>

          </div>
</div>
</div>
        </footer>
        );
}

        export default Footer;