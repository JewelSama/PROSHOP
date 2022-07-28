const {admin, protect} = require('../middleware/authMiddleware')
const {deleteProduct} = require('../controllers/productController')
const express = require('express')



const router = express.Router()

const  {getProducts, getProductById} = require('../controllers/productController')


router.route('/').get(getProducts)

router.route('/:id').get(getProductById).delete(protect, admin, deleteProduct)




module.exports = router;