

var mongoose = require('mongoose');
var app = require('./app')
var port = 3700

mongoose.set('strictQuery', false);
mongoose.set('bufferCommands', false);
mongoose.connect('mongodb://127.0.0.1:27017/portafolio')
        .then(()=> {
            console.log("Se ha establecido la conexion con la base de datos")
            app.listen(port, ()=>{
                console.log("Servidor corriendo correctamente en la url: localhost:3700")
            })
        })
        .catch((err)=> console.log("error:", err))
