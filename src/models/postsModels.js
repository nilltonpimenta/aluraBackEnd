import conectarAoBanco from "../config/dbconfig.js";
// Importa a função para conectar ao banco de dados, definida no arquivo dbconfig.js.

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
// Conecta ao banco de dados usando a string de conexão obtida da variável de ambiente.

//Função assíncrona para buscar todos os posts do banco de dados
export async function getTodosPosts() {
    const db = conexao.db("imersao-instabytes");
    // Seleciona o banco de dados "imersao-instabytes".

    const colecao = db.collection("posts");
    // Seleciona a coleção "posts" dentro do banco de dados.

    return colecao.find().toArray();
    // Retorna todos os documentos da coleção como um array.
}
