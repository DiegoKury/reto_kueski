const express = require('express');
const router = express.Router();
const requestCtrl = require('../controllers/requestController');

// GET all requests
router.get('/', requestCtrl.getRequests);

// GET a single request by ID
router.get('/:id', requestCtrl.getRequestById);

// CREATE a new request
router.post('/', requestCtrl.createRequest);

// UPDATE an existing request
router.put('/:id', requestCtrl.updateRequest);

// DELETE a request
router.delete('/:id', requestCtrl.deleteRequest);

module.exports = router;
