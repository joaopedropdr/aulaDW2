function pares() {
    const inputString = document.getElementById('listaNumeros').value;
    
    // 1. Converte a string de input para um array de números
    const numeros = inputString
        .split(',')
        .map(num => parseInt(num.trim(), 10)) // Converte cada item para inteiro
        .filter(num => !isNaN(num)); // Remove valores não numéricos

    let contPares = 0;

    for (const num of numeros) {
        if (num === 0) {
            break; 
        }
        
        if (num % 2 === 0) {
            contPares++;
        }
    }

    document.getElementById('valor').innerHTML = `O número de pares digitados (antes do 0) é: <strong>${contPares}</strong>`;
}

function ajustarFoco() {
    document.getElementById("listaNumeros").focus();
}

function limparDados() {
    document.getElementById("forms").reset();

    document.getElementById('listaNumeros').innerText = "";
}
