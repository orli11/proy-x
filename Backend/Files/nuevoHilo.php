<?php
    include("../Config/conexion.php");
    $conn = conectar();

    $url_anterior = $_SERVER['HTTP_REFERER'];
    $id_post = $_POST['id_post'];
    $usuario = $_POST['CommentFromUser'];
    $mensaje = $_POST['mensaje'];
    //Establece la zona horaria de Ciudad de México
    date_default_timezone_set('America/Mexico_City');
    $fecha = date("Y-m-d H:i:s");

    $queryInsert = "INSERT INTO hilo VALUES(null, '$id_post', '$mensaje', '$fecha', '$usuario')";
    $result = mysqli_query($conn, $queryInsert);
    
    if($result){
        echo json_encode(['STATUS' => 'SUCCESS', 'MESSAGE' => 'Post registrado']);
        Header("Location: $url_anterior");
    } else {
        echo json_encode(['STATUS' => 'ERROR', 'MESSAGE' => 'Post no registrado']); 
    }
?>