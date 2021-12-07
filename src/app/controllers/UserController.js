const bcrypt = require('bcryptjs');

const User = require('../models/user');
const {mongooseToObject, multipleMongooseToObject} = require('../../util/mongoose');
class UserController {
    //[GET] /Users/register
    async register(req, res, next){
        try {
            const {first_name, last_name, email, password} = req.body;

            if (!(email && password && first_name && last_name)) {
                res.status(400).send("All input is required");
            }

            const oldUser = await User.findOne({ email });
            if (oldUser) {
                return res.status(409).send("User Already Exist. Please Login");
            }

            encryptedPassword = await bcrypt.hash(password, 10);
            const user = await User.create({
                first_name,
                last_name,
                email: email.toLowerCase(),
                password: encryptedPassword,
            })

            const token = jwt.sign(
                { user_id: user._id, email },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h"
                }
            )
            user.token = token;

            res.status(201).json(user);
        } catch(err) {
            console.log(err)
        }
        // res.render('auth/register');
    }
    // //[GET] /Users/login
    // login(req,res,next){
    //     res.render('auth/login');
    // }
    // saved(req,res,next){
    //     const user = new User(req.body);
    //     user.save()
    //         .then(()=>res.send('thành công'))
    //         .catch(next);
    // }
}


module.exports = new UserController;