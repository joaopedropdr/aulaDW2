function somarN() {
    let n1 = document.getElementById('n1').value;

    let msg = [];
    let erro = false;
    if(!n1) {
        msg[0] = "Digite o valor!!";
        document.getElementById('erro1').innerText = msg[0]; 
        erro = true; 
    }

    if(!erro) {
        let soma = 0;
        let numero = parseInt(n1);
        for(let i = 1; i < numero + 1; i++) {
            soma = soma + i
            document.getElementById('valor').textContent = soma;
        }
    }

}

function ajustarFoco() {
    document.getElementById("n1").focus();
}

function limparDados() {
    document.getElementById("forms").reset();

    document.getElementById('n1').innerText = "";
    document.getElementById('n2').innerHTML = "";
}
