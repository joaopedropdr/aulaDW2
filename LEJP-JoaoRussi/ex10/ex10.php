<?php
require_once "ex10.html";

$inputString = '';
$contPares = 0;
$resultadoHTML = 'Aguardando números...';


if (isset($_POST['contarParesPHP'])) {

    $inputString = $_POST['listaNumeros'] ?? '';

    $numeros_str = explode(',', $inputString);

    $numeros = array_map('intval', $numeros_str);
    

    foreach ($numeros as $num) {

        if ($num === 0) {
            break;
        }

        if ($num % 2 === 0) {
            $contPares++;
        }
    }

    $resultadoHTML = "O número de pares digitados (antes do 0) é: <strong>{$contPares}</strong>";

    echo "$resultadoHTML";
}
?>