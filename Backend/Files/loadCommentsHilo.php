<?php 
    include("../Config/conexion.php");
    $conn = conectar();

    $usuario = $_GET['usuario'];
    $fecha = $_GET['fecha'];

    //para obtener el id del comentario 
    $querySelect = "SELECT id_pos FROM posts WHERE fecha='$fecha' AND id_usu='$usuario'";
    $result = mysqli_query($conn, $querySelect);
    $row = mysqli_fetch_assoc($result);
    $id_pos = $row['id_pos'];

    //consulta
    $queryUsuario = "SELECT hilo.mensaje, hilo.fecha, hilo.usuario FROM hilo WHERE hilo.id_posts = $id_pos";
    $comments = mysqli_query($conn, $queryUsuario);
    
    $postArray = [];
    if($comments->num_rows > 0) {
        while($comment = mysqli_fetch_array($comments)) {
            $postArray[] = $comment;
        }
        echo json_encode(['STATUS' => 'SUCCESS', 'MESSAGE' => $postArray]);
    } else {
        echo json_encode(['STATUS' => 'ERROR', 'MESSAGE' => 'No existen posts']); 
    }
?>