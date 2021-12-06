const course = require('../models/Course');
const {multipleMongooseToObject} = require('../../util/mongoose');
class SiteController {

    //[GET] /Site
    index(req, res, next){

        // course.find({}, function (err, courses) {
        //     if(!err) {
        //         res.json(courses);
        //     }else{
        //         res.status(400).json('erroroor!!');
        //     }
        // });
        
        course.find({})
            .then(courses => {
                res.render('home',{courses : multipleMongooseToObject(courses)})
            })
            .catch(next); //error => next(error)
        // res.render('home');
    }

    //[GET] /search
    search(req,res){
        res.render('search');
    }

}


module.exports = new SiteController;

