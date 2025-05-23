const express = require ("express");
const app = express();
const mongoose = require ("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const bodyparcer = require ( "body-parser");
const bodyParser = require("body-parser");
app.use(bodyParser.json()); 

const postrutas = require("./rutas/post);")
app.use("./servicios",postrutas);


mongoose.connect("mongodb+srv://alvarocotrino:zf8Vu0JQkqvbqdKj@cluster0.dxd8od2.mongodb.net/lunes?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("¡Conectado a MongoDB Atlas con éxito!"))
    .catch(err => console.error("Error al conectar a MongoDB Atlas:", err));  
  
  


  //app.get("/", (req, res) => {  
  //res.send(" servidor funcionando");
  //});
 
 
  
  app.listen(10000);
 
