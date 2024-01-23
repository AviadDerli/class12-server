const mongoose = require('mongoose');
require('./item.model')
require('./user/user.model')

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user',
        required: true
    },
    items: [{
        itemId: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'item',
        },
        amount: {
            type: Number
        }
    }],
    orderDate: {
        type: Date,
        default: Date.now
    }
})

const orderModel = mongoose.model('order', orderSchema)

module.exports = orderModel

const starter = async () => {
    const db = require('./DL/db')
    await db.connect()

    // let order = {
    //     userId: "65afb19a96cf291cde57c4b9",
    //     items: [
    //         {itemId :"65a7d3ec1a89c6edce167953" , amount : 3},
    //         {itemId :"65a7d3ec1a89c6edce167960" , amount : 1},
    //         {itemId :"65a7d3ec1a89c6edce167976" , amount : 8},
    //     ]
    // }
    // let result = await orderModel.create(order)

    
    let result = await orderModel
    .find()
    .populate('userId')
    .populate('items.itemId')
    console.log(result[0].userId);
    console.log(result[0].items);
}
starter()
// ---------------------------------------------------
// ---------------------------------------------------
// ---------------------------------------------------
// ---------------------------------------------------