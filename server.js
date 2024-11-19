import express from "express";

const posts = [
    {
        id: 1,
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150",
    },
    {
        id: 2,
        descricao: "Gato fazendo yoga",
        imagem: "https://placecats.com/millie/300/150",
    },
    {
        id: 3,
        descricao: "Gato fazendo panqueca",
        imagem: "https://placecats.com/millie/300/150",
    },
];

const app = express(); // Usar o express
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando...");
}); // Escutar o servidor na porta 3000

app.get("/posts", (requisicao, resposta) => {
    resposta.status(200).json(posts);
    // resposta.status(200).send("Boas vindas à imersão!");
});

function buscaPostPorID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id);
    });
}

app.get("/posts/:id", (requisicao, resposta) => {
    const index = buscaPostPorID(requisicao.params.id);
    resposta.status(200).json(posts[index]);
});
