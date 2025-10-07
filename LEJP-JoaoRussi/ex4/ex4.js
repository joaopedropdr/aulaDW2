function resultado() {
    let nota = document.getElementById('nota').value;
    let presenca = document.getElementById('presenca').value; 

    let msg = [];
    let erro = false;

    if(!nota) {
        msg[0] = "Digite o valor da nota";
        document.getElementById('erro1').innerText = msg[0];  
        erro = true; 
    }

    if(!presenca) {
        msg[1] = "Digite a porcentaagem de presença!!";
        document.getElementById('erro2').innerText = msg[1];  
        erro = true; 
    }

    if(!erro) {
        if(nota >= 6 && presenca >= 75) {
            document.getElementById('valor').textContent = "Aprovado!";
        }

        if(nota < 6 && nota >= 4) {
            document.getElementById('valor').textContent = "Recuperação!";
        }
        
        if(nota < 4) {
            document.getElementById('valor').textContent = "Reprovado!";
        }

        if(presenca < 75) {
            document.getElementById('valor').textContent = "Reprovado!";
        }
    }
}

function ajustarFoco() {
    document.getElementById("nota").focus();
}

function limparDados() {
    document.getElementById("forms").reset();

    document.getElementById('nota').innerText = "";
    document.getElementById('persenca').innerHTML = "";

}