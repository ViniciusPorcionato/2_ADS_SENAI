var tabela = document.querySelector("#tabela-clientes");
tabela.addEventListener("dblclick", function (e) {

  e.target.parentNode.classList.add("fadeOut");

  setTimeout(function () {
    e.target.parentNode.remove();
  }, 600);
});
