//Var, let e const
var x = 10
var y = 15
if (y > 10) {
    var x = 5 // muda o valor da variável global
    console.log(x)
}
console.log(x)

let a = 10
let b = 15
if (b > 10) {
    let a = 5 //não muda o valor da variável global
    console.log(a)
}
console.log(a)

const c = 20
//c = 0//não altera valor de constante

//Arrow Function
const sum = function sum(a, b) {
    return a + b
}//função normal

const arrowSum = (a, b) => {
    return a + b
}//arrow function

const arrowSum2 = (a, b) => a + b //arrow function reduzida

const testeArrow = () => console.log('Testou!')

console.log(sum(5, 5))
console.log(arrowSum(5, 5))
console.log(arrowSum2(5, 5))
console.log(testeArrow)

const user = {
    name: 'Igor',
    sayUserName() {
        setTimeout(function () {
            console.log(this)
            console.log('Username: ' + this.name)
        }, 500)
    }, //função perde a referência do pai
    sayUserNameArrow() {
        setTimeout(() => {
            console.log(this)
            console.log('Username: ' + this.name)
        }, 700)
    }, //função não perde a referência do pai
}

user.sayUserName()
user.sayUserNameArrow()

//Filter
const arr = [1, 2, 3, 4, 5]
const highNumber = arr.filter((n) => {
    if (n >= 3) {
        return n
    }
}) //faz uma array com os números maiores que 3

console.log(highNumber)

const users = [
    { name: 'Igor', available: true }, { name: 'Matheus', available: false }, { name: 'João', available: false }, { name: 'Maria', available: true },
]
const availableUsers = users.filter((user) => user.available)
const notAvailableUsers = users.filter((user) => !user.available)

console.log(availableUsers)
console.log(notAvailableUsers)

//Map
const products = [
    { name: 'Camisa', price: 10.99, category: 'Roupas' },
    { name: 'Chaleira Elétrica', price: 49.99, category: 'Eletro' },
    { name: 'Fogão', price: 400.99, category: 'Eltro' },
    { name: 'Calça jeans', price: 60.99, category: 'Roupas' },
]

products.map((product) => {
    if (product.category === 'Roupas') {
        product.onSale = true
    }
})

console.log(products)

//Template literals
const userName = 'Igor'
const age = 22

console.log(`O nome do usuário é ${userName} e ele tem ${age} anos.`)

//Destructuring
const fruits = ["Maçã", "Laranja", "Mamão"]

const [f1, f2, f3] = fruits

console.log(f1)
console.log(f3)

const productDetails = {
    name: "Mouse",
    price: 39.99,
    category: "Periféricos",
    color: "Cinza"
}
const { name: productName, price, category: productCategory, color } = productDetails

console.log(`O nome do produto é ${productName}, custa R$${price}, pertence a categoria ${productCategory} e tem a cor ${color}`)

//Spread operator
const a1 = [1, 2, 3]
const a2 = [4, 5, 6]
const a3 = [...a1, ...a2]
console.log(a3)
const a4 = [0, ...a1, 4]
console.log(a4)

const carName = { name: 'Gol' }
const carBrand = { brand: 'VW' }
const otherInfos = { km: 100000, price: 49000 }
const car = { ...carName, ...carBrand, ...otherInfos, wheels: 4 }
console.log(car)

//Classes
class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100)
    }
}

const shirt = new Product('Camisa gola V', 20)

console.log(shirt.name)
console.log(shirt.productWithDiscount(50))

const tenis = new Product('Tenis verde', 120)

console.log(tenis.productWithDiscount(20))

//Herança
class ProductWithAttributes extends Product {
    constructor(name, price, colors) {
        super(name, price)
        this.colors = colors
    }
    showColors() {
        console.log("As cores são: ")
        this.colors.forEach((color) => {
            console.log(color)
        })
    }
}

const hat = new ProductWithAttributes("Chapéu", 29.99, ["Preto", "Azul", "Verde",])
console.log(hat.name)
console.log(hat.productWithDiscount(30))
hat.showColors()