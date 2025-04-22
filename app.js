import express from 'express'
import usuariosRoutes from './routes/usuarios.js'
import fornecedoresRoutes from './routes/fornecedores.js'

const app = express();
const port = 3000;
// permite ler JSON no corpo da requisição
app.use(express.json())

//adiciona e acessa a rota de usuários
app.use("/user", usuariosRoutes)

//adicioma e acessa a rota de fornecedores
app.use("/fornecedores", fornecedoresRoutes)

// Rota inicio
app.get("/", (req, res) => {
    res.json()
});

app.listen(port, () => {
    console.log(`
        App rodando com sucesso! ${port}
        `)
});
