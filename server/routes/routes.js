const express = require('express');
const {getProduct , createProduct} = require('../controllers/controllers')

const router = express.Router();

router.get('/get',getProduct)
router.post('/create',createProduct)

module.exports = router