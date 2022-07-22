const express = require('express')
const {protect} = require('../middleware/authMiddleware')

const router = express.Router()
const {authUser, getUserProfile} = require('../controllers/userController')
// const  = require('../controllers/userController')


router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile)





module.exports = router;