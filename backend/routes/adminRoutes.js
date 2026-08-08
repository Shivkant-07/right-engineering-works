import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import Enquiry from "../models/Enquiry.js";

const router = express.Router();

// Get all enquiries
router.get("/enquiries", authMiddleware, async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });

    res.status(200).json({
      enquiries,
    });
  } catch (error) {
    console.error("Fetch enquiries error:", error.message);

    res.status(500).json({
      message: "Failed to fetch enquiries",
    });
  }
});

// Update enquiry status
router.patch("/enquiries/:id/status", authMiddleware, async (req, res) => {
  try {
    const { status } = req.body;

    const allowedStatus = ["New", "Contacted", "Completed"];

    if (!allowedStatus.includes(status)) {
      return res.status(400).json({
        message: "Invalid status",
      });
    }

    const enquiry = await Enquiry.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!enquiry) {
      return res.status(404).json({
        message: "Enquiry not found",
      });
    }

    res.status(200).json({
      message: "Status updated successfully",
      enquiry,
    });
  } catch (error) {
    console.error("Update status error:", error.message);

    res.status(500).json({
      message: "Failed to update status",
    });
  }
});

// Delete enquiry
router.delete("/enquiries/:id", authMiddleware, async (req, res) => {
  try {
    const enquiry = await Enquiry.findByIdAndDelete(req.params.id);

    if (!enquiry) {
      return res.status(404).json({
        message: "Enquiry not found",
      });
    }

    res.status(200).json({
      message: "Enquiry deleted successfully",
    });
  } catch (error) {
    console.error("Delete enquiry error:", error.message);

    res.status(500).json({
      message: "Failed to delete enquiry",
    });
  }
});

export default router;