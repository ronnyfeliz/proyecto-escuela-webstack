<?php
include "conexion.php";

if(isset($_POST['nombre'])) {
    $nombre   = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $edad = $_POST['edad'];
    $grado = $_POST['grado'];
    $fecha= $_POST ['fecha de nacimiento']

    $query = "INSERT INTO estudiantes (nombre, apellido, edad, fecha, grado)
              VALUES ('$nombre', '$apellido', '$edad', $fecha', '$grado')";

    if ($conn->query($query) === TRUE) {
        echo "ok";
    } else {
        echo "Error: " . $conn->error;
    }
}
?>
