import express from "express";

const app = express(); // Usar o express

app.listen(3000, () => {
    console.log("Servidor escutando...");
}); // Escutar o servidor na porta 3000

app.get("/api", (requisicao, resposta) => {
    resposta.status(200).send("Boas vindas à imersão!");
});
