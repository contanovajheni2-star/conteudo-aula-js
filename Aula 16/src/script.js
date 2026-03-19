// Alterando atributos
const elemento = document.querySelector(".ex1");

elemento.src = "./img/arvore.jpg";
elemento.width = 800;

// Conteúdo dinamico (data)
const elemento2 = document.querySelector("#ex2");

elemento2.innerHTML = "Data atual: " + Date();