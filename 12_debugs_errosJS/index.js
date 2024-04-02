//O que é bug e debug
//bug: Problema que ocorre no código, muitas vezes por erro do programador, que impede o funcionamento correto do mesmo
//debug: o ato de resolver os bugs encontrados no código ou também a forma que é feita a visualização de valores de variáveis ou fluxo do código

//Strict mode
//deixa o JavaScript mais rigoroso na hora de se programar;
//deve ser declarado no topo de arquivos ou funções;
//colocar o strict ajuda você a codificar de forma correta e não vai impedir/limitar nada no seu software ou programa;
"use strict"
//opa = "teste" //variável declarada sem let/const/var

//console.log()

//debugger
//funcionalidade que para o código quando atingir a linha debugger
/*
let a = 1
let b = 2
if(a == 1){
    a = b + 2
}
debugger
for(let i = 0; i < b; i++){
    a = a + 2
}
debugger
if(a < 10){
    a == 25
}
debugger
*/

//Tratamento de input por função
//não podemos controlar os dados que o usuário enviar, então para um bom funcionamento do software, devemos tratar eles;
/*
function checarNumero(valor){
    let resultado = Number(valor) //tratamento de number
    if(Number.isNaN(resultado)){
        alert("Por favor, passe só números para o programa")
        return null
    }else{
        return resultado
    }
}
console.log(checarNumero(5))
console.log(checarNumero('teste'))
*/

//Exceptions
//podemos criar erros no programa, caso alguma condição não seja atendida
//porém as exceptions abortam o programa, só geram o erro
/*
let a = 1
if(a != 2){
    throw new Error("O valor de a não pode ser "+a)
}
*/
/*
function saudacao(nome){
    if(typeof nome != 'string'){
        throw new Error("O parÂmetro nome precisa ser String")
    }else{
        console.log(`Olá ${nome}.`)
    }
}
saudacao("Matheus")
saudacao(5)
console.log("teste")
*/

//Try e catch e o finally
//o bloco try catch, vai tentar executar um código, caso não conseguir ele ode retornar o erro que esse código gerou
//finally é executada independente do resultado do try/catch
//ele pode existir com o try e catch ou apenas try
try{
    let c = a + b
}catch(error){
    console.log("Algo deu errado: "+error)
    //throw new Error(error)
}finally{
    console.log("Executou o finally")
}

//Assertions
//verificação no programa, que são utilizadas para assegurar que tudo ocorra da forma esperada
let arr = [1, 2, 3, 4, 5]
let arr1 = []
function iterarArray(arr){
    if(arr.length == 0){
        throw new Error("O array precisa ter elementos")
    }else{
        for(let i = 0; i < arr.length; i++){
            console.log(arr[i])
        }
    }
}
iterarArray(arr)
iterarArray(arr1)