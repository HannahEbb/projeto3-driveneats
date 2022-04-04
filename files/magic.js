// DECLARANDO VARIÁVEIS GLOBAIS

let pratoselecionado;
let bebidaselecionado;
let sobremesaselecionado;
let botaoativo;
let prato;
let bebida;
let sobremesa;


// FUNÇÕES PARA SELECIONAR UM ITEM DE CADA TIPO - PRATO, BEBIDA E SOBREMESA 

function selecionarPrato(pratoclicado) {
    pratoselecionado = document.querySelector(".pselecionado");

    if (pratoselecionado !== null) {
        pratoselecionado.classList.remove("pselecionado");
    } 
    pratoclicado.classList.add("pselecionado");
    pratoselecionado = document.querySelector(".pselecionado");

    if(pratoselecionado && bebidaselecionado && sobremesaselecionado) {
        document.querySelector(".botao").classList.remove("inativo");
        document.querySelector(".botao").innerText = "Fechar pedido";
        document.querySelector(".botao").classList.add("ativo");
        }


}

function selecionarBebida(bebidaclicado) {
    bebidaselecionado = document.querySelector(".bselecionado");

    if (bebidaselecionado !== null) {
        bebidaselecionado.classList.remove("bselecionado");
    } 
    bebidaclicado.classList.add("bselecionado");
    bebidaselecionado = document.querySelector(".bselecionado");

    if(pratoselecionado && bebidaselecionado && sobremesaselecionado) {
        document.querySelector(".botao").classList.remove("inativo");
        document.querySelector(".botao").innerText = "Fechar pedido";
        document.querySelector(".botao").classList.add("ativo");
        }

}

function selecionarSobremesa(sobremesaclicado) {
    sobremesaselecionado = document.querySelector(".sselecionado");

    if (sobremesaselecionado !== null) {
        sobremesaselecionado.classList.remove("sselecionado");
    } 
    sobremesaclicado.classList.add("sselecionado");
    sobremesaselecionado = document.querySelector(".sselecionado");

    if(pratoselecionado && bebidaselecionado && sobremesaselecionado) {
        document.querySelector(".botao").classList.remove("inativo");
        document.querySelector(".botao").innerText = "Fechar pedido";
        document.querySelector(".botao").classList.add("ativo");
        }

}

// FUNÇÃO PARA O BOTÃO DE FECHAR PEDIDO

function fecharPedido () {
    botaoativo = document.querySelector(".ativo")

  if(botaoativo !== null) {
    // SE O BOTÃO CONTÉM A CLASSE "ATIVO", O CLICK LEVA PARA UM LINK
    prato = document.querySelector(".pselecionado").id;
    bebida =  document.querySelector(".bselecionado").id;
    sobremesa = document.querySelector(".sselecionado").id;
    let total = Number(document.querySelector(".pselecionado").querySelector(".preco").id) + Number(document.querySelector(".bselecionado").querySelector(".preco").id) + Number(document.querySelector(".sselecionado").querySelector(".preco").id);

    const mensagem = `Olá, gostaria de fazer o pedido:
    Prato: ${[prato]}
    Bebida: ${[bebida]} 
    Sobremesa: ${[sobremesa]}
    TOTAL: R$ ${[total.toFixed(2)]}`

window.open("https://wa.me/?text="+ mensagem)
  }

}
