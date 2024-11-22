import { criarPost, getTodosPosts } from "../models/postsModels.js";
import fs from "fs";

export async function listarPosts(requisicao, resposta) {
    const posts = await getTodosPosts();
    // Obtém todos os posts chamando a função getTodosPosts.
    resposta.status(200).json(posts);
    // Envia uma resposta HTTP com status 200 (OK) e os posts no formato JSON.

    // resposta.status(200).send("Boas vindas à imersão!");
    // Linha editada
}

export async function postarNovoPost(requisicao, resposta) {
    const novoPost = requisicao.body;
    try {
        const postCriado = await criarPost(novoPost);
        resposta.status(200).json(postCriado);
    } catch (error) {
        console.error(error.message);
        resposta.status(500).json({ Erro: "Falha na requisição" });
    }
}

export async function uploadImagem(requisicao, resposta) {
    const novoPost = {
        descricao: "",
        imagemURL: requisicao.file.originalname,
        alt: "",
    };
    try {
        const postCriado = await criarPost(novoPost);
        const imagemAtualizada = `uploads/${postCriado.insertedId}.jpg`;
        fs.renameSync(requisicao.file.path, imagemAtualizada);
        resposta.status(200).json(postCriado);
    } catch (error) {
        console.error(error.message);
        resposta.status(500).json({ Erro: "Falha na requisição" });
    }
}
