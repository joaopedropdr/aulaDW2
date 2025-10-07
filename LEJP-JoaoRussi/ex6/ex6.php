<?php
require_once "ex6.html";
$n1_valor = '';
$n2_valor = '';
$n3_valor = '';
$n4_valor = '';
$n5_valor = '';
$media_resultado = 'Aguardando 5 números.';

if (isset($_POST['calcularMediaPHP'])) {

    $n1 = floatval($_POST['n1'] ?? 0);
    $n2 = floatval($_POST['n2'] ?? 0);
    $n3 = floatval($_POST['n3'] ?? 0);
    $n4 = floatval($_POST['n4'] ?? 0);
    $n5 = floatval($_POST['n5'] ?? 0);

    $n1_valor = $_POST['n1'] ?? '';
    $n2_valor = $_POST['n2'] ?? '';
    $n3_valor = $_POST['n3'] ?? '';
    $n4_valor = $_POST['n4'] ?? '';
    $n5_valor = $_POST['n5'] ?? '';

    $soma = $n1 + $n2 + $n3 + $n4 + $n5;

    $media_resultado = $soma / 5;

    $media_resultado = number_format($media_resultado, 2);

    echo "<p> $media_resultado </p>";
}
?>