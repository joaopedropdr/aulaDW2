function calcularNotas() {
    const notas = [
        [parseFloat(document.getElementById('nota1').value), parseFloat(document.getElementById('nota2').value)],
        [parseFloat(document.getElementById('nota3').value), parseFloat(document.getElementById('nota4').value)],
        [parseFloat(document.getElementById('nota5').value), parseFloat(document.getElementById('nota6').value)]
    ];
    let resultadoHTML = "<h4>Médias:</h4>";
    
    // 2. Itera sobre a matriz (array de arrays)
    for (let i = 0; i < notas.length; i++) {
        const soma = notas[i][0] + notas[i][1];
        const media = soma / 2;
        
        resultadoHTML += `<p>Aluno ${i + 1}: Média = <strong>${media.toFixed(2)}</strong></p>`;
    }

    // 3. Exibe o resultado no HTML
    document.getElementById('valor').innerHTML = resultadoHTML;
}

function ajustarFoco() {
    document.getElementById("n1").focus();
}

function limparDados() {
    document.getElementById("forms").reset();

    document.getElementById('nota1').innerText = "";
    document.getElementById('nota2').innerHTML = "";
    document.getElementById('nota3').innerHTML = "";
    document.getElementById('nota4').innerHTML = "";
    document.getElementById('nota5').innerHTML = "";
}
