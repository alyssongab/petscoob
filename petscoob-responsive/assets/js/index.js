// Criar uma variável do tipo constante para armazenar um seletor CSS

const elementoDuvida = document.querySelectorAll(".duvidas");

elementoDuvida.forEach(function (duvidas) {
  duvidas.addEventListener("click", function () {
    duvidas.classList.toggle("ativa");
  });
});
