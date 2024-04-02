//Objetos review
//Adicionando e deletando propriedades
let carro = {
    marca: "VW",
    portas: 4,
    eletrico: false,
    motor: 1.0
}
console.log(carro.portas)
delete carro.portas //delete
console.log(carro.portas) //undefined
console.log(carro)
carro.tetoSolar = true //add
console.log(carro.tetoSolar)

//Copiando proriedades
let objetoA = {
    prop1: 'teste',
    prop2: 'testando'
}
let objetoB = {
    prop3: 'propriedade'
}
Object.assign(objetoA, objetoB) //o objeto A herda as propriedades do objeto B
console.log(objetoA)

//Verificando as chaves de um objeto
console.log(Object.keys(objetoA))//prop1 e prop2 são as chaves e elas tem seus valores 'teste' e 'testando'. As chaves ficam em formato de array

//Mutação (Mutability)
//criação de um objeto a partir de outro com todas as caracteristicas do antigo, referenciando o mesmo
let objA = {
    pontos: 10
}
objB = objA
let objC = {
    pontos: 10
}
console.log(objA == objB) //true
console.log(objA == objC) //false

//Métodos de arrays
//push e pop
let pessoas = ["Mateus", "João", "Ricardo"]
let pessoaRemovida = pessoas.pop() //remove no fim do array
console.log(pessoas)
console.log(pessoaRemovida)

pessoas.push('Pedro') //adiciona no fim do array
console.log(pessoas)

//shift e unshift
let frutas = ["Maçã", "Melão", "Uva"]
let frutaRemovida = frutas.shift() //remove no começo do array
console.log(frutas)
console.log(frutaRemovida)

frutas.unshift('Abacaxi') //adiciona no começo do array index [0]
console.log(frutas)

//indexOf e lastIndexOf
let numeros = [0, 1, 2, 3, 1, 0]
console.log(numeros.indexOf(1)) //retorna o index da primeira aparição do valor 1 no array
console.log(numeros.lastIndexOf(1)) //retorna o index da ultima aparição do valor 1 no array

//slice
console.log(numeros.slice(2,3)) //retorna um array com início no index 2 e fim no index 3 a partir de outra array
console.log(numeros.slice(2)) //retorna um array com início no index 2 até o final da array a partir de outra array
console.log(numeros.slice(-3)) //retorna os 3 ultimos valores do array

//forEach
numeros.forEach(num => {
    console.log(num)
}) //itera cada elemento do array, ou seja, mostra cada item do array

//includes
let carros = ["BMW", "Fiat", "Audi"]
console.log(carros.includes("Fiat")) //verifica se o array tem um determinado elemento

//reverse
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr.reverse())// inverte um array

//Métoodos de string
//trim
let texto = '  \n teste \n    '
console.log(texto.trim())// remove  tudo que não é string

//padStart
let milAoContrario = '1'
console.log(milAoContrario.padStart(4, "0"))//insere caracteres antes da string

//split
let frase = "O rato roeu a roupa do rei de Roma"
let palavras = frase.split(" ") //divide uma string por um separado, e retorna um array
console.log(palavras)

//join
let fraseMontada = palavras.join('<->')// junta elementos em um array em uma frase, por meio de um separador
console.log(fraseMontada)

//repeat
console.log('teste '.repeat(5)) //repete uma string de acordo com um parâmetro number

//Rest operator
//uma forma de uma função receber indefinidos parâmetros
//o oporador rest vai virar um array
//o parâmetro é definido por: ...nome
let num1 = 1
let num2 = 2
let num3 = 3
let num4 = 4
function imrpimirNumeros(...args){
    for (let i = 0; i < args.length; i++){
        console.log(args[i])
    }
}
imrpimirNumeros(num1, num2, num3, num4)
imrpimirNumeros(num2, num4)
imrpimirNumeros(1, 3, 5, 7, 9, 11, 13)

//Destructuring com objetos
//podemos definir com propriedades do objeto com uma notação diferente, chamada destructuring
const person = {
    name: 'John',
    lastName: 'Doe'
}
const {name: fname, lastName: lname} = person
console.log(fname)
console.log(lname)

//Destructuring em arrays
//podemos definir variáveis com valores de um array utilizando o destructuring
let nomes = ['Mateus', 'João', 'Pedro']
let[nomeA, nomeB, nomeC] = nomes
console.log(nomeA)
console.log(nomeB)

//JSON - JavaScript Object Notation
//utilizado para comunicação entre serviços, ex: back end <-> front end
//basicamente um tipo de dado padronizado, que lembra muito os objetos do JavaScript
let pessoa = {
    "name": "Mateus",
    "age": 29,
    "position": "Developer",
    "languages": ["PHP", "JavaScript", "Python"]
}
console.log(pessoa.name)
console.log(pessoa.languages[1])

let jsonToString = JSON.stringify(carro) //converter JSON para string
console.log(jsonToString)
let stringToJson = JSON.parse(jsonToString) //converter string para JSON
console.log(stringToJson)

