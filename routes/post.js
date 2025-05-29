const express = require("express"); // importo express
const rutas = express.Router();
const Post = require('../models/Post'); // importa el modelo correctamente
// GET todos los posts
    rutas.get('/',  async (_req, res) => {
    try {
        const posts = await Post.find(); // busca todos los posts
        res.json(posts); // devuelve los posts en formato JSON
    } catch (err) {
        res.status(500).json({ message: err.message }); // maneja errores
    } 
});
// GET un post por isbn
rutas.get('/:isbn', async (req, res) => {
    try {
        const post = await Post.findOne({ isbn: req.params.isbn }); 
        res.json(post);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
    // POST crear un nuevo post
rutas.post('/', async (req, res) => {
    const nuevoisbn = new Post({

        isbn: req.body.isbn,
        titulo: req.body.titulo,
        autor: req.body.autor,
        genero: req.body.genero
        
    });
    try {
        const savedPost = await nuevoisbn.save();
        res.json(savedPost);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
rutas.patch('/:isbn', async (req, res) => { //actualizar un post
    try {
        const updatedPost = await Post.findOneAndUpdate(
            { isbn: req.params.isbn },
            {
                $set: {
                    isbn: req.body.isbn,
                    titulo: req.body.titulo,
                    autor: req.body.autor,
                    genero: req.body.genero
                }
            },
            { new: true }
        );
        res.json(updatedPost);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


rutas.delete('/:isbn', async (req, res) => { 
    try {
        const post = await Post.findOneAndDelete({ isbn: req.params.isbn});
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json({ message: 'Post deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = rutas; // exporta el router correctamente