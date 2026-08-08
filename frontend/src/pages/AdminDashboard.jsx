import { useEffect, useState } from "react";
import {
    FaEnvelope,
    FaPhone,
    FaBuilding,
    FaBoxOpen,
    FaSignOutAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
    const navigate = useNavigate();

    const [enquiries, setEnquiries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");

    const fetchEnquiries = async () => {
        try {
            const response = await fetch(
                "http://localhost:5000/api/admin/enquiries",
                {
                    credentials: "include",
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Failed to fetch enquiries");
            }

            setEnquiries(data.enquiries);
        } catch (error) {
            console.error(error);
            setError(error.message);

            if (error.message.includes("Not authorized")) {
                navigate("/admin/login");
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchEnquiries();
    }, []);

    const handleLogout = async () => {
        try {
            await fetch("http://localhost:5000/api/auth/logout", {
                method: "POST",
                credentials: "include",
            });
        } catch (error) {
            console.error("Logout error:", error);
        } finally {
            navigate("/admin/login");
        }
    };

    return (
        <main className="min-h-screen bg-gray-50">

            {/* Header */}
            <section className="bg-slate-950 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                        <div>
                            <p className="text-orange-500 text-xs font-bold uppercase tracking-widest">
                                Right Engineering Works
                            </p>

                            <h1 className="mt-1 text-2xl sm:text-3xl font-bold">
                                Admin Dashboard
                            </h1>

                            <p className="mt-1 text-gray-400 text-sm">
                                Manage customer enquiries
                            </p>
                        </div>

                        <button
                            onClick={handleLogout}
                            className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/10 px-4 py-2.5 rounded-lg text-sm font-medium transition"
                        >
                            <FaSignOutAlt />
                            Logout
                        </button>

                    </div>

                </div>
            </section>

            {/* Content */}
            <section className="py-8 sm:py-10">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Search & Refresh */}
                    <div className="mb-6 flex flex-col sm:flex-row gap-3">

                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search by name, email, phone or product..."
                            className="flex-1 bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                        />

                        <button
                            onClick={fetchEnquiries}
                            className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-3 rounded-lg text-sm font-semibold transition"
                        >
                            Refresh
                        </button>

                    </div>

                    {/* Stats */}
                    <div className="bg-white border border-gray-200 rounded-xl p-5 mb-8">

                        <p className="text-sm text-gray-500">
                            Total Enquiries
                        </p>

                        <p className="mt-1 text-3xl font-bold text-slate-900">
                            {enquiries.length}
                        </p>

                    </div>

                    {/* Loading */}
                    {loading && (
                        <div className="bg-white border border-gray-200 rounded-xl p-10 text-center">
                            <p className="text-gray-500">
                                Loading enquiries...
                            </p>
                        </div>
                    )}

                    {/* Error */}
                    {!loading && error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-5">
                            {error}
                        </div>
                    )}

                    {/* Empty */}
                    {!loading && !error && enquiries.length === 0 && (
                        <div className="bg-white border border-gray-200 rounded-xl p-10 text-center">

                            <h2 className="text-xl font-bold text-slate-900">
                                No Enquiries Yet
                            </h2>

                            <p className="mt-2 text-gray-500 text-sm">
                                Customer enquiries submitted through the Get Quote form
                                will appear here.
                            </p>

                        </div>
                    )}

                    {/* Enquiries */}
                    {!loading && !error && enquiries.length > 0 && (

                        <div className="space-y-5">

                            {enquiries
                                .filter((enquiry) => {
                                    const searchText = search.toLowerCase();

                                    return (
                                        enquiry.name?.toLowerCase().includes(searchText) ||
                                        enquiry.email?.toLowerCase().includes(searchText) ||
                                        enquiry.phone?.toLowerCase().includes(searchText) ||
                                        enquiry.product?.toLowerCase().includes(searchText)
                                    );
                                })
                                .map((enquiry) => (

                                    <div
                                        key={enquiry._id}
                                        className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 shadow-sm"
                                    >

                                        {/* Top */}
                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">

                                            <div>
                                                <h2 className="text-xl font-bold text-slate-900">
                                                    {enquiry.name}
                                                </h2>

                                                <p className="mt-1 text-sm text-gray-500">
                                                    {new Date(enquiry.createdAt).toLocaleString()}
                                                </p>
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <label className="text-xs text-gray-500">
                                                    Status:
                                                </label>

                                                <select
                                                    value={enquiry.status || "New"}
                                                    onChange={async (e) => {
                                                        const newStatus = e.target.value;

                                                        try {
                                                            const response = await fetch(
                                                                `http://localhost:5000/api/admin/enquiries/${enquiry._id}/status`,
                                                                {
                                                                    method: "PATCH",
                                                                    headers: {
                                                                        "Content-Type": "application/json",
                                                                    },
                                                                    credentials: "include",
                                                                    body: JSON.stringify({
                                                                        status: newStatus,
                                                                    }),
                                                                }
                                                            );

                                                            const data = await response.json();

                                                            if (!response.ok) {
                                                                throw new Error(data.message || "Failed to update status");
                                                            }

                                                            setEnquiries((prev) =>
                                                                prev.map((item) =>
                                                                    item._id === enquiry._id
                                                                        ? { ...item, status: newStatus }
                                                                        : item
                                                                )
                                                            );
                                                        } catch (error) {
                                                            console.error("Status update error:", error);
                                                            alert(error.message);
                                                        }
                                                    }}
                                                    className="border border-gray-200 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 outline-none focus:border-orange-500"
                                                >
                                                    <option value="New">New</option>
                                                    <option value="Contacted">Contacted</option>
                                                    <option value="Completed">Completed</option>
                                                </select>
                                            </div>

                                        </div>

                                        {/* Details */}
                                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                                            <div className="flex gap-3">
                                                <FaEnvelope className="text-orange-500 mt-1 shrink-0" />

                                                <div className="min-w-0">
                                                    <p className="text-xs text-gray-500">
                                                        Email
                                                    </p>

                                                    <p className="text-sm font-medium text-slate-900 break-all">
                                                        {enquiry.email}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-3">
                                                <FaPhone className="text-orange-500 mt-1 shrink-0" />

                                                <div>
                                                    <p className="text-xs text-gray-500">
                                                        Phone
                                                    </p>

                                                    <p className="text-sm font-medium text-slate-900">
                                                        {enquiry.phone}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-3">
                                                <FaBuilding className="text-orange-500 mt-1 shrink-0" />

                                                <div>
                                                    <p className="text-xs text-gray-500">
                                                        Company
                                                    </p>

                                                    <p className="text-sm font-medium text-slate-900">
                                                        {enquiry.companyName || "Not provided"}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-3">
                                                <FaBoxOpen className="text-orange-500 mt-1 shrink-0" />

                                                <div>
                                                    <p className="text-xs text-gray-500">
                                                        Product
                                                    </p>

                                                    <p className="text-sm font-medium text-slate-900">
                                                        {enquiry.product}
                                                    </p>
                                                </div>
                                            </div>

                                        </div>

                                        {/* Quantity */}
                                        {enquiry.quantity && (
                                            <div className="mt-5">
                                                <p className="text-xs text-gray-500">
                                                    Approximate Quantity
                                                </p>

                                                <p className="mt-1 text-sm font-semibold text-slate-900">
                                                    {enquiry.quantity}
                                                </p>
                                            </div>
                                        )}

                                        {/* Requirement */}
                                        <div className="mt-5 bg-gray-50 rounded-xl p-4">

                                            <p className="text-xs text-gray-500">
                                                Requirement Details
                                            </p>

                                            <p className="mt-2 text-sm text-gray-700 leading-6 whitespace-pre-wrap">
                                                {enquiry.requirement}
                                            </p>

                                        </div>

                                        <div className="mt-5 flex justify-end">
                                            <button
                                                onClick={async () => {
                                                    const confirmDelete = window.confirm(
                                                        "Are you sure you want to delete this enquiry?"
                                                    );

                                                    if (!confirmDelete) return;

                                                    try {
                                                        const response = await fetch(
                                                            `http://localhost:5000/api/admin/enquiries/${enquiry._id}`,
                                                            {
                                                                method: "DELETE",
                                                                credentials: "include",
                                                            }
                                                        );

                                                        const data = await response.json();

                                                        if (!response.ok) {
                                                            throw new Error(data.message || "Failed to delete enquiry");
                                                        }

                                                        setEnquiries((prev) =>
                                                            prev.filter((item) => item._id !== enquiry._id)
                                                        );
                                                    } catch (error) {
                                                        console.error("Delete error:", error);
                                                        alert(error.message);
                                                    }
                                                }}
                                                className="px-4 py-2 bg-red-50 text-red-600 border border-red-200 rounded-lg text-sm font-semibold hover:bg-red-100 transition"
                                            >
                                                Delete Enquiry
                                            </button>
                                        </div>

                                    </div>

                                ))}

                        </div>

                    )}

                </div>

            </section>

        </main>
    );
}

export default AdminDashboard;