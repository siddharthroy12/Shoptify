import express from 'express'
import {
    authUser,
    getUserProfile,
    updateUserProfile,
    registerUser,
    getUsers,
    deleteUsers,
    getUsersById,
    updateUser
} from '../controllers/userController.js'
import { admin, protect } from '../middleware/authMiddleware.js'
const router = express.Router()

router.route('/').post(registerUser).get(protect, admin, getUsers)
router.post('/login', authUser)
router.route('/profile')
    .get(protect, getUserProfile)
    .put(protect , updateUserProfile)
router.route('/:id')
    .delete(protect, admin, deleteUsers)
    .get(protect, admin, getUsersById)
    .put(protect, admin, updateUser)
export default router