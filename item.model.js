const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    barcode: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 0
    },
    image: {
        type: String,
    },
    emoji: {
        type: String,
    },
    sale: {
        type: String,
    },
    category: {
        type: String,
    }
})

const itemModel = mongoose.model('item', itemSchema)

module.exports = itemModel

const starter = async () => {
    const db = require('./DL/db')
    await db.connect()

    console.log(await itemModel.find())
}
// starter()
// ---------------------------------------------------
// ---------------------------------------------------
// ---------------------------------------------------
// ---------------------------------------------------