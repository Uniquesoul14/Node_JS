const express = require('express');
const router = express.Router();
const todoCtrl = require('../controllers/todoController');

router.get('/', todoCtrl.getAll);
router.get('/:id', todoCtrl.getOne);
router.post('/', todoCtrl.create);
router.put('/:id', todoCtrl.update);
router.delete('/:id', todoCtrl.remove);

router.post('/_reset', todoCtrl.reset);

module.exports = router;
