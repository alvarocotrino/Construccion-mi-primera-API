const express = require("express"); // importo express
const rutas = express.Router();
const Post = require('../models/Post'); // importa el modelo correctamente
// GET todos los posts
rutas.get("/", async (req, res) => {
    try { 
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
});
// GET un post por ID
rutas.get("/:postId", async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId); 
        res.json(post);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
    // POST crear un nuevo post
rutas.post("/", async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
    });
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
rutas.patch("/:postId", async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        if (req.body.title != null) {
            post.title = req.body.title;
        }
        if (req.body.description != null) {
            post.description = req.body.description;
        }
        const updatedPost = await post.save();
        res.json(updatedPost);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
rutas.delete("/:postId", async (req, res) => { //eliminar un post
    try {
        const post = await Post.findById(req.params.postId);
        await post.remove();
        res.json({ message: "Post deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
module.exports = rutas; // exporta el router correctamente