// Script para múltiplos carrosséis
document.addEventListener("DOMContentLoaded", () => {
    const carrosseis = document.querySelectorAll(".carrossel");

    carrosseis.forEach((carrossel, index) => {
        const projetos = carrossel.querySelectorAll(".projeto");
        const btnAnterior = carrossel.querySelector(".anterior");
        const btnProximo = carrossel.querySelector(".proximo");
        let projetoAtual = 0;

        function atualizarCarrossel() {
            projetos.forEach((projeto, i) => {
                projeto.classList.toggle("ativo", i === projetoAtual);
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
});
