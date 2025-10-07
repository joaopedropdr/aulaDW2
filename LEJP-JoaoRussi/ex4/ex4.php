<?php
require_once "ex4.html";
$nota_valor = '';
$presenca_valor = '';
$status_aluno = 'Aguardando cálculo...';

if (isset($_POST['calcularResultadoPHP'])) {

    $nota = floatval($_POST['nota'] ?? 0);
    $presenca = floatval($_POST['presenca'] ?? 0);
    

    $nota_valor = $_POST['nota'] ?? '';
    $presenca_valor = $_POST['presenca'] ?? '';
    
    
    if ($presenca < 75) {
        $status_aluno = "Reprovado! (Frequência insuficiente)";
    } 
    else if ($nota >= 6) {
        $status_aluno = "Aprovado!";
    } 
    else if ($nota >= 4) { 
        $status_aluno = "Recuperação!";
    } 
    else { 
        $status_aluno = "Reprovado! (Nota baixa)";
    }

    echo "<p> $status_aluno </p>";
}

?>