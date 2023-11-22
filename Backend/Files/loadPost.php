<?php
    include("../config/conexion.php");
    $conn = conectar();

    $querySelect = "SELECT * FROM posts";
    $posts = mysqli_query($conn, $querySelect);
    $postArray = [];
    if($posts->num_rows > 0) {
        while($post = mysqli_fetch_array($posts)) {
            $postArray[] = $post;
        }
        echo json_encode(['STATUS' => 'SUCCESS', 'MESSAGE' => $postArray]);
    } else {
        echo json_encode(['STATUS' => 'ERROR', 'MESSAGE' => 'No existen posts']); 
    }
?>