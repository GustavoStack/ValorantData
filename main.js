
function pesquisar(){
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("input-pesquisa").value;

    if(!campoPesquisa){
        section.innerHTML = "<p>Campo vazio, digite algo.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = "";
    let titulo = "";
    let rota = "";

    for(dado of dados){
        titulo = dado.titulo.toLowerCase();
        rota = dado.rota.toLowerCase();
        if(titulo.includes(campoPesquisa) || rota.includes(campoPesquisa)){
            resultados += `
            <div class="item-resultado">
                <img src="${dado.foto}"></img>
                <h2>${dado.titulo}</h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <p>Rota:${dado.rota}</p>
                <p>Time atual: ${dado.atual_time}</p>
                <a href="${dado.link}" target="_blank">Mais informaçãoes.</a>
            </div>`
        }
    }

    if(!resultados){
        resultados = "<p>Nenhum resultado encontrado.</p>";
    }

    section.innerHTML = resultados;
}


