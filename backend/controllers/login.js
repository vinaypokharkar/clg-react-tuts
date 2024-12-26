const loginController = (req,res) => {
    const {email, password} = req.body;
    console.log(`email is ${email}`);
    console.log(`password is ${password}`);

    res.send("data recieved")
}

module.exports = loginController;

