const mongoose = require('mongoose');
const Schema  = mongoose.Schema;



const Model = new Schema({
    title: String,
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    dateCreated: Date,
    comments: [{
        body: String,
        by: Schema.Types.ObjectId,
        ref: 'User'
    }]
})


const Products = mongoose.model('Products', Model);


module.exports = Products