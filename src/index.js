require('dotenv').config();
const express = require('express')
const configViewEngine =require('./config/viewEngine')
const configViewStatics =require('./config/viewStatics')


const app = express()
const port = process.env.PORT || 8888;
const webRouters = require('./routes/web')
//config template enine
configViewEngine(app)

//config static file
configViewStatics(app)

app.use('/', webRouters);



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
