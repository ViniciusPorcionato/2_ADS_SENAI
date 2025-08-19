//Capturar encomendas da tabela
const clientes = document.querySelectorAll("#tabela-clientes .cliente");

//Passa por todas as encomendas e calcula o valor total
clientes.forEach((cliente) => {
  //Pega o valor de quantidade dentro do cliente atual
  const qtde = parseInt(cliente.querySelector(".qtde").textContent);
  //Pega o valor do campo unitario dentro do cliente atual
  const unitario = parseInt(cliente.querySelector(".unitario").textContent);
  //Faz a conta do total entre a quantidade e o valor unitario

  if (qtde < 1 || isNaN(qtde)) {
    cliente.querySelector(".qtde").textContent = "Quantidade inválida";
    cliente.querySelector(".qtde").style.color = "red";
    cliente.style.backgroundColor = "white";
  } else if (unitario < 1 || isNaN(unitario)) {
    cliente.querySelector(".unitario").textContent = "Quantidade inválida";
    cliente.querySelector(".unitario").style.color = "white";
    cliente.style.backgroundColor = "red";
  } else {
    //Setar o valor da conta no campo total
    cliente.querySelector(".total").textContent = calcularTotal(qtde, unitario);
  }
});

function calcularTotal(qtde, unitario) {
  return qtde * unitario;
}
