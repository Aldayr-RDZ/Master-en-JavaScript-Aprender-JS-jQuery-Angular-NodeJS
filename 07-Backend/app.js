'use strict'

var express = require("express")
var bodyParser = require("body-parser")
var cors = require('cors')
var app = express();


// cargar archivos de rutas
var project_routes = require('./routes/project')


// middleware
// configuracion para body parser
app.use(bodyParser.urlencoded({extended: false}))
// todo lo que llege lo transformo a json
app.use(bodyParser.json())


// CORS
app.use(cors())
// Configurar cabeceras y cors
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//     res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
//     next();
// });





// rutas
app.use('/api', project_routes);


// req ->  representa una solicitud de respuesta 
// res -> response representa la respuesta a una peticion


//exportar 
module.exports = app;