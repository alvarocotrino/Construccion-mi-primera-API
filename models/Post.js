const mongoose = require("mongoose"); 
const PostSchemas = new mongoose.Schema({
    placa:{
          type:String,
          required:true
    },
    modelo:{
          type:String,
          required:true
    },
    marca:{
        type:String,
        required:true
    },
    date:
    {
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model("Post", PostSchemas); // exporta el modelo