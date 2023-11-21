<?php
    function conectar() {
        $host = 'localhost:8889';
        $user = 'root';
        $pass = 'root';
        $db = 'x';
        $con = mysqli_connect($host, $user, $pass, $db);
        return $con;
        echo json_encode(['STATUS' => 'DB: CONEXION ESTABLECIDA']);
    }
?>