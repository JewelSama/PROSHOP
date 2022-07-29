const {admin, protect} = require('../middleware/authMiddleware')
const {deleteProduct, createProductReview, createProduct, updateProduct} = require('../controllers/productController')
const express = require('express')



const router = express.Router()

const  {getProducts, getProductById} = require('../controllers/productController')


router.route('/').get(getProducts).post(protect, admin, createProduct)

router.route('/:id/reviews').post(protect, createProductReview)

router.route('/:id')
.get(getProductById)
.delete(protect, admin, deleteProduct)
.put(protect, admin, updateProduct)



module.exports = router;