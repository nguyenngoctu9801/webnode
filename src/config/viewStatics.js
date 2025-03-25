const path = require('path');
const express = require('express')

const configViewStatics = (app) => {
    app.use(express.static(path.join('./src','public')))
}

module.exports= configViewStatics;