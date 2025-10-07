<?php

require_once "ex2.html";

$n1_valor = '';
$n2_valor = '';
$resultado = 'Nenhum cálculo realizado.';


if (isset($_POST['operacao'])) {

    $n1 = floatval($_POST['n1'] ?? 0);
    $n2 = floatval($_POST['n2'] ?? 0);

    $n1_valor = $_POST['n1'] ?? '';
    $n2_valor = $_POST['n2'] ?? '';
    
    $operacao = $_POST['operacao'];
    
    switch ($operacao) {
        case 'somar':
            $resultado = $n1 + $n2;
            break;
            
        case 'subtrair':
            $resultado = $n1 - $n2;
            break;
            
        case 'multiplicar':
            $resultado = $n1 * $n2;
            break;
            
        case 'dividir':
            if ($n2 != 0) {
                $resultado = $n1 / $n2;
            } else {
                $resultado = 'Erro: Divisão por zero.';
            }
            break;
            
        default:
            $resultado = 'Operação desconhecida.';
            break;
    }
}

echo "<p> $resultado </p>";



?>