const express = require ("express");
const app = express();
app.get("/", (req, res) => { // <-- Abre con {
  res.send(" servidor funcionando");
  }); // <-- Cierra con }
 app.listen(10000);
 
