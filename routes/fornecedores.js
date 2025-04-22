import express from 'express'

const router = express.Router();

const fornecedores = [
    {id: 1, nome: "ExtaPrint"},
    {id: 2, nome: "PmenosLab"},
    {id: 3, nome: "AmaralTech"}
]

router.get("/", (req, res) => {
    res.status(200).json(fornecedores)
})

router.post("/addFornecedor", (req,res) => {
    const { nome } = req.body
    fornecedores.push({
        id: fornecedores[fornecedores.length - 1].id + 1,
        nome: nome
    })
    res.status(201).json(fornecedores)
})

router.put("/atualizaFornecedor/:id", (req, res) => {
    const { id } = req.params;
    const { novoNome } = req.body;
    const index = fornecedores.findIndex( fornecedor => fornecedor.id === parseInt(id))
    if(index === -1){
        res.status(404).json("Fornecedor não encontrado!")
    }
    
    fornecedores[index].nome = novoNome;

    res.status(202).json(fornecedores)
})

router.delete("/excluiFornecedor/:id", (req, res) => {
    const { id } = req.params
    const index = fornecedores.findIndex((fornecedor) => {return fornecedor.id == parseInt(id)})
    if(index === -1){
        // res.send("Usuário não encontrado")
       return res.status(404).json({message: "Fornecedor não encontrado!"})
    }

    fornecedores.splice(index, 1)
    res.status(200).json(fornecedores)
})

export default router;

