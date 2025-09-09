// Função para juntar nome e sobrenome
function juntarNome() {
    let nome = document.getElementById('nome').value;
    let sobreNome = document.getElementById('sobrenome').value;
    // Concatenação
    //let nomeCompleto = nome + "" + sobreNome;
    if(!nome && !sobreNome) {
        document.writeln("<p><strong>Nome e/ou sobrenome não foram informados!!!</strong></p>");
    } else {
        //Interpolação
        let nomeCompleto = `${nome} ${sobreNome}`;
        document.getElementById('nomecompleto').innerText = nomeCompleto;
        
        let nomeCompleto1 = `<i>${nome} <br>${sobreNome}</i>`;
        document.getElementById('nomecompleto1').innerHTML = nomeCompleto1;
    }  
}

// Função para pegar o nome e sobrenome no prompt
function janelaNome() {
    let nome = prompt("Entre com seu nome: ");
    let sobreNome = prompt("Entre com seu sobrenome: ");
    
    if(!nome || !sobreNome) {
        document.writeln("<p><strong>Nome e/ou sobrenome não foram informados!!!</strong></p>");
    } else {
        let nomeCompleto = `${nome} ${sobreNome}`;
        document.getElementById('nomecompleto').innerText = nomeCompleto;
        
        let nomeCompleto1 = `<i>${nome} <br>${sobreNome}</i>`;
        document.getElementById('nomecompleto1').innerHTML = nomeCompleto1;
    }
}

function ajustarFoco() {
    document.getElementById("nome").focus();
}

function limparDados() {
    // Excluido os arquivos sem usar o reset
    // let nome = document.getElementById('nome').value = "";
    // let sobreNome = document.getElementById('sobrenome').value = "";

    document.getElementById("nomes").reset();

    document.getElementById('nomecompleto').innerText = "";
    document.getElementById('nomecompleto1').innerHTML = "";
}
