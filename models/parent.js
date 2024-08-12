const { model, Schema } = require('mongoose')
const jwt = require('jsonwebtoken')


const parentSchema = new Schema ({
    studentId: { required: true, type: String },
    password: { required: true, type: String },
    role: { required: true, type: String },
    studentFirstName: { required: true, type: String },
    studentLastName: { required: true, type: String },
    guardOneFirstName: { required: true, type: String },
    guardOneLastName: { required: true, type: String },
    guardOneEmail: { required: true, type: String, unique: true },
    guardOnePhone: { required: true, type: String },
    guardTwoFirstName: { type: String },
    guardTwoLastName: { type: String },
    guardTwoEmail: { type: String },
    guardTwoPhone: { type: String },
    roomParent: { type: Boolean, default: false },
    transportation: {type: String},
    carTagNumber: {type: String},
    likes: {type: String},
    dislikes: {type: String},
    allergies: {type: String},
    notes: {type: String},
}, {
    timestamps: true
})

parentSchema.methods.generateAuthToken = async function() {
    const token = jwt.sign({ _id: this._id, parent: this }, process.env.SECRET)
    return token
}

const Parent = model('Parent', parentSchema)

module.exports = Parent