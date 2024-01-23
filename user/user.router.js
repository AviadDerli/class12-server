
const express = require('express'),
router = express.Router();

const userService = require('./user.service')

router.post('/',async (req,res)=>{
    try{
        let result = await userService.addNewUser(req.body);
        res.send(result)
    }
    catch(err){
        res.status(err?.code ?? 400).send(err?.msg)
    }
})




module.exports = router