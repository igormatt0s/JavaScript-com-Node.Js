//Eventos
//ações condicionais a algum tipo de resposta feita pelo usuário, por exemplo: clicks, apertar alguma tecla ou até movimento do mouse
//podemos atrelar lógica a essas ações do usuário por meio de handlers

//Criando um evento
//atrelar o evento a um elemento depois inserir um listener e o tipo de evento como argumento
function msg(){
    console.log("Clicou")
}
let btn = document.querySelector("#btn")
btn.addEventListener("click", msg)

//Removendo eventos
let btn2 = document.querySelector("#btnRemove")
btn2.addEventListener("click", function(){
    btn.removeEventListener("click", msg)
})

//Objeto do evento
//Quando criamos, temos a opção de utilizar um argumento opcional, que é chamado de objeto do evento
//ele contém propriedades que podem ser tuilizadas a nosso favor
//o objeto é criado pelo JavaScript automaticamente
//event ou e
function mensagem(e){
    console.log(e)
}
btn.addEventListener("click", mensagem)

//Propagação
//quando não definimos um elemento muito bem (seletor brando ou um elemnto que está dentro de outro tem um evento)
//pode acontecer a propagação, ou seja, o outro elemento ativar um evento também, aí teremos uma dulicação
//por isso temos um método que para esta propagação e resolve este problema, o stopPropagation
let p = document.querySelector('p')
p.addEventListener("click", function(){
    console.log("click 1")
})
btn2.addEventListener("click", function(e){
    console.log("click 2")
    e.stopPropagation()//vai parar o evento do p e só vai executar esse evento do click 2
})

//Ações default
//muitos elementos/teclas já tem ações pre-definidas, como clicar num link nos leva a outra página
//podemos para este evento default, e criar uma lógica diferente para o elemento em questão
let a = document.querySelector('a')
a.addEventListener("click", function(e){
    e.preventDefault()
    console.log("Clicou mas não mudou de link")
})

//Eventos de tecla (key event)
//sempre que uma tecla é pressionada, são gerados dois eventos: keyup e keydown
//podemos realizar ações nestes eventos também
//keyup é quando soltamos a tecla
//keydown é quando apertamos
window.addEventListener("keydown", function(e){
    if(e.key == "Enter"){
        console.log("Apertou a tecla Enter")
    }//se apertar Enter chama o console.log()
})
window.addEventListener("keyup", function(e){
    if(e.key == "Enter"){
        console.log("Soltou a tecla Enter")
    }
})

//Outros eventos de mouse
//no mouse temos também eventos como mousedown e mouseup, semelhante aos das teclas
//Dblclick para ativar com dois cliques
btn.addEventListener("dblclick", function(){
    console.log("Ativou com double click")
})
btn2.addEventListener("mousedown", function(){
    console.log("Apertou o botão")
})
btn2.addEventListener("mouseup", function(){
    console.log("Soltou o botão")
})
btn2.addEventListener("contextmenu", function(e){
    e.preventDefault()
    console.log("Apertou o botão direito")
})

//Movimento do mouse
//podemos ativar eventos com a movimentação do mouse também
//o nome dele é mousemove
//através desse evento podemos detectar a posição do ponteiro do mouse na tela
/*
window.addEventListener('mousemove', function(e){
    console.log(e.x)
    console.log(e.y)
})
*/

//Eventos por scroll
//podemos atrelar evento ao scroll da tela também, pelo evento scroll
//por exemplo: podemos criar um elemento assim que o scroll atingir uma posição x
window.addEventListener('scroll', function(e){
    if(window.pageYOffset > 1000){
        console.log("Chegou na posição")
    }//eixo de cima para baixo na vertical
})

//Eventos por foco
//quando focamos em um elemento ou saímos dele, podemos também atreplar um evento a esta ação
//focus para quando um elemento recebe foco e blur quando ele perde
let input = document.querySelector("input")
input.addEventListener("focus", function(){
    console.log("foco no input")
})
input.addEventListener("blur", function(){
    console.log("perdeu o foco")
})

//Evento de carregamento
//podemos atrelar um evento quando a página carrega, pelo evento load
//e antes do usuário fechar a página pelo evento beforeunload
window.addEventListener("load", function(){
    alert("Assine nossos termos de uso")
})
window.addEventListener("beforeunload", function(event){
    event.returnValue = null
})

//Debounce
//um evento que dispara múltiplas vezes pode ser um problema para o computador do cliente
//por isso podemos fazer um debounce, que é um suavizador de evento, para não chamar o mesmo tantas vezes
let timeout
window.addEventListener("mousemove", function(e){
    clearTimeout(timeout)
    timeout = setTimeout(() => console.log("Debounce!"), 500)//um intervalo de tempo de 500ms
})