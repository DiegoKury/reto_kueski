const express = require('express');
const router = express.Router();

const administratorCtrl = require('../controllers/administratorController');

router.get('/', administratorCtrl.getAdministrators);
router.post('/', administratorCtrl.createAdministrator);
router.get('/:id', administratorCtrl.getAdministrator);
router.put('/:id', administratorCtrl.updateAdministrator);
router.delete('/:id', administratorCtrl.deleteAdministrator);

module.exports = router;