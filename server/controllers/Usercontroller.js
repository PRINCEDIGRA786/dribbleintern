const { Resend } = require('resend')
const jwt = require('jsonwebtoken');
const JWT_SECRET = "JaiShreeRam";
const bcrypt = require('bcryptjs');
const User = require('../models/User')


const createuser = async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    let success = false;
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({
                error: "This Email already exists!!!"
            })
        }
        const secpassword = await bcrypt.hash(req.body.password, salt);
        user = await User.create({
            password: secpassword,
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            profilepic: req.body.profilepic,
            location: req.body.location,
            purpose: req.body.purpose,


        })
        const data = {
            user: {
                id: user.id
            }
        }
        success = true;
        const authToken = jwt.sign(data, JWT_SECRET)
        res.json({ "success": success, "authtoken": authToken })

    }
    catch (error) {
        console.error(error.message)
        res.status(500).send("INTERNAL SERVER ERROR")
    }


}
const getuser = async (req, res) => {

    try {
        // In the middleware we had set the req.user=data.user.....so
        const userId = req.user.id;
        //Everything to be shown except password....
        const user = await User.findById(userId).select("-password")
        // console.log(user)
        res.status(200).send(user)
    }
    catch (error) {
        console.error(error.message)
        res.status(500).send("INTERNAL SERVER ERROR")
    }
}


const sendemail = async (req, res) => {
    const resend = new Resend('re_Vy2vxZpE_JcnPMZzRnyk8whdMjpELosou');
    const { data, error } = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: [req.body.email],
        subject: "Congratulations",
        html: "<strong>Thanks for creating id on the dribble</strong>",
    });

    if (error) {
        return res.status(400).json({ "success": false, "error": error });
    }
    else {
        res.status(200).json({ "success": true, "data": data });
    }


}

module.exports = { createuser, getuser, sendemail }