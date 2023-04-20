const Identification = require('../models/identification');
const identificationCtrl = {};

identificationCtrl.getIdentifications = async (req, res) => {
  const identifications = await Identification.find();
  res.json(identifications);
};

identificationCtrl.createIdentification = async (req, res) => {
  const { userId, identificationTypeId, identificationNumber } = req.body;
  const identification = new Identification({
    userId,
    identificationTypeId,
    identificationNumber,
  });
  await identification.save();
  res.json({ status: 'Identification Saved' });
};

identificationCtrl.getIdentification = async (req, res) => {
  const identification = await Identification.findById(req.params.id);
  res.json(identification);
};

identificationCtrl.updateIdentification = async (req, res) => {
  const { userId, identificationTypeId, identificationNumber } = req.body;
  const newIdentification = {
    userId,
    identificationTypeId,
    identificationNumber,
  };
  await Identification.findByIdAndUpdate(req.params.id, {
    $set: newIdentification,
  }, { new: true });
  res.json({ status: 'Identification Updated' });
};

identificationCtrl.deleteIdentification = async (req, res) => {
  await Identification.findByIdAndRemove(req.params.id);
  res.json({ status: 'Identification Deleted' });
};

module.exports = identificationCtrl;
