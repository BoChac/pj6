const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');
const meRouter = require('./me');
const authRouter = require('./auth');

function route(app){
    
    app.use('/news', newsRouter);
    
    app.use('/courses', coursesRouter);

    app.use('/auth',authRouter);

    app.use('/me',meRouter);
    
    app.use('/', siteRouter);

    

    // app.post('/search', (req, res) => {
    //   console.log(req.body );
    //   res.send('');
    // });
}

module.exports = route;
