<?php
require_once "ex8.html";
$n_valor = '';
$fatorial_resultado = 'Aguardando o número N.';

if (isset($_POST['calcularFatorialPHP'])) {

    $n = intval($_POST['n1'] ?? 0);
 
    $n_valor = $_POST['n1'] ?? '';

    if ($n < 0) {

        $fatorial_resultado = 'Número inválido! Fatorial deve ser >= 0.';
        
    } elseif ($n === 0 || $n === 1) {
        $fatorial_resultado = 1;
        
    } else {
        $resultado = 1;
        for ($i = $n; $i >= 2; $i--) {
            $resultado *= $i;
        }
        $fatorial_resultado = $resultado;
    }

    echo "<p> $fatorial_resultado </p>";
}
?>