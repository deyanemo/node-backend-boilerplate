const mongoose = require('mongoose');





function connection(url) {
    return mongoose.connect(url, {useNewUrlParser:true,  useFindAndModify: false}, (err)=> {
        if(err) {
             return "Error connecting..."
        }
        return "Connected"
    });
    
}



module.exports = {
    connection
}