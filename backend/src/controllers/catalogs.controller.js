const express = require('express');
const router = express.Router();
const authenticater = require('../middlewares/authenticate');
const catalogsModal = require('../models/catalogs.model');
const User = require('../models/user.model');

router.post('/', authenticater, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.body._id, profile: 'seller' });
    // if user is not a seller then we will throw an error
    if (!user)
      return res.status(400).json({
        status: 'failed',
        message: ' Please provide a valid user',
      });
    // if catlog as per user already exist then throw an error
    const catalog = await catalogsModal.findOne({
      seller: req.body._id,
    });
    if (catalog)
      return res.status(400).json({
        status: 'failed',
        message: ' Please provide a different user',
      });
    // else we will create a new catalog

    const newCatalog = await catalogsModal.create({
      seller: req.body._id,
    });
    res.status(201).json({ newCatalog });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

module.exports = router;
