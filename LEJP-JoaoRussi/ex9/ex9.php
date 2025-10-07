<?php
require_once "ex9.html";
$n_valor = '';
$resultadoHTML = 'Aguardando número...';


if (isset($_POST['arredondarPHP'])) {

    $numero = floatval($_POST['n1'] ?? 0);
    

    $n_valor = $_POST['n1'] ?? '';

    $ceil = ceil($numero);   
    $floor = floor($numero); 

    $resultadoHTML = "<h4>Resultado:</h4>";
    $resultadoHTML .= "<p>Número Original: {$numero}</p>";
    $resultadoHTML .= "<p>Arredondado para <b>CIMA</b> (ceil()): <strong>{$ceil}</strong></p>";
    $resultadoHTML .= "<p>Arredondado para <b>BAIXO</b> (floor()): <strong>{$floor}</strong></p>";

    echo "$resultadoHTML";
}
?>