import express from "express";
import Enquiry from "../models/Enquiry.js";

const router = express.Router();

// Submit enquiry
router.post("/", async (req, res) => {
  try {
    const {
      name,
      companyName,
      email,
      phone,
      product,
      quantity,
      requirement,
    } = req.body;

    // Required fields check
    if (!name || !email || !phone || !product || !requirement) {
      return res.status(400).json({
        message: "Please fill all required fields",
      });
    }

    const enquiry = await Enquiry.create({
      name,
      companyName,
      email,
      phone,
      product,
      quantity,
      requirement,
    });

    res.status(201).json({
      message: "Enquiry submitted successfully",
      enquiry,
    });
  } catch (error) {
    console.error("Enquiry error:", error.message);

    res.status(500).json({
      message: "Failed to submit enquiry",
    });
  }
});

export default router;