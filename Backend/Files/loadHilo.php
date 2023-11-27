<?php
    include("../Config/conexion.php");
    $conn = conectar();

    $dataPost = file_get_contents('php://input');
    $body = json_decode($dataPost, true);
    $usuario = $body['usuario'];
    $fecha = $body['fecha'];


    //trae el id del post para cargarlo en la pagina html
    $querySelect = "SELECT * FROM posts WHERE fecha='$fecha' AND id_usu='$usuario'";
    $result = mysqli_query($conn, $querySelect);

    if ($result) {
        $row = mysqli_fetch_assoc($result);
        echo json_encode($row);
    } else {
        echo json_encode(['STATUS' => 'ERROR']);
    }

?> 