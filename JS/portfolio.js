document.querySelectorAll('.carrossel-container').forEach((container) => {
    const carrossel = container.querySelector('.carrossel');
    const imagens = carrossel.querySelectorAll('img');
    const btnAnterior = container.querySelector('.anterior');
    const btnProximo = container.querySelector('.proximo');

    let indiceAtual = 0;

    // Função para mostrar a próxima imagem
    const mostrarImagem = (indice) => {
        imagens.forEach((img, i) => {
            img.classList.toggle('ativo', i === indice);
        });
    };

    // Botões de navegação
    btnAnterior.addEventListener('click', () => {
        indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
        mostrarImagem(indiceAtual);
    });

    btnProximo.addEventListener('click', () => {
        indiceAtual = (indiceAtual + 1) % imagens.length;
        mostrarImagem(indiceAtual);
    });

    // Navegação automática
    // setInterval(() => {
    //     indiceAtual = (indiceAtual + 1) % imagens.length;
    //     mostrarImagem(indiceAtual);
    // }, 3000); // Troca de imagem a cada 3 segundos
});
