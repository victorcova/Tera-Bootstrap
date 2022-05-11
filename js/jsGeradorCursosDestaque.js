// CURSOS EM DESTAQUE CARDS API
const urlLocal = 'js/apiCursosDestaque.json'; // URLLocal LOCAL

const optionsLocal = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
}


fetch(urlLocal, optionsLocal) // fez a promise
.then(response => { // pega a resposta da promessa e...
    console.log('RESPOSTA EM JSON:\n',response); // Resposta em formato JSON
    response.json() // Método JSON para transformar os dados para Objetos JS
    .then(dados => { // faz outra promise
        console.log('RESPOSTA CONVERTIDA PARA OBJETO:\n',dados);
        const cursos = dados.cursos; // "dados" é um objeto que vai receber data (que vem lá do JSON)
        const nome_curso = dados.nome_curso; // outro exemplo
        console.log('RESPOSTA EM ARRAY VINDA DO OBJETO CAPTANDO O ATRIBUTO DADOS:\n',cursos);
        console.log('RESPOSTA EM ARRAY VINDA DO OBJETO CAPTANDO O ATRIBUTO PAGE (EXEMPLO):\n',nome_curso);

        //EXIBIR CURSOS EM DESTAQUE        
        var itemInicial = 0;
        for (let i = 0; i < cursos.length; i++) {
            
            let carouselInner = document.getElementById('carouselInner');                    


            let carouselActiveOrItem = document.createElement('div')
            if (itemInicial == 0) {
                carouselActiveOrItem.setAttribute('class','carousel-item active');
                itemInicial = 1;
            }else{
                carouselActiveOrItem.setAttribute('class','carousel-item');
            }
            carouselInner.appendChild(carouselActiveOrItem);

            let card = document.createElement('div')            
            card.setAttribute('class','card');
            carouselActiveOrItem.appendChild(card);

            let divImg = document.createElement('div')            
            divImg.setAttribute('class','img-wrapper');
            card.appendChild(divImg);

            let imgAvatarCurso = document.createElement('img');
            imgAvatarCurso.setAttribute('class','card-img-top');            
            let imgAtual = cursos[i].avatar;
            imgAvatarCurso.setAttribute('src', imgAtual);                        
            let altCursoAtual = cursos[i].nome_curso;
            imgAvatarCurso.setAttribute('alt', altCursoAtual);
            divImg.appendChild(imgAvatarCurso);

            let cardBody = document.createElement('div');
            cardBody.setAttribute('class','card-body');
            card.appendChild(cardBody);            

            let h5TitCurso = document.createElement('h5');
            h5TitCurso.setAttribute('class','card-title');
            let idTitCurso = 'idTitCurso'+[i];
            h5TitCurso.setAttribute('id',idTitCurso);
            cardBody.appendChild(h5TitCurso);
            document.getElementById(idTitCurso).append(`${cursos[i].nome_curso}`);

            let ulInfoCurso = document.createElement('ul');
            ulInfoCurso.setAttribute('class','list-group');
            let idUlInfoCurso = 'idUlInfoCurso'+[i];
            ulInfoCurso.setAttribute('id',idUlInfoCurso);
            cardBody.appendChild(ulInfoCurso);            
            
            let liRatingCurso = document.createElement('li');
            liRatingCurso.setAttribute('class','list-group-item pb-2');
            let idLiRatingCurso = 'rating'+[i];
            liRatingCurso.setAttribute('id',idLiRatingCurso);
            ulInfoCurso.appendChild(liRatingCurso);
            document.getElementById(idLiRatingCurso).append(`Avaliação: ${cursos[i].rating}/5.0`);

            let liQtdAulasCurso = document.createElement('li');
            liQtdAulasCurso.setAttribute('class','list-group-item pb-2');
            let idLiQtdAulasCurso = 'qtdAulas'+[i];
            liQtdAulasCurso.setAttribute('id',idLiQtdAulasCurso);
            ulInfoCurso.appendChild(liQtdAulasCurso);
            document.getElementById(idLiQtdAulasCurso).append(`Quantidade: ${cursos[i].qtd_aulas} aulas`);

            let liNomeProfCurso = document.createElement('li');
            liNomeProfCurso.setAttribute('class','list-group-item pb-2');
            let idNomeProfCurso = 'idNomeProfCurso'+[i];
            liNomeProfCurso.setAttribute('id',idNomeProfCurso);
            ulInfoCurso.appendChild(liNomeProfCurso);
            document.getElementById(idNomeProfCurso).append(`Professor(a): ${cursos[i].nome_prof}`);
            
            let pDescricao = document.createElement('p')
            pDescricao.setAttribute('class','card-text pt-3 ml-1');
            pDescricao.setAttribute('style','text-align: left;');
            let idDescricao = 'idDescricao'+[i];
            pDescricao.setAttribute('id',idDescricao);
            cardBody.appendChild(pDescricao);    
            document.getElementById(idDescricao).append(`${cursos[i].descr_curso}`);

            let btEmenta = document.createElement('button');
            btEmenta.setAttribute('type','button');
            btEmenta.setAttribute('class','btn btn-dark me-2 float-end');
            cardBody.appendChild(btEmenta);
            btEmenta.innerHTML = "Ver Ementa";
                            
        }
    })
})

.catch(err => {
    console.log(err, "ERRO!")
})