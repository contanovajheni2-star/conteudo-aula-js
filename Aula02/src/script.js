//Exemplo de operador de atribuição
let x = 100;

x = x - 5;
//console.log(x);


x = x = 5;
//console.log(x);

//Exemplos deAritmética em JavaScript
let soma = 5 + 5 + 4;
console.log(soma);

//const primeiroNome = 'Jhenifer';
//const ultimoNome = 'Rayssa';

//let nomeCompleto = primeiroNome + ultimoNome;

let nomeCompleto = 'Jhenifer' + " " + 'Rayssa';

console.log(nomeCompleto);

//Exemplos de tipos em JavaScript
//string
let cor = 'Azul';
let fruta = 'Laranja';
console.log(cor);
console.log(fruta);

// Number
let soma1 = 5 + 5;
let subtração = 10 - 3;
console.log(soma1);
console.log(subtração);

//BigInt
let bigint = 1234567890123456789012345n;
let bigint2 = BigInt(1234567890123456789012345);

console.log(bigint);
console.log(bigint2);

// Boolean
let valorVerdadeiro = true;
let valorFalso = false;
console.log(valorVerdadeiro);
console.log(valorFalso);

// Object
const carro = {
    marca: 'Porsche',
    modelo:'911 Turbo S',
    cor:'Ruby Star Neo ',
}

console.log(carro);

console.log('A marca do carro é: ' + carro.marca);

// Array Object
const frutas = ['Laranja','Banana', 'Uva','Morango','Abacaxi'];

console.log(frutas);

// Date Object
const data = new Date;

console.log(data);

//Undefined
let indefinido;

console.log(indefinido);

//Null
let nulo = null;

console.log(nulo);

// Symbo1
let j = Symbol();

console.log(j);

//Exemplos de typeof
let stringtipo = '300';
let number = 300;

//const tipoDado = typeof stringTipo;
const tipodado = typeof numbertipo;

//Exemplos de Boolen
let cinco = 5;
let comparacao = cinco == 8;

console.log(comparacao);