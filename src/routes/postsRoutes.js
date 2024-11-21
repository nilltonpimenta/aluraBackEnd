import express from "express";
import { ListasPosts } from "../controllers/postControllers.js";

const routes = (app) => {
    // Habilita o parsing de corpos de requisição no formato JSON.
    app.use(express.json());

    // Rota para buscar todos os posts
    app.get("/posts", ListasPosts);
};

export default routes;
