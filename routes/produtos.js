import express from 'express'

const router = express.Router();

const produtos = [
    {id: 1, nome: "NoteBook", preco: 3500},
    {id: 2, nome: "Computador", preco: 4000},
    {id: 3, nome: "SmartPhone", preco: 3000}
]

router.get("/", (req,res) => {
    res.status(200).json(produtos)
})

router.post("/addProduto", (req,res) => {
    const {nome, preco} = req.body;
    produtos.push({
        id: produtos[produtos.length-1].id + 1,
        nome: nome,
        preco: preco
    })
    res.status(201).json(produtos)
})

router.put("/atualiza/:id", (req,res) => {
    const { id } = req.params;
    const { novoNome, novoPreco } = req.body;
    const indice = produtos.findIndex( produto => produto.id === parseInt(id));
    if(indice === -1){
      return res.status(404).json("Produto não encontrado")
    }
    
    produtos[indice].nome = novoNome;
    produtos[indice].preco = novoPreco;

    res.status(202).json(produtos)
})

router.delete("/excluir/:id", (req, res) => {
    const { id } = req.params
    const index = produtos.findIndex(produto =>  produto.id == parseInt(id))
    if(index === -1){
       return res.status(404).json({message: "Fornecedor não encontrado!"})
    }else {
        res.status(200).json({message: "Deletado com Sucesso!"})
    }

    produtos.splice(index, 1)
    res.status(200).json(produtos)
})


export default router;