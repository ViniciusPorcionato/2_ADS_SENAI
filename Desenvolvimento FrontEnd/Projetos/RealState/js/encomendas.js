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
    cliente.classList.add("info_invalida_2")
  } else if (unitario < 1 || isNaN(unitario)) {
    cliente.querySelector(".unitario").textContent = "Quantidade inválida";
    cliente.classList.add("info_invalida")
  } else {
    //Setar o valor da conta no campo total
    cliente.querySelector(".total").textContent = calcularTotal(qtde, unitario);
  }
});

function calcularTotal(qtde, unitario) {
  var total = 0;
  total = qtde * unitario
  return formataValor(total)
}


function formataValor(valor){
  var valor_formatado = valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
  return valor_formatado;
}