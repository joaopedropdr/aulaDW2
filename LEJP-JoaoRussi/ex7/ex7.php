<?php
require_once "ex7.html";

$resultadoHTML = 'Aguardando notas...';

$notas_valores = [
    'nota1' => '', 'nota2' => '', 'nota3' => '', 
    'nota4' => '', 'nota5' => '', 'nota6' => ''
];


if (isset($_POST['calcularMediaPHP'])) {

    $notas = [];
    $aluno_count = 0;
    
    for ($i = 1; $i <= 6; $i++) {
        $nome_campo = "nota{$i}";
        $valor = floatval($_POST[$nome_campo] ?? 0);
        
        $notas_valores[$nome_campo] = $_POST[$nome_campo] ?? '';
        
        if ($i % 2 !== 0) {
            $aluno_count++;
            $notas[$aluno_count] = ['nota1' => $valor];
        } else {
            $notas[$aluno_count]['nota2'] = $valor;
        }
    }

    $resultadoHTML = "<h4>Médias:</h4>";
    
    foreach ($notas as $aluno => $pares) {
        $soma = $pares['nota1'] + $pares['nota2'];
        $media = $soma / 2;

        $resultadoHTML .= "<p>Aluno {$aluno}: Média = <strong>" . number_format($media, 2) . "</strong></p>";
    }

    echo "$resultadoHTML";
}


?>