const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const db = require('./db/connection')
const path = require('path')
const bodyParser = require('body-parser')
const Job = require('./models/Job')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

const PORT = 3000

app.listen(PORT, function(){
    console.log(`O Express está rodando na porta ${PORT}`)
})

//body-parser
app.use(bodyParser.urlencoded({ extended: false }))

//handle bars
app.set('views', path.join(__dirname, 'views'))
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//static folder
app.use(express.static(path.join(__dirname, 'public')))

//db connection
db.authenticate()
.then(() => {
    console.log("Conectou ao banco com sucesso")
})
.catch(err => {
    console.log("Ocorreu um erro ao conectar", err)
})

//routes
app.get('/', (req, res) => {

    let search = req.query.job
    let query = '%'+search+'%'

    if(!search){
        Job.findAll({order: [
            ['createdAt', 'DESC']
        ]})
        .then(jobs => {
            res.render('index', {
                jobs
            })
        })
        .catch(err => console.log(err))
    }else{
        Job.findAll({
            where: {title: {[Op.like]: query}},
            order: [
            ['createdAt', 'DESC']
        ]})
        .then(jobs => {
            res.render('index', {
                jobs, search
            })
        })
        .catch(err => console.log(err))
    }
    
})

//jobs routes
app.use('/jobs', require('./routes/jobs'))

//No terminal inicia o npm init, depois instala as ferramentas: npm install express express-handlebars body-parser requelize aqlite3, por fim a ferramenta que atualiza as informações da página sem recaregar: npm install -D nodemon
//configura o que precisar e para rodar o js: node.app.js
//para usar o nodemon tem que alterar no arquivo package.json, nma parte de "test": ..., altera para "dev": "nodemon app.js"
