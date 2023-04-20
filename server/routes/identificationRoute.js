const express = require('express');
const router = express.Router();
const identificationCtrl = require('../controllers/identificationController');

// GET all identifications
router.get('/', identificationCtrl.getIdentifications);

// GET a single identification
router.get('/:id', identificationCtrl.getIdentification);

// CREATE an identification
router.post('/', identificationCtrl.createIdentification);

// UPDATE an identification
router.put('/:id', identificationCtrl.updateIdentification);

// DELETE an identification
router.delete('/:id', identificationCtrl.deleteIdentification);

module.exports = router;