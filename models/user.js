const { model, Schema } = require('mongoose')
const jwt = require('jsonwebtoken')


const userSchema = new Schema ({
    firstName: { required: true, type: String },
    lastName: { required: true, type: String },
    studentIds: [{ type: String}],
    email: { type: String, unique: true },
    password: { required: true, type: String },
    role: { required: true, type: String },
}, {
    timestamps: true
})

userSchema.methods.generateAuthToken = async function() {
    const token = jwt.sign({ _id: this._id, user: this }, process.env.SECRET)
    return token
}

const User = model('User', userSchema)

module.exports = User