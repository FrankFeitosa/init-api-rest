import express from 'express'
const app = express();
const port = 3000;
// permite ler JSON no corpo da requisição
app.use(express.json())

//Banco de dados Fake (em memória)
const usuarios = [
    {id: 1, nome: "João", email:"joao@emaill.com"},
    {id: 2, nome: "Ana", email:"ana@emaill.com"}
]

app.put("/usuario/:id", (req, res)=>{
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

app.get("/usuarios", (req,res) => {
    res.send(`
        Estes são todos os usuários cadastrados: 
         ${JSON.stringify(usuarios)}
        `)
});

app.post("/criarUsuario", (req,res) => {
    const {id, nome, email} = req.body
    res.send(usuarios.push({id, nome, email}))
});

app.listen(port, () => {
    console.log(`
        Servidor Rodando
        Example app listening on port ${port}
        `)
});
