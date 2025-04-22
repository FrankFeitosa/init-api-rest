import express from 'express'

const router = express.Router();

//Banco de dados Fake (em memória)
const usuarios = [
    { id: 1, nome: "João", email: "joao@emaill.com" },
    { id: 2, nome: "Ana", email: "ana@emaill.com" }
]

// Rota Criar novo usuário
router.post("/criarUsuario", (req, res) => {
    const { nome, email } = req.body
    usuarios.push({
        id: usuarios[usuarios.length - 1].id + 1,
        nome: nome,
        email: email
    })
    // res.send(usuarios)
    res.status(201).json(usuarios)
});

// Rota Atualiza os dados do usuario
router.put("/usuario/:id", (req, res) => {
    const { id } = req.params
    const { novoNome, novoEmail } = req.body
    const indice = usuarios.findIndex(
        usuario => usuario.id === parseInt(id)
    )

    if(indice === -1){
        res.status(404).json("Usuário não encontrado!")
    }

    indice.nome = novoNome;
    indice.email = novoEmail;

    res.send(indice)

    res.send(id)
})

//Rota traz todos usuários 
router.get("/usuarios", (req, res) => {
    res.status(200).json(usuarios)
});

// Rota deleta usuario
router.delete("/usuario/:id", (req, res) => {
    const { id } = req.params
    const index = usuarios.findIndex((usuario) => {return usuario.id == parseInt(id)})
    if(index === -1){
        // res.send("Usuário não encontrado")
       return res.status(404).json({message: "Usuário não encontrado!"})
    }

    usuarios.splice(index, 1)
    res.status(200).json(usuarios)
})

export default router;