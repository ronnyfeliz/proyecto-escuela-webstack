<?php
include "conexion.php";

if(isset($_POST['id'])) {

    $id = $_POST['id'];
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $edad = $_POST['edad'];
    $grado = $_POST['grado'];

    $query = "UPDATE estudiantes 
              SET nombre='$nombre', apellido='$apellido', edad='$edad', grado='$grado' 
              WHERE id=$id";

    if ($conn->query($query) === TRUE) {
        echo "ok";
    } else {
        echo $conn->error;
    }
}
?>
