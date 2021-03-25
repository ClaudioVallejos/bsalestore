const express = require('express');
const router = express.Router();

const { showCategories, showOneCategory, showSpecificCategory } = require('../controllers/category.controller');

router.route('/categories').get(showCategories);
router.route('/category/:id').get(showOneCategory);
router.route('/category/search/:inputText').get(showSpecificCategory);

module.exports = router;