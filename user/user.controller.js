const userModel = require('./user.model')

async function create(data) {
    return await userModel.create(data)
}

async function read(filter={}) { 
    return await userModel.find({...filter,isActive:true})
}

async function readOne(filter={}) { 
    return await userModel.findOne(filter)
}

async function update(filter,data) { 
    return await userModel.updateOne(filter,data);
}
async function updateById(id,data) { 
    return await userModel.updateOne({_id:id},data);
}

async function del(id) { 
    return await updateById(id,{isActive: false})
}

module.exports = { create, read,readOne, update,updateById, del }


