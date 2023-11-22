<?php
    include("../config/conexion.php");
    $con = conectar();
    $dataPost = file_get_contents('php://input');
    $body = json_decode($dataPost, true);

    if($body !== null) {
        $email = $body['email'];
        $password = $body['password'];

        $queryUsuario = "SELECT * FROM usuarios WHERE usuario='$email'";
        $validaUsuario = mysqli_query($con, $queryUsuario);

        if($validaUsuario->num_rows > 0) {
            $usuario = $validaUsuario->fetch_assoc();

            if(password_verify($pass, $usuario['password'])) {
                echo json_encode(['STATUS' => 'SUCCESS', 'MESSAGE' => 'Success', 'USUARIO' => $usuario]);
            } else {
                echo json_encode(['STATUS' => 'ERROR', 'MESSAGE' => 'Contraseñas no coinciden']);
            }
        } else {
            echo json_encode(['STATUS' => 'ERROR', 'MESSAGE' => 'No se encontro usuario']);
        }
    } else {
        http_response_code(400);
        echo 'Invalid Data';
    }
?>  