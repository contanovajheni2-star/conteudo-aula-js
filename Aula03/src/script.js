//Exemplo de condição lógica: If e Else
let x = 5;

if (x == 5) {
   // console.log('A variável x é igual a 5!')
} else {
   // console.log('A variável x não é igual a 5!');
}

//Exemplos de condição Lógica: If Else If
let y = 10;

if (y > 3) {
    console.log('A variável y é maior que 3!');
} else if (y = 3) {
 console.log('A variável é igual a 3');
} else {
    console.log('A variável y possui um valor diferente das verificações');
}

//Exemplos de if
const elemento = document.getElementById('ex1');
const pegarHoras = new Date().getHours();
const pegarMinutos = new Date().getMinutes();
const hora = String(pegarHoras) + ":" + String(pegarMinutos);

console.log(hora);

if (pegarHoras > 18) {
    elemento.innerHTML = "Boa Noite!";
}

//exemplo if 2
let idade = 18;
let texto = 'Voce é novo demais para dirigir!';

if (idade >= 18) {
    texto = 'Voce tem idade para dirigir!';
}

document.getElementById('idade').'Sua idade é: ' + idade;
document.getElementById('ex2').innerHTML = texto;