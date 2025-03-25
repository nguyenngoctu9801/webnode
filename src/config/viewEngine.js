const path = require('path');

const configViewEngine = (app) => {
    //config template enine
    app.set('views', path.join('./src', 'views'));
    app.set('view engine', 'ejs'); 

}
module.exports=configViewEngine;