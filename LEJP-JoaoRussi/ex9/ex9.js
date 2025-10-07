function arredondarJS() {
    const numero = parseFloat(document.getElementById('n1').value);
    
    // Arredonda para o inteiro superior (ceiling)
    const ceil = Math.ceil(numero); 
    
    // Arredonda para o inteiro inferior (floor)
    const floor = Math.floor(numero);
    
    let resultadoHTML = `<h4>Resultado:</h4>`;
    resultadoHTML += `<p>Número Original: ${numero}</p>`;
    resultadoHTML += `<p>Arredondado para **CIMA** (Math.ceil()): <strong>${ceil}</strong></p>`;
    resultadoHTML += `<p>Arredondado para **BAIXO** (Math.floor()): <strong>${floor}</strong></p>`;
    
    document.getElementById('valor').innerHTML = resultadoHTML;
}

function ajustarFoco() {
    document.getElementById("n1").focus();
}

function limparDados() {
    document.getElementById("forms").reset();

    document.getElementById('n1').innerText = "";
}