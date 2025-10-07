function fatorial() {
    let n1 = parseInt(document.getElementById('n1').value);

    let msg = [];
    let erro = false;
    if(!n1) {
        msg[0] = "Digite o valor!!";
        document.getElementById('erro1').innerText = msg[0]; 
        erro = true; 
    }

    if(n1 < 0) {
        msg[1] = "numero invalido!!";
        document.getElementById('erro1').innerText = msg[1]; 
        erro = true;   
    }

    if(!erro) {
        let resultado = 0;
        if (n1 === 0 || n1 === 1) {
            resultado = 1;
        }
        resultado = 1;
        for (let i = n1; i >= 2; i--) {
            resultado *= i; 
        }
        document.getElementById('valor').innerText = resultado; 
    }
}

function ajustarFoco() {
    document.getElementById("n1").focus();
}

function limparDados() {
    document.getElementById("forms").reset();

    document.getElementById('n1').innerText = "";
}