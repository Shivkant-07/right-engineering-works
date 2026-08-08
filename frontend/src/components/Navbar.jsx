import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="h-16 sm:h-20 flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex flex-col leading-tight"
          >
            <span className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Right Engineering
            </span>

            <span className="text-xs sm:text-sm font-bold text-orange-500 tracking-wider">
              WORKS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7">

            <Link
              to="/"
              className="text-sm font-medium text-slate-700 hover:text-orange-500 transition"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="text-sm font-medium text-slate-700 hover:text-orange-500 transition"
            >
              About
            </Link>

            <Link
              to="/products"
              className="text-sm font-medium text-slate-700 hover:text-orange-500 transition"
            >
              Products
            </Link>

            <Link
              to="/gallery"
              className="text-sm font-medium text-slate-700 hover:text-orange-500 transition"
            >
              Gallery
            </Link>

            <Link
              to="/contact"
              className="text-sm font-medium text-slate-700 hover:text-orange-500 transition"
            >
              Contact
            </Link>

            {/* Get Quote */}
            <Link
              to="/get-quote"
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition"
            >
              <FaPhoneAlt className="text-xs" />
              Get Quote
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-slate-900 text-xl p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4">

            <div className="flex flex-col gap-1">

              <Link
                to="/"
                onClick={closeMenu}
                className="px-3 py-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-orange-50 hover:text-orange-500"
              >
                Home
              </Link>

              <Link
                to="/about"
                onClick={closeMenu}
                className="px-3 py-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-orange-50 hover:text-orange-500"
              >
                About
              </Link>

              <Link
                to="/products"
                onClick={closeMenu}
                className="px-3 py-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-orange-50 hover:text-orange-500"
              >
                Products
              </Link>

              <Link
                to="/gallery"
                onClick={closeMenu}
                className="px-3 py-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-orange-50 hover:text-orange-500"
              >
                Gallery
              </Link>

              <Link
                to="/contact"
                onClick={closeMenu}
                className="px-3 py-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-orange-50 hover:text-orange-500"
              >
                Contact
              </Link>

              <Link
                to="/get-quote"
                onClick={closeMenu}
                className="mt-2 flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-lg text-sm font-semibold"
              >
                <FaPhoneAlt className="text-xs" />
                Get Quote
              </Link>

            </div>

          </div>
        )}

      </div>

    </nav>
  );
}

export default Navbar;