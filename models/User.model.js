const { Schema, model } = require("mongoose")
const Todo = require("./Todo.model")

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
      trim: true,
      lowercase: true,
      minlength: [2, 'The username must be 2 characters minimum'],
      maxlength: [15, 'The username must be 15 characters maximum'] 
    },
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      trim: true,
      lowercase: true
    },
    password: {
      type: String,
      // required: [true, 'Password is required.'],
      minlength: [4, 'Password must be at least 4 characters minimum'],
      maxlength: [20, 'Password must be 20 caracteres maximum']
    },
    avatar: {
      type: String,
      default: "https://i.stack.imgur.com/l60Hf.png"
    },
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER"
    },
    tasks: [{
      type: Schema.Types.ObjectId,
      ref: "Todo",
    }]
  },
  {
    timestamps: true
  }
)

// userSchema.pre('save', function (next) {

//   const saltRounds = 10
//   const salt = bcrypt.genSaltSync(saltRounds)
//   const hashedPassword = bcrypt.hashSync(this.password, salt)
//   this.password = hashedPassword

//   next()
// })


// userSchema.methods.signToken = function () {
//   const { _id, username, email, profileImg } = this
//   const payload = { _id, username, email, profileImg }

//   const authToken = jwt.sign(
//     payload,
//     process.env.TOKEN_SECRET,
//     { algorithm: 'HS256', expiresIn: "6h" }
//   )

//   return authToken
// }


// userSchema.methods.validatePassword = function (candidatePassword) {
//   return bcrypt.compareSync(candidatePassword, this.password)
// }


const User = model("User", userSchema)

module.exports = User