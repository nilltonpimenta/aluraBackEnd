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
    // Cria um novo objeto de post com informações básicas
    const novoPost = {
        descricao: "", // Descrição do post (pode ser preenchida posteriormente)
        imagemURL: requisicao.file.originalname, // Nome original do arquivo da imagem
        alt: "", // Texto alternativo para a imagem (descrição para acessibilidade)
    };

    // Tenta realizar o upload da imagem e criar o post
    try {
        const postCriado = await criarPost(novoPost); // Cria o post no banco de dados
        const imagemAtualizada = `uploads/${postCriado.insertedId}.jpg`; // Gera o novo nome da imagem
        fs.renameSync(requisicao.file.path, imagemAtualizada); // Renomeia a imagem com o novo nome
        resposta.status(200).json(postCriado); // Retorna o post criado com sucesso
    } catch (error) {
        // Captura qualquer erro que possa ocorrer durante o processo
        console.error(error.message); // Imprime a mensagem de erro no console
        resposta.status(500).json({ Erro: "Falha na requisição" }); // Retorna uma mensagem de erro para o cliente
    }
}
