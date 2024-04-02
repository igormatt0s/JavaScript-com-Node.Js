let msg = "Hello World!"
console.log(msg)
//no terminal: node index.js ou node

//Fire System
let {readFile, writeFile} = require('fs')
readFile("arquivo.txt", "utf8", (error, texto) => {
    if(error){
        throw error
    }else{
        console.log(texto)
    }
})

writeFile("arquivo.txt", "Texto por WriteFile", (error) => {
    if(error){
        throw error
    }else{
        console.log("Escreveu com sucesso!")
    }
})

//Módulo HTTP
const {createServer} = require('http')
let server = createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"})
    response.write(`
        <h1>Hello World!</h1>
        <p>Primeira página com Node.js</p>
    `)
    response.end()
})

server.listen(8000)
console.log("Ouvindo a porta 8000")

//Aplicação com Express
let express = require('express')
let app = express()

app.get('/', function(req, res){
    res.send('Primeira rota com Express')
})//criou a primeira rota '/' e enviou pelo get e a resposta será a string no send
app.get('/teste', function(req, res){
    res.send('Testando rota')
})
app.listen(3000, function(){
    console.log("A aplicação está funcionando na porta 3000")
})