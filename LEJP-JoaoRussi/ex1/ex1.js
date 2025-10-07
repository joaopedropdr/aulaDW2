function fraseCompleta() {
    let nomeCompleto = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let celular = document.getElementById('celular').value;
    let idade = document.getElementById('idade').value;

    let fraseCompleta = "";
    let msg = [];
    if(!nomeCompleto) {
       msg[0] = "Escreva seu nome completo!!";
       document.getElementById('erro1').innerText = msg[0];
       fraseCompleta = "1";
    }

    if(!email) {
       msg[1] = "Escreva seu email!!";
       document.getElementById('erro2').innerText = msg[1];
       fraseCompleta = "1";
    }

    if(!celular) {
       msg[2] = "Digite seu numero de celular!!";
       document.getElementById('erro3').innerText = msg[2];
       fraseCompleta = "1";
    }

    if(!idade) {
       msg[3] = "Escreva sua idade!!";
       document.getElementById('erro4').innerText = msg[3];
       fraseCompleta = "1";
    }

    if(fraseCompleta === "1") {
        fraseCompleta = "";
        document.getElementById('frase').textContent = fraseCompleta;
    } else {
        fraseCompleta = `${nomeCompleto} tem ${idade} anos. Seu email: ${email} e telefone ${celular}`;
        document.getElementById('frase').textContent = fraseCompleta;
    }
}

function ajustarFoco() {
    document.getElementById("nome").focus();
}

function limparDados() {
    document.getElementById("forms").reset();

    document.getElementById('nome').innerText = "";
    document.getElementById('email').innerHTML = "";
    document.getElementById('celular').innerHTML = "";
    document.getElementById('idade').innerHTML = "";
}