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


export default router;