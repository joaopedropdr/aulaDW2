function media() {
    let n1 = document.getElementById('n1').value;        
    let n2 = document.getElementById('n2').value;        
    let n3 = document.getElementById('n3').value;        
    let n4 = document.getElementById('n4').value;        
    let n5 = document.getElementById('n5').value;  
    
    let msg = [];
    let erro = false;
    if(!n1) {
        msg[0] = "Digite o valor!!";
        document.getElementById('erro1').innerText = msg[0]; 
        erro = true; 
    }

    if(!n2) {
        msg[1] = "Digite o valor!!";
        document.getElementById('erro2').innerText = msg[1]; 
        erro = true; 
    }

    if(!n3) {
        msg[2] = "Digite o valor!!";
        document.getElementById('erro3').innerText = msg[2]; 
        erro = true; 
    }

    if(!n4) {
        msg[3] = "Digite o valor!!";
        document.getElementById('erro4').innerText = msg[3]; 
        erro = true; 
    }

    if(!n5) {
        msg[4] = "Digite o valor!!";
        document.getElementById('erro5').innerText = msg[4]; 
        erro = true; 
    }

    if(!erro) {
        let numeros = [];
        let soma = 0;
        numeros[0] = parseInt(n1);
        numeros[1] = parseInt(n2);
        numeros[2] = parseInt(n3);
        numeros[3] = parseInt(n4);
        numeros[4] = parseInt(n5);
        for(let i =0; i < 5; i++) {
            soma = soma + numeros[i];
            console.log(numeros[i]);
        }
        soma = soma / 5;
        document.getElementById('valor').textContent = soma; 

    }
}

function ajustarFoco() {
    document.getElementById("n1").focus();
}

function limparDados() {
    document.getElementById("forms").reset();

    document.getElementById('n1').innerText = "";
    document.getElementById('n2').innerHTML = "";
    document.getElementById('n3').innerHTML = "";
    document.getElementById('n4').innerHTML = "";
    document.getElementById('n5').innerHTML = "";
}
