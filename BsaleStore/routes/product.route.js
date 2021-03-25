const express = require('express');
const router = express.Router();

const { showAllProducts, showOneProduct, showSpecificProduct } = require('../controllers/product.controller');

router.route('/').get(showAllProducts);
router.route('/product/:id').get(showOneProduct);
router.route('/product/search/:inputText').get(showSpecificProduct);


module.exports = router;