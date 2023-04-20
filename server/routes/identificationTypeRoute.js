const express = require('express');
const identificationTypeCtrl = require('../controllers/identificationTypeController');

const router = express.Router();

// GET all identification types
router.get('/', identificationTypeCtrl.getIdentificationTypes);

// POST create a new identification type
router.post('/', identificationTypeCtrl.createIdentificationType);

// GET a single identification type by ID
router.get('/:id', identificationTypeCtrl.getIdentificationType);

// PUT update an identification type by ID
router.put('/:id', identificationTypeCtrl.updateIdentificationType);

// DELETE an identification type by ID
router.delete('/:id', identificationTypeCtrl.deleteIdentificationType);

module.exports = router;