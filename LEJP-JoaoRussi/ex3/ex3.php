<?php
require_once "ex3.html";
$base_valor = '';
$altura_valor = '';
$area_resultado = 0;


if (isset($_POST['calcularAreaPHP'])) {

    $base = floatval($_POST['base'] ?? 0);
    $altura = floatval($_POST['altura'] ?? 0);
    
    $base_valor = $_POST['base'] ?? '';
    $altura_valor = $_POST['altura'] ?? '';
    
    $area_resultado = $base * $altura;
    echo "<p> $area_resultado </p>";
}
?>