// Utilizando o key events
const conteudo = document.querySelector(".conteudo");
const campo = document.querySelector("#campo");

campo.addEventListener("Keydown", handleTecla);

function handleTecla(evento) {
    conteudo.innerHTML = "Voce digitou: " + evento.key;
}

function handleTexto(evento) {
    conteudo2.innerHTML = "Voce digitou: " + evento.target.value;
}

//Exemplo de detecção de tecla
const campo2 = document.querySelector("#campoEnter");
const conteudo2 = document;
const conteudo3 = document.querySelector(".conteudo3");

campo2.addEventListener("Keydown", handleCondicao);
function handleCondicao(evento) {
    if(evento.code === "Enter") {
        conteudo3.innerHTML = "A tecla enter foi pressionada!";
    }
};
