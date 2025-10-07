<?php
require_once "ex5.html";
$n_valor = '';
$soma_resultado = 'Aguardando o número N.';

if (isset($_POST['calcularSomaPHP'])) {
    
    $n = intval($_POST['n1'] ?? 0);
    
    $n_valor = $_POST['n1'] ?? '';
    
    if ($n >= 1) {
        $soma_resultado = ($n * ($n + 1)) / 2;
    } else {
        $soma_resultado = 'Insira um valor maior ou igual a 1.';
    }
    echo "<p> $soma_resultado </p>";
}

?>