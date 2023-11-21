<?php
    include('../config/conexion.php');
    $con = conectar();

    $nombre = $_POST['nombre'];
    $apellidos = $_POST['apellidos'];
    $usuario = $_POST['usuario'];
    $email = $_POST['email'];
    $pass = $_POST['password'];
    $dia = $_POST['dia'];
    $mes = $_POST['mes'];
    $anio = $_POST['anio'];

    $queyVerifica = "SELECT * FROM usuarios WHERE usuario='$usuario'";
    $validaUsuario = mysqli_query($con, $queyVerifica);
    if($validaUsuario->num_rows == 0){

        $passwordHash = password_hash($password, PASSWORD_BCRYPT);
        $fecha = sprintf('%04d-%02d-%02d', $anio, $mes, $dia);

        $query = "INSERT INTO usuarios VALUES (null, '$nombre', '$apellidos', '$email', '$usuario',  '$passwordHash', '$fecha')";
        $result = mysqli_query($con, $query);

        if($result){
            echo json_encode(['STATUS' => 'OK']);
            header("Location: ../../index.html");
        } else {
            echo json_encode(['STATUS' => 'ERROR']);
            header("location: ../../registro.html?error=true");
        }
    } else {
        header("location: ../../registro.html?existe=true");
    }
?>