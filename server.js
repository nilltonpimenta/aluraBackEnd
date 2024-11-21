import express from "express";
import routes from "./src/routes/postsRoutes.js";

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

routes(app);

app.listen(3000, () => {
    console.log("Servidor escutando...");
});
// Inicia o servidor na porta 3000 e exibe uma mensagem no console.

// function buscaPostPorID(id) {
//     return posts.findIndex((post) => {
//         return post.id === Number(id);
//     });
// }

// app.get("/posts/:id", (requisicao, resposta) => {
//     const index = buscaPostPorID(requisicao.params.id);
//     resposta.status(200).json(posts[index]);
// });
