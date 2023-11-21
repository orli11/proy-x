<?php 
    include("../Config/conexion.php");
    $conn = conectar();
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $email = $_POST['email'];
    $usuario = $_POST['usuario'];
    $password = $_POST['password'];
    $fecha_nacimiento = date("Y-m-d");

    $passwordHash = password_hash($password, PASSWORD_BCRYPT);
    $queryInsert = "INSERT INTO usuarios
                        VALUES(null, '$nombre', '$apellido', '$email', '$usuario', '$passwordHash', '$fecha_nacimiento')";

    $result = mysqli_query($conn, $queryInsert);
    //echo $result;
    if ($result) {
        Header("Location: index.html");
    }
?> 