const mongoose = require("mongoose"); 
const PostSchema = new mongoose.Schema({


    isbn: {
        type: String,
        required: true   
     },
    titulo:{
          type: String,
          required: true
    },
    autor:{
          type: String,
          required: true
    },
    genero:{
        type: String,
        required: true
    
    }
});

module.exports = mongoose.model("Post", PostSchema); // exporta el modelo
// // Este modelo 'Post' se vinculará a la colección 'posts' en MongoDB