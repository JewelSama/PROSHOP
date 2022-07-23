const express = require('express')
const {protect} = require('../middleware/authMiddleware')

const router = express.Router()
const {authUser, getUserProfile, registerUser, updateUserProfile} = require('../controllers/userController')
// const  = require('../controllers/userController')


router.route('/').post(registerUser)
router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)





module.exports = router;