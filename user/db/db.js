const mongoose = require('mongoose')

function connect(){
    mongoose.connect(process.env.MONGO_URI).then( () => {
        console.log("User services connected successfully to mongoDB")
    }).catch(error => {
        console.log(error,"error while connecting mongoo")
    })
}
module.exports = connect;