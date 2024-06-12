console.log("Script iniciado");

const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;

const cartoes = document.querySelectorAll(".cartao");

// Função para avançar o cartão
btnAvancar.addEventListener("click", function () {
    if (cartaoAtual === cartoes.length - 1) {
        cartaoAtual = 0; // Volta ao primeiro cartão
    } else {
        cartaoAtual++; // Avança para o próximo cartão
    }

    esconderCartoesSelecionado();
});

// Função para voltar o cartão
btnVoltar.addEventListener("click", function () {
    if (cartaoAtual === 0) {
        cartaoAtual = cartoes.length - 1; // Volta ao último cartão
    } else {
        cartaoAtual--; // Volta para o cartão anterior
    }

    document.querySelector(".selecionado").classList.remove("selecionado");
    mostrarCartao();
});
function mostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartoesSelecionado() {
    document.querySelector(".selecionado").classList.remove("selecionado");
    cartoes[cartaoAtual].classList.add("selecionado");
}

