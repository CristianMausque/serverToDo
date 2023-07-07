const router = require('express').Router()
const UserController = require('../controllers/user.controller')

const { isAuthenticated } = require('../middlewares/verifyToken.middleware')

const {
    getAllUsers,
    getUserById,
    editUserById,
    deleteUserById
} = require('../controllers/user.controller')

router.get("/getAllUsers", isAuthenticated, getAllUsers)

router.get("/:id", isAuthenticated, getUserById)

router.put("/edit", isAuthenticated, editUserById)

router.delete("/:id/delete", isAuthenticated, deleteUserById)

module.exports = router