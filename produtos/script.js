const buttons = document.querySelectorAll('#todos-produtos > .content > .pagination > .botao');
const produtos = document.querySelectorAll('#todos-produtos > .content > .produtos > .item');
const field = document.querySelector('input');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        produtos.forEach((produto) => {
            produto.style.animation = 'none';
            produto.offsetHeight;
            produto.style.animation = 'product 1s ease-in-out';

            const favorite = produto.querySelector('.favoritar');

            favorite.setAttribute('class', 'favoritar');
        });

        button.setAttribute('class', 'botao active');
        buttons.forEach((botao) => {
            if (botao != button) {
                botao.setAttribute('class', 'botao');
            }
        });
    });
});

field.addEventListener('input', () => {
    produtos.forEach((produto) => {
        produto.style.animation = 'none';
        produto.offsetHeight;
        produto.style.animation = 'product 1s ease-in-out';
    });
});

produtos.forEach((produto) => {
    const favorite = produto.querySelector('.favoritar');

    favorite.addEventListener('click', () => {
        if(favorite.classList.contains('active')) {
            favorite.classList.remove('active');
        } else {
            favorite.classList.add('active');
        }
    });
});