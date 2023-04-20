const Address = require('../models/address');
const addressController = {};

// GET all addresses
addressController.getAddresses = async (req, res) => {
  try {
    const addresses = await Address.find();
    res.json(addresses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET a single address
addressController.getAddress = async (req, res) => {
  try {
    const address = await Address.findById(req.params.id);
    if (!address) {
      return res.status(404).json({ message: 'Address not found' });
    }
    res.json(address);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// CREATE an address
addressController.createAddress = async (req, res) => {
  const address = new Address({
    user_id: req.body.user_id,
    country: req.body.country,
    state: req.body.state,
    city: req.body.city,
    neighborhood: req.body.neighborhood,
    street: req.body.street,
    ext_number: req.body.ext_number,
    int_number: req.body.int_number
  });

  try {
    const newAddress = await address.save();
    res.status(201).json(newAddress);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// UPDATE an address
addressController.updateAddress = async (req, res) => {
  try {
    const address = await Address.findById(req.params.id);
    if (!address) {
      return res.status(404).json({ message: 'Address not found' });
    }

    if (req.body.user_id) {
      address.user_id = req.body.user_id;
    }
    if (req.body.country) {
      address.country = req.body.country;
    }
    if (req.body.state) {
      address.state = req.body.state;
    }
    if (req.body.city) {
      address.city = req.body.city;
    }
    if (req.body.neighborhood) {
      address.neighborhood = req.body.neighborhood;
    }
    if (req.body.street) {
      address.street = req.body.street;
    }
    if (req.body.ext_number) {
      address.ext_number = req.body.ext_number;
    }
    if (req.body.int_number) {
      address.int_number = req.body.int_number;
    }

    const updatedAddress = await address.save();
    res.json(updatedAddress);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE an address
addressController.deleteAddress = async (req, res) => {
  try {
    const address = await Address.findById(req.params.id);
    if (!address) {
      return res.status(404).json({ message: 'Address not found' });
    }
    await address.remove();
    res.json({ message: 'Address deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = addressController;
