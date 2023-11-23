<?php 
    include("../Config/conexion.php");
    $conn = conectar();

    $dataPost = file_get_contents('php://input');
    $body = json_decode($dataPost, true);
    $usuario = $body['usuario'];
    $queryUsuario = "SELECT * FROM usuarios WHERE usuario='$usuario'";
    $validaUsuario = mysqli_query($conn, $queryUsuario);
    if($validaUsuario->num_rows > 0){
        $user = $validaUsuario->fetch_assoc();
        echo json_encode(['STATUS' => 'SUCCESS', 'MESSAGE' => $user]);
    } else {
        echo json_encode(['STATUS' => 'SUCCESS', 'MESSAGE' => 'No se encontró el usuario']);
    }

?>