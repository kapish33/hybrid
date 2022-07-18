const express = require('express');
const router = express.Router();
const authenticater = require('../middlewares/authenticate');
const productModal = require('../models/products.model');

router.post('/', authenticater, async (req, res) => {
  try {
    const product = await productModal.create(req.body);
    res.status(201).json({ product });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

module.exports = router;
