const express = require ("express");
const app = express();
const mongoose = require ("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const bodyparcer = require ( "body-parser");
const bodyParser = require("body-parser");
app.use(bodyParser.json()); 

const postrutas = require("./rutas/post");  
app.use("./servicios",postrutas);


 mongoose.connect("mongodb+srv://alvarocotrino:zf8Vu0JQkqvbqdKj@cluster0.dxd8od2.mongodb.net/lunes?retryWrites=true&w=majority&appName=Cluster0",
  { // <--- Este es el segundo argumento
    useNewUrlParser: true,
    useUnifiedTopology: true
  });


  const connection = mongoose.connection; // creo conexion a la base de datos
  connection.once("open", () =>  {
    console.log ("MongoDB conexion de la base de daatos establecidad");
  });

   app.listen(10000);// puerto por donde escucha
 
