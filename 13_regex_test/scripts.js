//RegEx
const reg1 = new RegExp('bola')
console.log(reg1.test("Tem bola?"))
console.log(reg1.test("Não tem"))

const reg2 = /bola/
console.log(reg2.test("Tem bola?"))
console.log(reg2.test("Não tem"))

let text = 'Tem bola na cesta'
console.log(reg1.test(text))

console.log(/quadrado/.test("Onde tem um quadrado"))
console.log(/quadrado/.test("34356656quadrado3284248394"))

//Conjuntos
const conjunto1 = /[12345]/
console.log(conjunto1.test("Temos o número  6")) //Ele não aceita
console.log(conjunto1.test("Temos o número 2"))
console.log(conjunto1.test("Temos o número 26")) //Ele aceita 

const conjunto2 = /[0-9]/ //verifica se existe número ou não
console.log(conjunto2.test("Temos o número 65"))

//Caracteres especiais
const pontoRegEx = /./ // aceita tudo - true
console.log(pontoRegEx.test("abc"))
console.log(pontoRegEx.test(" "))
console.log(pontoRegEx.test("123"))
console.log(pontoRegEx.test("123abc"))

const dRegEx = /\d/ //[0-9]
console.log(dRegEx.test("abc"))
console.log(dRegEx.test(" "))
console.log(dRegEx.test("123"))//aceita
console.log(dRegEx.test("123abc")) //aceita

const DRegEx = /\D/ //[^0-9]
console.log(DRegEx.test("abc"))//aceita
console.log(DRegEx.test(" "))//aceita
console.log(DRegEx.test("123"))
console.log(DRegEx.test("123abc"))//aceita por que tem letras

const sRegEx = /\s/ //espaços vazios, \n ou \t
console.log(sRegEx.test("abc"))
console.log(sRegEx.test(" "))//aceita
console.log(sRegEx.test("123"))
console.log(sRegEx.test("123abc"))

const wRegEx = /\w/ //números e letras
console.log(wRegEx.test("abc"))
console.log(wRegEx.test(" "))//não aceita
console.log(wRegEx.test("123"))
console.log(wRegEx.test("123abc"))

let ano = /\d\d\d\d/
console.log(ano.test("05"))
console.log(ano.test("2019"))//true
console.log(ano.teste("opa"))

let palavraTresLetras = /\w\w\w/
console.log(palavraTresLetras.test("dia"))//true
console.log(palavraTresLetras.test("ano"))//true
console.log(palavraTresLetras.teste("oi"))
console.log(palavraTresLetras.teste("teste"))//true tbm pq tem três letras
console.log(palavraTresLetras.teste("teste") && "teste".length == 3)//false

let dia = /\d\d/
console.log(dia.test("05"))//true
console.log(dia.test("2019"))//true tbm pq tem dois dígitos
console.log(dia.teste("opa"))
console.log(dia.teste("sd12"))//true tbm pq tem dois dígitos
console.log(dia.test("05") && "05".length == 2)//true
console.log(dia.test("2019") && "2019".length == 2)//false

//Operador not ^
const notAeB = /[^ab]/
console.log(notAeB.test("a"))//false pq o a está isoldado
console.log(notAeB.test("Aqui tem a"))//true

const nottoAZ = /[^a-z]/
console.log(nottoAZ.test("123"))//true
console.log(nottoAZ.test("aasasc"))//false pq as letras estão isoladas
console.log(nottoAZ.test("123 h"))//true

//Operador plus +
const umOuMaisNumeros = /\d+/
console.log(umOuMaisNumeros.test("1518"))//true
console.log(umOuMaisNumeros.test(" "))//false
console.log(umOuMaisNumeros.test("ddah"))//false

//Operador ?
const padrao = /Abacax?i/
	console.log(padrao.test("Abacai"))//true
	console.log(padrao.test("Abacaxi"))//true

const padrao2 = /\d\w?/
console.log(padrao2.test("123"))//true
console.log(padrao2.test("123a"))//true
console.log(padrao2.test("123 "))//true tbm

//Operador preciso
const cep = /\d{5}-\d{3}/
console.log(cep.test("88117-500"))//true
console.log(cep.test("asdd"))
console.log(cep.test("8117-500"))//false
console.log(cep.test("99999-999"))

const tel = /\(\d{2}\)\d{4,5}-\d{4}/
console.log(tel.test("(48)99999-9999"))//true
console.log(tel.test("(48)9999-9999"))//true

//Método exec
const digitos = /\d+/
console.log(digitos.exec("Tem o número 100 aqui")) //retorna um objeto
console.log(digitos.exec("Tem o número aqui"))//retorna null

//Método match
const frase = "O numero 100 está aqui".match(/\d+/)
const frase2 = "O numero está aqui".match(/\d+/)
console.log(frase)//retorna um objeto
console.log(frase2)//null

//Choice pattern
const reg = /\w+: (Mateus|João|Maria)/ //Nome:  ddasasaa
console.log(reg.test("Nome: Mateus"))//true
console.log(reg.test("Nome: José"))
console.log(reg.test("Nome: Maria"))//true

//Validando dominios
const validarDominio = /[?www.]\w+\.com|com.br/ //www. fica opcional
console.log(validarDominio.test("www.google.com"))//true
console.log(validarDominio.test("www.teste"))
console.log(validarDominio.test("teste.com"))//true
console.log(validarDominio.test("www.horadecodar.com.br"))//true

//Validando e-mail
const validarEmail = /\w+@\w+\.\w+/
console.log(validarEmail.test("teste@email.com"))//true
console.log(validarEmail.test("email@email"))
console.log(validarEmail.test("ronaldo@yahoo.com.br"))//true
console.log(validarEmail.test("email.com"))

//Validando data de nascimento
const validarDataNasc = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/
console.log(validarDataNasc.test("25/12/2015"))//true
console.log(validarDataNasc.test("25/12/15"))
console.log(validarDataNasc.test("2/2/2015"))
console.log(validarDataNasc.test("30-02-1999"))
console.log(validarDataNasc.test("30/02/1999"))//true

const validarDataNasc2 = /[1-31]{2}[/][1-12]{2}[/][1900-2023]{4}/
console.log(validarDataNasc.test("32-03-1899"))//false
console.log(validarDataNasc.test("12-07-1999"))//true