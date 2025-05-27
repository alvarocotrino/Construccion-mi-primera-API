const mongoose = require("mongoose"); 
const PostSchemas = new mongoose.Schema({
    placa:{
          type: String,
          required: true
    },
    modelo:{
          type: String,
          required: true
    },
    marca:{
        type: String,
        required: true
    },
    condicion:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Post", PostSchemas); // exporta el modelo