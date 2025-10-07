function somar() {
    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;

    let msg = [];
    let erro = false;
    if(!n1) {
        msg[0] = "Digite o primeiro valor!!";
        document.getElementById('erro1').innerText = msg[0]; 
        erro = true; 
    }

    if(!n2) {
        msg[1] = "Digite o segundo valor!!";
        document.getElementById('erro2').innerText = msg[1];  
        erro = true; 
    }

    if(!erro) {
        let soma = parseInt(n1) + parseInt(n2);
        document.getElementById('valor').textContent = soma;
    }
}

function subtrair() {
    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;

    let msg = [];
    let erro = false;
    if(!n1) {
        msg[0] = "Digite o primeiro valor!!";
        document.getElementById('erro1').innerText = msg[0]; 
        erro = true; 
    }

    if(!n2) {
        msg[1] = "Digite o segundo valor!!";
        document.getElementById('erro2').innerText = msg[1];  
        erro = true; 
    }

    if(!erro) {
        let sub = parseInt(n1) - parseInt(n2);
        document.getElementById('valor').textContent = sub;
    }

}

function divisao() {
    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;

    let msg = [];
    let erro = false;
    if(!n1) {
        msg[0] = "Digite o primeiro valor!!";
        document.getElementById('erro1').innerText = msg[0]; 
        erro = true; 
    }

    if(!n2) {
        msg[1] = "Digite o segundo valor!!";
        document.getElementById('erro2').innerText = msg[1];  
        erro = true; 
    }

    if(!erro) {
        let div = parseInt(n1) / parseInt(n2);
        document.getElementById('valor').textContent = div;
    }

}

function multiplicar() {
    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;

    let msg = [];
    let erro = false;
    if(!n1) {
        msg[0] = "Digite o primeiro valor!!";
        document.getElementById('erro1').innerText = msg[0]; 
        erro = true; 
    }

    if(!n2) {
        msg[1] = "Digite o segundo valor!!";
        document.getElementById('erro2').innerText = msg[1];  
        erro = true; 
    }

    if(!erro) {
        let mult = parseInt(n1) * parseInt(n2);
        document.getElementById('valor').textContent = mult;
    }

}

function ajustarFoco() {
    document.getElementById("nome").focus();
}

function limparDados() {
    document.getElementById("forms").reset();

    document.getElementById('n1').innerText = "";
    document.getElementById('n2').innerHTML = "";

}