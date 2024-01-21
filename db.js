const mongoose = require('mongoose')
const URL_MONGO = "mongodb+srv://test:1234@cluster0.onb7tvx.mongodb.net/aviad?retryWrites=true&w=majority"


async function connect() {
    try {
        mongoose.connect(URL_MONGO)
            .then(res => console.log("**** DB - Connection Success ****"))

        
    }
    catch (err) {
        console.log("DB - Error : ", err)
    }
}

module.exports = { connect }