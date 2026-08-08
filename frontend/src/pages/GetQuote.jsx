import { useState } from "react";
import { FaFileAlt, FaCheckCircle } from "react-icons/fa";

function GetQuote() {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    product: "",
    quantity: "",
    requirement: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit enquiry");
      }

      setMessage("success");

      setFormData({
        name: "",
        companyName: "",
        email: "",
        phone: "",
        product: "",
        quantity: "",
        requirement: "",
      });
    } catch (error) {
      console.error(error);
      setMessage("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-gray-50">

      {/* Header */}
      <section className="bg-slate-950 text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <p className="text-orange-500 font-bold uppercase tracking-widest text-xs sm:text-sm">
            Get A Quote
          </p>

          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Tell Us Your Requirement
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-gray-300 text-sm sm:text-base leading-7">
            Share your product or manufacturing requirement with us.
            Our team will review your enquiry and get back to you.
          </p>

        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 sm:py-16 lg:py-20">

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Information */}
            <div>
              <div className="bg-slate-950 rounded-2xl p-6 sm:p-7 text-white">

                <p className="text-orange-500 font-bold uppercase tracking-widest text-xs">
                  Right Engineering Works
                </p>

                <h2 className="mt-3 text-2xl font-bold">
                  Request a Quote
                </h2>

                <p className="mt-4 text-gray-400 text-sm leading-6">
                  Tell us about your product requirement, quantity,
                  material and specifications.
                </p>

                <div className="mt-7 space-y-5">

                  <div className="flex gap-3">
                    <FaCheckCircle className="text-orange-500 mt-1 shrink-0" />
                    <p className="text-sm text-gray-300">
                      Share your product requirements
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <FaCheckCircle className="text-orange-500 mt-1 shrink-0" />
                    <p className="text-sm text-gray-300">
                      Mention quantity and specifications
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <FaCheckCircle className="text-orange-500 mt-1 shrink-0" />
                    <p className="text-sm text-gray-300">
                      Our team can review your enquiry
                    </p>
                  </div>

                </div>

                <div className="mt-8 pt-6 border-t border-gray-700">

                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    Contact
                  </p>

                  <p className="mt-2 text-sm text-gray-300">
                    +91 99268 35986
                  </p>

                </div>

              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">

              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 lg:p-10">

                <div className="flex items-center gap-4 mb-8">

                  <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                    <FaFileAlt />
                  </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                      Your Requirement
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                      Fill in the details below.
                    </p>
                  </div>

                </div>

                <form onSubmit={handleSubmit} className="space-y-5">

                  {/* Name + Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Your Name *
                      </label>

                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Company Name
                      </label>

                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Enter company name"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                      />
                    </div>

                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address *
                      </label>

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter email address"
                        required
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number *
                      </label>

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                        required
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                      />
                    </div>

                  </div>

                  {/* Product */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Product / Requirement *
                    </label>

                    <select
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-600 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    >
                      <option value="">Select a product</option>
                      <option>IBR Flanges</option>
                      <option>SS Rod Machine Parts</option>
                      <option>Machine Castings</option>
                      <option>Mild Steel Components</option>
                      <option>Steel Molds</option>
                      <option>Plastic Packaging</option>
                      <option>Other Requirement</option>
                    </select>
                  </div>

                  {/* Quantity */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Approximate Quantity
                    </label>

                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder="e.g. 100 pieces"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    />
                  </div>

                  {/* Requirement */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Requirement Details *
                    </label>

                    <textarea
                      rows="6"
                      name="requirement"
                      value={formData.requirement}
                      onChange={handleChange}
                      required
                      placeholder="Describe your product specification, size, material or other requirements..."
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none resize-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    ></textarea>
                  </div>

                  {/* Success */}
                  {message === "success" && (
                    <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg px-4 py-3 text-sm">
                      Enquiry submitted successfully! We will contact you soon.
                    </div>
                  )}

                  {/* Error */}
                  {message === "error" && (
                    <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">
                      Something went wrong. Please try again.
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-semibold py-3.5 rounded-lg transition duration-300"
                  >
                    {loading ? "Submitting..." : "Submit Enquiry"}
                  </button>

                  <p className="text-center text-xs text-gray-500">
                    Your enquiry details will be used only for contacting you
                    regarding your requirement.
                  </p>

                </form>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default GetQuote;