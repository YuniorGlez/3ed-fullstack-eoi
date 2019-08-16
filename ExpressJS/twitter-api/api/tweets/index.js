const router = require('express').Router();
const controller = require('./controller')

router.get('/', controller.getAll);
router.get('/:id', controller.getOne);
router.post('/', controller.createOne);
router.put('/', controller.updateOne);
router.delete('/:id', controller.removeOne);

module.exports = router;