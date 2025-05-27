const express = require("express"); // importo express
const rutas = express.Router();
const Post = require('../models/Post'); // importa el modelo correctamente
// GET todos los posts
    rutas.get('/', async (_req, res) => {
    try {
        const posts = await Post.find(); // busca todos los posts
        res.json(posts); // devuelve los posts en formato JSON
    } catch (err) {
        res.status(500).json({ message: err.message }); // maneja errores
    } 
});
// GET un post por placa
rutas.get('/:placa', async (req, res) => {
    try {
        const post = await Post.findOne(req.params.placa); 
        res.json(post);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
    // POST crear un nuevo post
rutas.post('/', async (req, res) => {
    const nuevaplaca = new Post({
        placa: req.body.placa,
        modelo: req.body.modelo,
        marca: req.body.marca,
        condicion: req.body.condicion
    });
    try {
        const savedPost = await nuevaplaca.save();
        res.json(savedPost);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
rutas.patch('/:placa', async (req, res) => {
    try {
        const updatedPost = await Post.findOneAndUpdate(
            {
                $set: {
                    placa: req.body.placa,
                    modelo: req.body.modelo,
                    marca: req.body.marca,
                    condicion: req.body.condicion
                }
            },
        );
        res.json(updatedPost);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
rutas.delete('/:placa', async (req, res) => { //eliminar un post
    try {
        const post = await Post.findondeanddelete(req.params.postId);
        await post.remove();
        res.json({ message: "Post deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
module.exports = rutas; // exporta el router correctamente