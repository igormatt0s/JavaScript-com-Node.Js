//Exercício 01
//Crie uma regex que aceite só letras maiúsculas
const palavraMaiuscula = /[A-Z]+/
console.log("EXERCÍCIO 01")
console.log(palavraMaiuscula.test("sddf"))
console.log(palavraMaiuscula.test("ASDFF"))
console.log(palavraMaiuscula.test("asddF"))
console.log(palavraMaiuscula.test("123ds"))
console.log(palavraMaiuscula.test("23D"))

//Exercício 02
//Crie regex que só aceite strings terminadas com ID
const palavraID = /\d+ID\b/ //\b garante que termine com ID
console.log("EXERCÍCIO 02")
console.log(palavraID.test("ASDFF123ID"))
console.log(palavraID.test("123sddFID"))
console.log(palavraID.test("123id"))
console.log(palavraID.test("23ID"))
console.log(palavraID.test("23IDESFF"))

//Exercício 03
//Crie uma regex que aceite a seguinte expressão "Marca: nomeDaMarca";
//Onde nomeDaMarca pode variar para Nike, Adidas, Puma, Asics
const marca = /Marca: (Nike|Adidas|Puma|Asics)/
console.log("EXERCÍCIO 03")
console.log(marca.test("Marca: Qualquer coisa"))
console.log(marca.test("Marca: "))
console.log(marca.test("Marca: Nike2"))
console.log(marca.test("Puma"))
console.log(marca.test("Marca: aAdidas"))

//Exercício 04
//Crie uma regex que valide endereços de IP;
//Ex: 127.0.0.1
const ip = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/
console.log("EXERCÍCIO 04")
console.log(ip.test("1234.234.234.234"))
console.log(ip.test("12e.234.234.234"))
console.log(ip.test("123.3.3.3"))
console.log(ip.test("0.0.0.0"))

//Exercício 05
//Crie uma regex que valide nome de usuários no sistema
//Aceite letras de a-z,_ e -, números de 0-9, mínimo de 3 caracteres e máximo de 16
const usuario = /^(?=.{3,16}$)[a-z0-9-_]/
console.log("EXERCÍCIO 05")
console.log(usuario.test("asde"))
console.log(usuario.test("a23"))
console.log(usuario.test("a_ss"))
console.log(usuario.test("12-asd"))
console.log(usuario.test("12-ASD"))
console.log(usuario.test("ASD"))
console.log(usuario.test("a3"))
console.log(usuario.test("a23aaaaaaaaaaaaaa"))