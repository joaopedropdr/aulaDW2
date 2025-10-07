<?php
    require_once "ex1.html";
    $fraseCompleta = '';

    if (isset($_POST['enviar'])) {
        
        $nomeCompleto = $_POST['nome'] ?? '';
        $email = $_POST['email'] ?? '';
        $celular = $_POST['celular'] ?? '';
        $idade = $_POST['idade'] ?? '';
        
        $fraseCompleta = "{$nomeCompleto} tem {$idade} anos. Seu email: {$email} e telefone {$celular}.";
    } 

    echo "<p> $fraseCompleta </p>";
    
    
?>