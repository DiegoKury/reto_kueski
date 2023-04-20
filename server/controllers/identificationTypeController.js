const IdentificationType = require('../models/identificationType');
const identificationTypeCtrl = {};

identificationTypeCtrl.getIdentificationTypes = async (req, res) => {
  try {
    const identificationTypes = await IdentificationType.find();
    res.json(identificationTypes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

identificationTypeCtrl.createIdentificationType = async (req, res) => {
  const identificationType = new IdentificationType({
    identification_type: req.body.identification_type,
  });
  try {
    await identificationType.save();
    res.status(201).json({ message: 'Identification type created' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

identificationTypeCtrl.getIdentificationType = async (req, res) => {
  try {
    const identificationType = await IdentificationType.findById(req.params.id);
    if (!identificationType) {
      return res.status(404).json({ message: 'Identification type not found' });
    }
    res.json(identificationType);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

identificationTypeCtrl.updateIdentificationType = async (req, res) => {
  try {
    const identificationType = await IdentificationType.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!identificationType) {
      return res.status(404).json({ message: 'Identification type not found' });
    }
    res.json({ message: 'Identification type updated' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

identificationTypeCtrl.deleteIdentificationType = async (req, res) => {
  try {
    const identificationType = await IdentificationType.findByIdAndDelete(req.params.id);
    if (!identificationType) {
      return res.status(404).json({ message: 'Identification type not found' });
    }
    res.json({ message: 'Identification type deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = identificationTypeCtrl;