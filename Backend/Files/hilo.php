<?php
    include("../Config/conexion.php");
    $conn = conectar();

    // Obtener datos del formulario de respuesta
    $id_hilo = $_POST['id_hilo'];
    $id_posts = $_POST['id_posts'];
    $mensaje = $_POST['mensaje'];

    // Obtener la fecha actual en la zona horaria de Ciudad de México
    date_default_timezone_set('America/Mexico_City');
    $fecha = date("Y-m-d H:i:s");

    // Insertar la respuesta en la base de datos
    $queryInsertRespuesta = "INSERT INTO respuestas (id_hilo, id_posts, mensaje, fecha) VALUES ('$id_hilo', '$id_posts', '$mensaje', '$fecha')";
    $resultRespuesta = mysqli_query($conn, $queryInsertRespuesta);

    if($resultRespuesta){
        echo json_encode(['STATUS' => 'SUCCESS', 'MESSAGE' => 'Respuesta registrada']);
        // Redirigir o realizar otras acciones según tus necesidades
    } else {
        echo json_encode(['STATUS' => 'ERROR', 'MESSAGE' => 'Respuesta no registrada']); 
    }
?>
