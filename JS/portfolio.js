// Script para o carrossel de projetos
document.addEventListener("DOMContentLoaded", () => {
    const projetos = document.querySelectorAll(".projeto");
    const btnAnterior = document.getElementById("anterior");
    const btnProximo = document.getElementById("proximo");
    let projetoAtual = 0;

    function atualizarCarrossel() {
        projetos.forEach((projeto, index) => {
            projeto.classList.toggle("ativo", index === projetoAtual);
        });
    }

    btnAnterior.addEventListener("click", () => {
        projetoAtual = (projetoAtual - 1 + projetos.length) % projetos.length;
        atualizarCarrossel();
    });

    btnProximo.addEventListener("click", () => {
        projetoAtual = (projetoAtual + 1) % projetos.length;
        atualizarCarrossel();
    });

    atualizarCarrossel();
});
