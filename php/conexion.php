<?php
$host = "localhost";
$user = "root";     // usuario por defecto en XAMPP
$pass = "";         // contraseña en XAMPP viene vacía
$db   = "escuela";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

$conn->set_charset("utf8");
?>
