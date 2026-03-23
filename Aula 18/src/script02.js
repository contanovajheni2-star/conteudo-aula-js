// Utilizando o evento mouseover
const caixa = document.querySelector(".caixa");

caixa.addEventListener("mouseover", function (){
    caixa.innerHTML = "O mouse esta em cima da caixa";
    caixa.style.background = "blue";
});

caixa.addEventListener("mouseout", function () {
    caixa.innerHTML = "O mouse esta fora da caixa.";
    caixa.style.background = "darkblue";
    caixa.style.color = "#ffffff";
});

// Exemplo de posição do mouse na página
const conteudo = document.querySelector(".conteudo");

document.addEventListener("mousemove", handlePosicao);

function handlePosicao(evento) {
    conteudo.innerHTML = "X: " + evento.clientX + " " + "Y: " + evento.clientY;
}