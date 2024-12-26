const userModel = require("../models/user");


const loginController = async(req,res) => {
    const {email, password} = req.body;

    const user = await userModel.findOne({email:email, password:password});

    if(user) {
        return res.json({success: 'user found'})
    } else {
        return res.json({failure: 'user not found'})
    }



    // console.log(`email is ${email}`);
    // console.log(`password is ${password}`);

    // res.send("data recieved")
}

module.exports = loginController;

