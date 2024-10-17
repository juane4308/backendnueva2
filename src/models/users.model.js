const { Schema, model } = require('mongoose')
const userCollection = 'users'


const userSchema = new Schema({
    first_name: String,
    last_name: String,
    email: {
        type: String,
        unique: true
    }
})

const userModel = model(userCollection, userSchema)

module.exports = {
    userModel
}