const bcrypt = require('bcryptjs');
require('dotenv').config()

SALT = parseInt(process.env.SALT);


function Hash(password) {
    if (password) return bcrypt.hashSync(password, SALT)
}


function Compare(password ,hash) {
    if(password && hash) return bcrypt.compareSync(password, hash);
}




module.exports = {
    Hash,
    Compare
}