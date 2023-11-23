<?php
    include("../Config/conexion.php");
    $conn = conectar();

    $id_usu = $_POST['id_usu'];
    $titulo = $_POST['titulo'];
    $mensaje = $_POST['mensaje'];
    $fecha = date("Y-m-d");

    $queryInsert = "INSERT INTO posts VALUES(null, '$id_usu', '$titulo', '$mensaje', '$fecha')";
    $result = mysqli_query($conn, $queryInsert);
    
    if($result){
        echo json_encode(['STATUS' => 'SUCCESS', 'MESSAGE' => 'Post registrado']);
        Header("Location: ../../home.html?usuario=".$id_usu);
    } else {
        echo json_encode(['STATUS' => 'ERROR', 'MESSAGE' => 'Post no registrado']); 
    }
    ?>