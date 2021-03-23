const express = require('express');
const router = express.Router();

const { getProduct, getOneProduct } = require('../controllers/product.controller');

router.route('/').get(getProduct);
router.route('/product/:id').get(getOneProduct);


module.exports = router;