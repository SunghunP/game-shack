const express = require('express');
const router = express.Router();
const gameCtrl = require('../controllers/games')

router.get('/', gameCtrl.index);
router.get('/new', gameCtrl.new);
router.get('/:id/edit', gameCtrl.edit);
router.get('/:id', gameCtrl.show);
router.put('/:id', gameCtrl.update);
router.post('/', gameCtrl.create);
router.delete('/:id', gameCtrl.delete);

module.exports = router;