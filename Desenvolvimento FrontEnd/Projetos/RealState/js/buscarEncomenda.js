var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {
  var clientes = document.querySelectorAll(".cliente");
  var valorFiltro = this.value.toLowerCase().trim(); 

  clientes.forEach(function (cliente) {
    var nome = cliente.querySelector(".nome").textContent.toLowerCase();

    if (nome.includes(valorFiltro) || valorFiltro === "") {
      cliente.classList.remove("invisivel");
    } else {
      cliente.classList.add("invisivel");
    }
  });
});
