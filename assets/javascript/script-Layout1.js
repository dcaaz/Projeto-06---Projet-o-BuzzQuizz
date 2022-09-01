function entrarNoQuizz() {

    const layoutUm = document.querySelector('.layout1');
    const layoutDois = document.querySelector('.layout2');

    layoutUm.classList.add('esconde');
    layoutDois.classList.remove('esconde');

}

function novoQuizz() {

    const layoutUm = document.querySelector('.layout1');
    const layoutTres = document.querySelector('.layout3');
    console.log(layoutTres);
    layoutUm.classList.add('esconde');
    layoutTres.classList.remove('esconde');

}

function pegarQuizz() {

    const quizzes = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes");
    quizzes.then(renderizarQuizzes);
    quizzes.catch(deuErro);

}
pegarQuizz();

function criarElemento(tag, Name) {

    const elemento = document.createElement(tag);
    elemento.className= Name;
    return elemento;

}

function renderizarQuizzes(promessa) {

    const quizzes = promessa.data;
    
    const quizzDaNet = document.querySelector('.outrosQuizzes .quizz');

    quizzDaNet.innerHTML = '';
    
    quizzes.forEach(element => {
         
        quizzDaNet.innerHTML += `
        
            <div class="umQuizz ${element.id}" onclick="entrarNoQuizz(); pergarId(this)">
                <div class="degrade"></div>
                <img src="${element.image}" alt="">
                <div class="nomeDoQuizz">${element.title}</div>
            </div>

        `;

    });

}

function deuErro() {

    conslode.log("Erro");

}