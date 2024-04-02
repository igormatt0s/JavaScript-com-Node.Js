//A programação assíncrona trabalha de forma que as ações podem ser executadas ao tempo todo sem uma 'fila'
//Um exemplo: usuário está no checkout, manda salvar seu endereço na conta, mas pode prosseguir para a finalização sem recarregar a página, pois adicionar endereço ocorre de forma assícrona

//Callback
//uma das vertentes a prog. Assíncrona é fazer ações que aconteçam depois de um tempo por meio de callbacks
//callback é uma função que faz uma ação após algum acontecimento no código
//podemos realizar um callback com a função setTimeout

console.log("Ainda não chamou o callback")
setTimeout(function(){
    console.log("Chamou o callback")
}, 2000) //depois de 2 segundos vai executar essa função
console.log("Ainda não chamou o callback")

//Promises
//são ações assíncronas que podem produzir um valor em algum momento no código
//uma forma de dizer a linguagem que um valor pode estar presente em um futuro do código
//o objetivo das promises é Promise, resolve é o método que resolve uma romise, o then é o que faz ela poder ser executada em um ponto futuro
let promessa = Promise.resolve(4 + 8)
console.log('Algum código')
promessa.then((value) => {return value + 5})
.then((value) => console.log(`A soma é ${value}`))
//uma promise pode falhar, podemos reter esse erro com um m´´etodo chamado catch
//com ele podemos exibir o erro no console, por exemplo, e facer o debug no código
let promiseErrada = Promise.resolve(new Error("Algo deu errado"))
promiseErrada.then((value) => console.log(value))
.catch(reason => console.log("Erro: "+reason))
//além do resolve, há o método reject para rejeitar promises
//quando determinada lógica não satisfaz nosso rograma então podemos ir para outra com o reject, em vez de resolve
//resolve e reject terminam a Promise, ou seja, não podemos chamar mais o themn, por exemplo
function verificarAlgo(num){ 
    return new Promise((resolve, reject) => {
    if(num == 2){
        resolve(console.log("O número é 2"))
    }else{
        reject(new Error("Falhou"))
    }
})
}
verificarAlgo(3)
verificarAlgo(2)
//com o método all, podemos resolver várias promessas de uma vez só, ou seja, passamos elas por array e quanto a última for resolvida, recebemos a resposta
const p1 = new Promise(function(resolve,reject){
    setTimeout(function(){resolve(100)}, 2500)
})
const p2 = Promise.resolve(5)
const p3 = new Promise(function(resolve, reject){
    resolve(10)
})
Promise.all([p1, p2, p3]).then((values) => console.log(values))

//Async functions
//podemos criar funções assíncronas com a plavravra reservada async
//elas retornam uma Promise
//se retornar algo, a promessa é resolvida, se der alguma exceptions a promessa é rejeitada
async function somar(a, b){
    return a + b
}
somar(2, 2).then(function(value){
    console.log(value)
})

//Await
//nas async functions, podemos determinar uma instrução await
//que vai esperar uma promise ser resolvida,para apresentar os resultados
function somaComDelay(a, b){
    return new Promise(resolve => {
        setTimeout(function(){
            resolve(a + b)
        }, 2000)
    })
}
async function soma(a, b, c, d){
    let x = somaComDelay(a, b)
    let y = somaComDelay(c, d)
    return await x + await y
}
soma(2, 4, 6, 8).then( y => console.log(y))

//Generators
//funcionam semelhantes as Promises
//onde acçoes podem ser pausadas e continuadas depois
//caracterizados pelo function* e yield
//o yield pode salvar o estado da vriável
function* genTest(){
    let id = 0
    while(true){
        yield id++
    }
}
let criarId = genTest()
console.log(criarId.next().value)
console.log(criarId.next().value)
console.log(criarId.next().value)
console.log(criarId.next().value)
console.log(criarId.next().value)
console.log(criarId.next().value)