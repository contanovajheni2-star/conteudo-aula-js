// Criando a primeira função
function primeiraFuncao() {
    return console.log("Somente a dor coletiva gera união");
}

primeiraFuncao();

let exEscopo = "";

function multiplicar(a, b) {
    let exEcopo = "Teste";
    return console.log(a * b);
}

let mult1 = multiplicar(10, 5);
let mult2 = multiplicar(4, 8);

console.log(exEscopo);

const elemento = document.querySelector(".ex1");

elemento.innerHTML = mult2;
