// mongodb+srv://xarthsilvax:12345@cluster0.abfit.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator') // import do mongoose-unique-validator para cadastro de usuario unico
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const app = express()
app.use(express.json())
app.use(cors())

const SAC = mongoose.model(`SAC`, mongoose.Schema({
    nome: { type: String },
    email: { type: String },
    mensagem: { type: String }
}))

//aqui determinamos os objetos para login e cadastro unico no sistema
const usuarioSchema = mongoose.Schema({
    login: { type: String, required: true, unique: true },
    password: { type: String, required: true }
})
usuarioSchema.plugin(uniqueValidator)
const CADASTRADO = mongoose.model(`CADASTRADO`, usuarioSchema)

async function contatarAoMongoDB() {
    await mongoose.connect(`mongodb+srv://xarthsilvax:12345@cluster0.abfit.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0`)
}

app.get('/contato', async (req, res) => {
    const dados = await SAC.find()
    res.json(dados)
})

app.post('/contato', async (req, res) => {
    //obtém os dados enviados pelo cliente
    const nome = req.body.nome
    const email = req.body.email
    const mensagem = req.body.mensagem

    const dado = new SAC({ nome, email, mensagem }) // Cria uma instância de Mensagem

    //adiciona o novo filme à base no localhost
    // dados.push(dado)
    //responde ao cliente. Aqui, optamos por devolver a base inteira ao cliente, embora não seja obrigatório.
    // res.json(dados)

    //save salva o novo filme na base gerenciada pelo MongoDB
    await dado.save()
    const dados = await SAC.find()
    res.json(dados)
})

// IMPORTANTE: como podemos perceber, a lista com os objetos que utilizamos no programa está abaixo das funções 'get' e 'post', mas ainda assim o código funciona. Isso se dá porque a linguagem JS
// let dados = [
//     {
//         nome: "Arthur",
//         email: "exemplo.email@gmail.com",
//         mensagem: "Essa é uma mensagem de testes"
//     },
//     {
//         nome: "Guilherme",
//         email: "exemplo2.email@gmail.com",
//         mensagem: "Mensagem"
//     }
// ]

// get http://localhost:3000/contato


//obter os dados de cadastro inseridos pelo cliente
app.post('/signup', async (req, res) => {
    // usando 'try/ catch' definimos uma mensagem no console do servidor, o resultado sendo enviado ao cliente representa que tudo deu certo ou não
    try {
        const login = req.body.login
        const password = req.body.password
        const criptografada = await bcrypt.hash(password, 10)
        const usuario = new CADASTRADO({
            login: login,
            password: criptografada
        })
        const respMongo = await usuario.save()
        console.log(respMongo)
        res.status(201).end()
    }
    catch (error) {
        console.log(error)
        res.status(409).end()
    }
})

app.post('/login', async (req, res) => {
    //login/senha que o usuário enviou
    const login = req.body.login
    const password = req.body.password
    //tentamos encontrar no MongoDB
    const u = await CADASTRADO.findOne({ login: req.body.login })
    if (!u) {
        //se não foi encontrado, encerra por aqui com código 401
        return res.status(401).json({ mensagem: "login inválido" })
    }
    //se foi encontrado, comparamos a senha, após descriptográ-la
    const senhaValida = await bcrypt.compare(password, u.password)
    if (!senhaValida) {
        return res.status(401).json({ mensagem: "senha inválida" })
    }
    //aqui vamos gerar o token e devolver para o cliente
    const token = jwt.sign(
        { login: login },
        //depois vamos mudar para uma chave secreta de verdade
        "chave-secreta",
        { expiresIn: "1h" }
    )
    res.status(200).json({ token: token })
})

app.listen(3000, () => {
    try {
        contatarAoMongoDB();
        console.log('up and running');
    }
    catch (e) {
        console.log('erro ao conectar com o banco de dados', e)
    }
})

// Detalhes de login

// Quando o login dá certo, portanto, o funcionamento é o seguinte:
// - usuário digita login e senha válidos e clica em Login
// - Back End recebe a requisição e pergunta ao MongoDB se o usuário existe na
// base
// - MongoDB responde que sim
// - Back End produz um token JWT e devolve ao Front End
// - Front End habilita o cadastro de filmes e o botão de Login se torna um
// botão de Logoff.
// - Front End armazena o token no LocalStorage, memória persistente
// gerenciada pelo navegador

// Por outro lado, quando o login falha, o funcionamento é o seguinte:
// - usuário digita login e senha válidos e clica em Login
// - Back End recebe a requisição e pergunta ao MongoDB se o usuário existe na
// base
// - MongoDB responde que não
// - Back End devolve resposta com status indicando que o login não aconteceu
// - Front End mantém cadastro de filmes desabilitado. Botão de login
// permanece exibindo texto Login.
// - Front End exibe uma mensagem de erro para o usuário
// - O login não foi feito e, portanto, nenhum token foi gerado