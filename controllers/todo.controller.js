const Todo = require('../models/Todo.model')
const User = require('../models/User.model')

const getTodosByCreator = (req, res, next) => {

  const { _id: creator } = req.payload

    Todo
      .find({ creator: creator })
      .then(response => res.json(response))
      .catch(err => next(err))
}

const createTodo = (req, res, next) => {

  const { todoData: title, done } = req.body
  const { _id: creator } = req.payload

  Todo
    .create({ title, done, creator })
    .then(response => res.json(response))
    .catch(err => next(err))
}

const editTodoById = (req, res, next) => {

  const {id} = req.params
  // const todo_id = '6488902067cfab246a600c3b'
  const { title, done, creator } = req.body
console.log(id, "este req.params es el de edit")

  Todo
    .findByIdAndUpdate(id, { title, done, creator }, { new: true })
    .then(response => res.json(response))
    .catch(err => next(err))

}

const deleteTodoById = (req, res, next) => {

  const { id } = req.params

  Todo
    .findByIdAndDelete({ _id: id })
    .then(response => res.json(response))
    .catch(err => next(err))
}

module.exports = {
  getTodosByCreator,
  createTodo,
  editTodoById,
  deleteTodoById
}