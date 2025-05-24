const express = require("express");
const rutas = express.Router();
const Post = require( "../model/Post"); //importa el modelo

 
// atrapa los errores  que se presentan el trycatch...
// la aplicacionse se sigue ejecutando no se detienen hasta 
// que la peticion  que estoy haciendo con el request se realize.
rutas.get("/", async (req, res) => { // el get me trae todo los pots que tiene la BD
    try { 
        const post = await Post.find();
        res.json(post);
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
});



rutas.get("/:postId", async (req, res) => { // este solo me llama un post id
    try {
        const post = await Post.findById(req.params.postId); // 1. Corregido findById y 2. Quitado paréntesis extra

        if (!post) { // 3. CORREGIDO: Si el post NO se encuentra (es null/undefined)
            return res.status(404).json({ message: "Post not found" }); // 4. Corregido mensaje
        }

        // Si el post se encuentra, lo enviamos como respuesta
        res.json(post);

    } catch (err) {
        
        res.status(500).json({ message: err.message });
    }
});
    
module.exports = rutas; // exporto la ruta

