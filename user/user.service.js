
const userController = require('./user.controller');

async function addNewUser(data) {

    // validation 
    if (!data?.email) throw { code: 400, msg: "email input error" }

    // if email exist
    let user = await userController.readOne({ email: data.email })
    if (user) throw { code: user.isActive ? 400 : 450, msg: "user is exist" }

    // map to object (by schema)
    let newUserMapped = await handleValidation(data)

    let result = await userController.create(newUserMapped)
    return result
}

async function handleValidation(reqBody) {
    // password > 6 digits /  a-z + numbers

    return {
        fName: reqBody.fName,
        lName: reqBody.lName,
        email: reqBody.email,
        password: reqBody.password
    }
}

module.exports = {addNewUser}

// const starter = async () => {
//     const db = require('../DL/db')
//     await db.connect()

//     // let result = await create(user)
//     // let result = await read()
//     // let result = await readOne({email: 'haim_l@gmail.com'})
//     // let result = await updateById("65ad3e4a6e93ef4bb31c6df6", {password: 'Aa123456'})
//     // let result = await del("65ad3e4a6e93ef4bb31c6df6")


//     let reqBody = {
//         "fName": "haim",
//         "lName": "levi",
//         "email": "haim_l@gmail.com",
//         "password": "32saw2",

//         "permission": "admin",
//         "key": "fetch('myUrlServer',{...localStorage})"
//     }

//     let result = await addNewUser(reqBody)
//     console.log("result", result);

//     // result.forEach(u => console.log(u.email, u.lName, u.fName))
// }



// starter()




// let user = {
//     fName: "haim",
//     lName: "levi",
//     email: "haim_l@gmail.com",
//     password: "32saw2"
// }


