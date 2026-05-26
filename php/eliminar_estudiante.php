<?php
include "conexion.php";

if(isset($_POST['id'])) {
    $id = $_POST['id'];

    $conn->query("DELETE FROM estudiantes WHERE id = $id");

    echo "ok";
}
?>
