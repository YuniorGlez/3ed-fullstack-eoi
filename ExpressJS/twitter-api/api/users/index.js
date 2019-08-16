const router = require('express').Router();


router.get('/', (req, res) => {
  console.log('Me hicieron un GET a /users');
  return res.json([])
})


module.exports = router;