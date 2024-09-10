function pesquisar() {

    // Obtém a seção HTML onde os resultados serão exibidos pelo ID "resultados-pesquisa"
    let section = document.getElementById("resultados-pesquisa");

    //configurando o botão pesquisar - condicional. Para que busque apenas o que estou digitando.
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    //se o campoPesquisa for uma string sem nada/vazio, não retornar nada:
    if (!campoPesquisa) {
        section.innerHTML = "Nada foi encontrado"
        return
    } 

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada elemento (dado) do array "dados"
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        //Se titulo includes compoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)|| tags.includes(campoPesquisa)) {
              // Cria um novo elemento
        resultados += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descrição-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Mais informações</a>
        </div>`;
        };
            
        dado.titulo.includes(campoPesquisa);
      
    }

 //se o campoPesquisa for uma string sem nada/vazio, não retornar nada:
 if (!resultados) {
    section.innerHTML = "Nada foi encontrado"
    return
}

    // Atribui a string com os resultados ao conteúdo HTML da seção
    section.innerHTML = resultados;
};
