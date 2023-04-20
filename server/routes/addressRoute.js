const express = require('express');
const router = express.Router();
const addressController = require('../controllers/addressController');

// GET all addresses
router.get('/', addressController.getAddresses);

// GET a single address
router.get('/:id', addressController.getAddress);

// CREATE an address
router.post('/', addressController.createAddress);

// UPDATE an address
router.put('/:id', addressController.updateAddress);

// DELETE an address
router.delete('/:id', addressController.deleteAddress);

module.exports = router;
