const express = require('express');
const app = express();
const path = require('path');
const handlebars = require("express-handlebars");
const port = 3000;
const db = require('./config/db');
const methodOverride = require('method-override');
const route = require('./routes');
// Connect to Db
db.connect();


//template engine
app.engine('hbs', 
  handlebars({
    extname: '.hbs',
    helpers:{
      sum: (a,b) => a+b,
    }
  }),
);
app.set('view engine','hbs');
app.set('views',path.join(__dirname,'resources/views'));

app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname,'public')));
// giúp cho mình submit từ form lên
app.use(express.urlencoded({
  extended:true
}));
app.use(express.json());

// XMLHttpRequest , ajax 
//routes init
route(app);


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
})