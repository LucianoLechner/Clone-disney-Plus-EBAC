document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function(){
        const posicaoAtual = window.scrollY;
        const btn = document.getElementById('btn-1');
        const logo = document.getElementById('logo');
        const bgHeader = document.getElementById('header');

        if(posicaoAtual < alturaHero){
            logo.classList.add('hidden');
            btn.classList.add('hidden');
            bgHeader.classList.add('hidden-bg');
        } else {
            logo.classList.remove('hidden');
            btn.classList.remove('hidden');
            bgHeader.classList.remove('hidden-bg');
        }

    })

    // SECAO DE ATRACOES, PROGAMACAO DAS ABAS
    for (let i = 0; i < buttons.length; i++ ){
        buttons[i].addEventListener('click', function(botao){
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);

            escondeTodasAbas();
            aba.classList.add('shows__list--is--active');

            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is--active')
        })
    }


    // SECAO FAQ
    for(let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click', abreOuFechaResposta)
    }
})

function abreOuFechaResposta(elemento){
    const classe = 'open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe)
}

function removeBotaoAtivo(){
    const bordaButtons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < bordaButtons.length; i++){
        bordaButtons[i].classList.remove('shows__tabs__button--is--active')
    }
}

function escondeTodasAbas(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--is--active');
    }
}


