// Atribuindo vários eventos a um só elemento
const btnAdicionar = document.querySelector(".btn");
const conteudo = document.querySelector(".conteudo");

btnAdicionar.addEventListener("mouseover", () => {
    conteudo.innerHTML += "Você passou o mouse por cima do botão. <br>";
    conteudo.style.color = "darkpurple";
});

    btnAdicionar.addEventListener("click", () => {
          conteudo.innerHTML += "click <br>";
          conteudo.style.color ="orange";
    })
   btnAdicionar.addEventListener("mouseout", () => {
    conteudo.innerHTML += "Mouse Out <br>";
    conteudo.style.color = "blue";
   });

// Utilizando o objeto window
const conteudo2 = document.querySelector(".conteudo-window");


   window.addEventListener("resize", () => {
    conteudo2.innerHTML = Math.random();
   });

   // Utilizando parametros
   const conteudo3 = document.querySelector(".resultado-produto");
   const btn2 = document.querySelector(".btn2");

   let p1 = 4;
   let p2 = 2;

   btn2.addEventListener("click", () => {
    conteudo3.innerHTML = produto(p1, p2);
   });

   function produto (p1, p2) {
    return p1 * p2;
   }

   // Propagação de eventos (bubbling e capture)