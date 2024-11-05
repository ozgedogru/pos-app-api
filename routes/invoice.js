const Invoice = require("../models/Invoice.js");
const express = require("express");
const router = express.Router();

router.get("/get-all", async (req, res) => {
  try {
    const invoices = await Invoice.find();
    res.status(200).json(invoices);
  } catch (error) {
    console.log(error);
  }
});

router.post("/create-invoice", async (req, res) => {
  try {
    const newInvoice = new Invoice(req.body);
    await newInvoice.save();
    res.status(200).json("Invoice created successfully.");
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
