const User = require('../models/User.model')
const Todo = require('../models/Todo.model')

const getAllUsers = (req, res, next) => {

    User
        .find()
        .sort({ username: 1 })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const getUserById = (req, res, next) => {

    const { id } = req.params
    
    User
        .findById(id)
        // .populate('tasks')
        .then(response => res.json(response))
        .catch(err => next(err))
}

const editUserById = (req, res, next) => {
    // const { id } = req.params
    // const {id} = '64888be618742fb04401f76e'
    //Routing test with postman
    const { _id } = req.payload

    const { name, surname, surname2, username, email, password, birthdate, position, avatar, role, tasks} = req.body

    User
        .findByIdAndUpdate( _id, { name, surname, surname2, username, email, password, birthdate, position, avatar, role, tasks}, { new: true })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const deleteUserById = (req, res, next) => {
    const { id } = req.params 
    const { _id } = req.payload 

    if (id !== _id) {
        return res.status(403).json({ error: 'You do not have permission to delete this user.' })
    }

    User
        .findByIdAndDelete(id)
        .then(response => res.json(response))
        .catch(err => next(err))
}

module.exports = {
    getAllUsers,
    getUserById,
    editUserById,
    deleteUserById
}