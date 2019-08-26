const mongoose = require('mongoose');
const Schema  = mongoose.Schema;



const Model = new Schema({
    username: String,
    password: String
})


const User = mongoose.model('User', Model);


module.exports = User