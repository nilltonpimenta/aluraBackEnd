import express from "express";
import multer from "multer";
import {
    listarPosts,
    postarNovoPost,
    uploadImagem,
} from "../controllers/postControllers.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});
// Código do Multer
const upload = multer({ dest: "./uploads", storage });

const routes = (app) => {
    // Habilita o parsing de corpos de requisição no formato JSON.
    app.use(express.json());

    // Rota para buscar todos os posts
    app.get("/posts", listarPosts);
    app.post("/posts", postarNovoPost);
    app.post("/upload", upload.single("imagem"), uploadImagem);
};

export default routes;
