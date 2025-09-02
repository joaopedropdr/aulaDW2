
// Função para juntar nome e sobrenome

function juntarNome() {
    let nome = document.getElementById('nome').value;
    let sobreNome = document.getElementById('sobrenome').value;
    // Concatenação
    let nomeCompleto = nome + "" + sobreNome;
    //Interpolação
    let nomeCompleto1 = `<i>${nome} <br>${sobreNome}</i>`;
    
    // Injetando o novo texto no paragráfo
    document.getElementById('nomecompleto').innerText = nomeCompleto;

    document.getElementById('nomecompleto1').innerHTML = nomeCompleto1;
    
}

