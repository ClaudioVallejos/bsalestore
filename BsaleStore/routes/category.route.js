const express = require('express');
const router = express.Router();

const { getCategory, getOneCategory } = require('../controllers/cateogry.controller');

router.route('/category').get(getCategory);
router.route('/category/:id').get(getOneCategory);


module.exports = router;