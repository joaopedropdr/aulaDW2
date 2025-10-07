function calcularArea() {
    let base = document.getElementById('base').value;
    let altura = document.getElementById('altura').value; 

    let msg = [];
    let erro = false;

    if(!base) {
        msg[0] = "Digite o valor da baase";
        document.getElementById('erro1').innerText = msg[0];  
        erro = true; 
    }

    if(!altura) {
        msg[1] = "Digite o valor da altura!!";
        document.getElementById('erro2').innerText = msg[1];  
        erro = true; 
    }

    if(!erro) {
        let calculo = parseInt(base) * parseInt(altura);
        document.getElementById('valor').textContent = calculo;
    }
}

function ajustarFoco() {
    document.getElementById("base").focus();
}

function limparDados() {
    document.getElementById("forms").reset();

    document.getElementById('base').innerText = "";
    document.getElementById('altura').innerHTML = "";

}