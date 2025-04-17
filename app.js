import express from 'express'
const app = express();
const port = 3000;
// permite ler JSON no corpo da requisição
app.use(express.json())

//Banco de dados Fake (em memória)
const usuarios = [
    { id: 1, nome: "João", email: "joao@emaill.com" },
    { id: 2, nome: "Ana", email: "ana@emaill.com" }
]
// mostra o que tem no servidor
app.get("/usuarios", (req, res) => {
    res.send(`
        Estes são todos os usuários cadastrados: 
         ${JSON.stringify(usuarios)}
        `)
});

//Criar novo usuário
app.post("/criarUsuario", (req, res) => {
    const { nome, email } = req.body
    usuarios.push({
        id: usuarios[usuarios.length - 1].id + 1,
        nome: nome,
        email: email
    })
    res.send(usuarios)
});

// Atualiza os dados do usuario no servidor fake
app.put("/usuario/:id", (req, res) => {
    const { id } = req.params
    const { novoNome, novoEmail } = req.body
    const usuario = usuarios.find(
        usuario => usuario.id === parseInt(id)
    )
    usuario.nome = novoNome;
    usuario.email = novoEmail;

    res.send(usuario)

    res.send(id)
})
// deleta usuario
app.delete("/usuario/:id", (req, res) => {
    const { id } = req.params
    const index = usuarios.findIndex((usuario) => {return usuario.id == id})
    if(index === -1){
        res.send("Usuário não encontrado")
    }
    usuarios.splice(index, 1)
    res.send(usuarios)
})

app.listen(port, () => {
    console.log(`
        Servidor Rodando
        Example app listening on port ${port}
        `)
});
