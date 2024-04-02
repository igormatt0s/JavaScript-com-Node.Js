console.log(document)
console.log(document.body)
console.log(document.body.childNodes)
console.log(document.body.childNodes[1])
console.log(document.body.childNodes[1].childNodes[1])
console.log(document.body.childNodes[1].childNodes[1].textContent)

//Encontrando elementos por meio de métodos das tags, classes, ids
//getElementsByTagName
console.log(document.getElementsByTagName('h1'))
console.log(document.getElementsByTagName('li'))

//getElementById
console.log(document.getElementById('texto-id'))
console.log(document.getElementById('div-id'))

//getElementsByClassName
console.log(document.getElementsByClassName('p-id'))

//querySelector
//permite encontrar elementos pelo seus seletores de CSS
console.log(document.querySelector('.p-id'))
console.log(document.querySelector('#div-id'))
console.log(document.querySelector('h1'))

//Alterando o HTML pela DOM, adicionar, remover e clonar elementos
//insertBefore
let p = document.createElement("p") //cria elemento p
let el = document.querySelector("h1") //elemento alvo
let pai = el.parentNode

pai.insertBefore(p, el) //insere o p antes do el
//a alteração é vista na aba Elementos do navegador

//appendChild
let textoP = document.createTextNode("Texto Inicial") //cria nó de texto
p.appendChild(textoP)
pai.insertBefore(p, el)

//replaceChild
let newHeading = document.createElement('h1')
newHeading.textContent = 'Novo Título'
let oldHeading = document.getElementById('oldHeading')
let paiEl = oldHeading.parentNode
paiEl.replaceChild(newHeading, oldHeading)

let lista = document.createElement('ul')
for(let i = 10; i < 15; i++){
    let item = document.createElement('li')
    let textoLi = document.createTextNode("Item "+i)
    item.appendChild(textoLi)
    lista.appendChild(item)
}
let container = document.getElementById('container')
container.appendChild(lista)

//Modificando e lendo atributos
let url = document.getElementById('link')
console.log(url.getAttribute('href'))//pega o atributo href
url.setAttribute("href", "www.google.com")//modifica o atributo href
console.log(url.getAttribute('href'))

//Verificando altura e largura do elemento
//considerando a borda
console.log(newHeading.offsetWidth)
console.log(newHeading.offsetHeight)
//desconsiderando a borda
console.log(newHeading.clientWidth)
console.log(newHeading.clientHeight)

//Posição do elemento na tela
console.log(newHeading.getBoundingClientRect())

//Alterando o CSS com o JS
console.log(p.style)
setTimeout(function(){
    p.style.color = 'Red'
    p.style.backgroundColor = 'Yellow'
}, 1000)

//Selecionando vários elementos com query
let todosPs = document.querySelectorAll('p') //todos os p
console.log(todosPs)
console.log(todosPs[2].style.color)
todosPs[2].style.color = 'Blue'
console.log(todosPs[2].style.color)
console.log(count(todosPs))