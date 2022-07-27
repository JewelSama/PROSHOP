const express = require('express')
const {protect, admin} = require('../middleware/authMiddleware')

const router = express.Router()
const {authUser, getUserProfile, deleteUser, registerUser, updateUserProfile, getUsers} = require('../controllers/userController')
// const  = require('../controllers/userController')


router.route('/').post(registerUser)
router.get('/', protect, admin, getUsers)
router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)
router.route('/:id').delete(protect, admin, deleteUser)




module.exports = router;