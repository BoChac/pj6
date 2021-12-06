const User = require('../models/User');
const {mongooseToObject, multipleMongooseToObject} = require('../../util/mongoose');
class UserController {

    //[GET] /Users/register
    register(req,res,next){
        res.render('auth/register');
    }
    //[GET] /Users/login
    login(req,res,next){
        res.render('auth/login');
    }
    saved(req,res,next){
        const user = new User(req.body);
        user.save()
            .then(()=>res.send('thành công'))
            .catch(next);
    }
}


module.exports = new UserController;