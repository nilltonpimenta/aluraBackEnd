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
    // Habilita o parsing de corpos de requisição no formato JSON para processar dados enviados pelo cliente
    app.use(express.json());

    // Rota GET para listar todos os posts (obter dados do banco de dados)
    app.get("/posts", listarPosts);

    // Rota POST para criar um novo post (armazenar dados no banco de dados)
    app.post("/posts", postarNovoPost);

    // Rota POST para upload de imagem
    //  - upload.single("imagem") configura o Multer para lidar com um único arquivo
    //    denominado "imagem" no corpo da requisição
    //  - uploadImagem é a função que processa a imagem enviada
    app.post("/upload", upload.single("imagem"), uploadImagem);
};

export default routes;
