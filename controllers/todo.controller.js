const Todo = require('../models/Todo.model')

const getTodosByCreator = (req, res, next) => {

    const { creator } = req.params
  
    Todo
      .find({ creator })
      .then(response => res.json(response))
      .catch(err => next(err))
}

const createTodo = (req, res, next) => {

    const { title, done, creator } = req.body
    const { _id: owner } = req.payload

    Todo
        .create({ title, done, creator })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const editTodoById = (req, res, next) => {

  const {todo_id} = req.params

  // const todo_id = '6488902067cfab246a600c3b'
  const { title, done, creator } = req.body

  console.log(todo_id)

  Todo
    .findByIdAndUpdate(todo_id, { title, done, creator }, { new: true })
    .populate('creator')
    .then(response => res.json(response))
    .catch(err => next(err))

}

const deleteTodoById = (req, res, next) => {

  const { todo_id } = req.params
  // const todo_id = '6488fa64933e151d1f3cebde'
  //testing routes with postman
  Todo
    .findByIdAndDelete(todo_id)
    .then(response => res.json(response))
    .catch(err => next(err))
}

  module.exports = {
    getTodosByCreator,
    createTodo,
    editTodoById,
    deleteTodoById
}