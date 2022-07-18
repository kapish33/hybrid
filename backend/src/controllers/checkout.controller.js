const express = require('express');
const router = express.Router();
const authenticater = require('../middlewares/authenticate');
const checkOutSchema = require('../models/checkout.modal');

router.post('/:seller_id', authenticater, async (req, res) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(401).json({
        message: 'Unauthorized',
      });
    }
    const { seller_id } = req.params;
    const checkOut = await checkOutSchema.create({
      seller_id,
      product: req.body.product,
    });
    res.status(201).json({ checkOut });

    // res.send({ ...req.body, seller_id });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});
module.exports = router;
