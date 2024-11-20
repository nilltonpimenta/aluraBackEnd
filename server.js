import express from "express";

import conectarAoBanco from "./src/config/dbconfig.js";
// Importa a função para conectar ao banco de dados, definida no arquivo dbconfig.js.

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
// Conecta ao banco de dados usando a string de conexão obtida da variável de ambiente.

// const posts = [
//     {
//         id: 1,
//         descricao: "Uma foto teste",
//         imagem: "https://placecats.com/millie/300/150",
//     },
//     {
//         id: 2,
//         descricao: "Gato fazendo yoga",
//         imagem: "https://placecats.com/millie/300/150",
//     },
//     {
//         id: 3,
//         descricao: "Gato fazendo panqueca",
//         imagem: "https://placecats.com/millie/300/150",
//     },
// ];

const app = express();
//Cria uma instância do aplicativo Express.

app.use(express.json());
// Habilita o parsing de corpos de requisição no formato JSON.

app.listen(3000, () => {
    console.log("Servidor escutando...");
});
// Inicia o servidor na porta 3000 e exibe uma mensagem no console.

async function getTodosPosts() {
    const db = conexao.db("imersao-instabytes");
    // Seleciona o banco de dados "imersao-instabytes".

    const colecao = db.collection("posts");
    // Seleciona a coleção "posts" dentro do banco de dados.

    return colecao.find().toArray();
    // Retorna todos os documentos da coleção como um array.
}

app.get("/posts", async (requisicao, resposta) => {
    const posts = await getTodosPosts();
    // Obtém todos os posts chamando a função getTodosPosts.
    resposta.status(200).json(posts);
    // Envia uma resposta HTTP com status 200 (OK) e os posts no formato JSON.

    // resposta.status(200).send("Boas vindas à imersão!");
    // Linha editada
});

// function buscaPostPorID(id) {
//     return posts.findIndex((post) => {
//         return post.id === Number(id);
//     });
// }

// app.get("/posts/:id", (requisicao, resposta) => {
//     const index = buscaPostPorID(requisicao.params.id);
//     resposta.status(200).json(posts[index]);
// });
