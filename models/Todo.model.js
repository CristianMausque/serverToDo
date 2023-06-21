const { Schema, model } = require("mongoose")

const todoSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            maxlength: [150, 'Task must be 150 caracteres maximum']
        },
        done: {
            type: Boolean,
            default: false
        },
        creator: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    }
)

const Todo = model("Todo", todoSchema)

module.exports = Todo