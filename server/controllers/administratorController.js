const Administrator = require('../models/administrator');
const administratorCtrl = {};

// GET /administrators
administratorCtrl.getAdministrators = async (req, res) => {
  try {
    const administrators = await Administrator.find();
    res.json(administrators);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// POST /administrators
administratorCtrl.createAdministrator = async (req, res) => {
  const { employee_number, have_access } = req.body;

  try {
    const newAdministrator = new Administrator({
      employee_number,
      have_access
    });

    await newAdministrator.save();

    res.status(201).json({
      message: 'Administrator created',
      administrator: newAdministrator
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// GET /administrators/:id
administratorCtrl.getAdministrator = async (req, res) => {
  try {
    const administrator = await Administrator.findById(req.params.id);

    if (!administrator) {
      return res.status(404).json({ message: 'Administrator not found' });
    }

    res.json(administrator);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// PUT /administrators/:id
administratorCtrl.updateAdministrator = async (req, res) => {
  const { employee_number, have_access } = req.body;

  try {
    const updatedAdministrator = await Administrator.findByIdAndUpdate(
      req.params.id,
      { employee_number, have_access },
      { new: true }
    );

    if (!updatedAdministrator) {
      return res.status(404).json({ message: 'Administrator not found' });
    }

    res.json({
      message: 'Administrator updated',
      administrator: updatedAdministrator
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// DELETE /administrators/:id
administratorCtrl.deleteAdministrator = async (req, res) => {
  try {
    const deletedAdministrator = await Administrator.findByIdAndDelete(
      req.params.id
    );

    if (!deletedAdministrator) {
      return res.status(404).json({ message: 'Administrator not found' });
    }

    res.json({
      message: 'Administrator deleted',
      administrator: deletedAdministrator
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = administratorCtrl;
