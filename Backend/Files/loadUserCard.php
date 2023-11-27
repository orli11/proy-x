<?php
    include("../Config/conexion.php");
    $conn = conectar();

    $dataPost = file_get_contents('php://input');
    $body = json_decode($dataPost, true);
    $usuario = $body['fromUser'];


    //trae el id del post para cargarlo en la pagina html
    $querySelect = "SELECT usuario, email FROM usuarios WHERE usuario = '$usuario'";
    $result = mysqli_query($conn, $querySelect);

    if ($result) {
        $row = mysqli_fetch_assoc($result);
        echo json_encode($row);
    } else {
        echo json_encode(['STATUS' => 'ERROR']);
    }

?>