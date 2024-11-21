import { getTodosPosts } from "../models/postsModels.js";

export async function ListasPosts(requisicao, resposta) {
    const posts = await getTodosPosts();
    // Obtém todos os posts chamando a função getTodosPosts.
    resposta.status(200).json(posts);
    // Envia uma resposta HTTP com status 200 (OK) e os posts no formato JSON.

    // resposta.status(200).send("Boas vindas à imersão!");
    // Linha editada
}
