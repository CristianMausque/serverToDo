const router = require('express').Router()
const TodoController = require('../controllers/todo.controller')

const { isAuthenticated } = require('../middlewares/verifyToken.middleware')

const {
    getTodosByCreator,
    createTodo,
    editTodoById,
    deleteTodoById
} = require('../controllers/todo.controller')

router.get("/:id", isAuthenticated, getTodosByCreator)

router.post("/save", isAuthenticated,  createTodo)

router.put("/:id/edit", isAuthenticated,  editTodoById)

router.delete("/:id/delete", isAuthenticated,  deleteTodoById)

module.exports = router