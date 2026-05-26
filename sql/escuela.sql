
-- Crear base de datos
CREATE DATABASE IF NOT EXISTS escuela;
USE escuela;

-- Crear tabla para formulario de Pre-Inscripción
CREATE TABLE preinscripcion (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_estudiante VARCHAR(150) NOT NULL,
    edad INT NOT NULL,
    grado VARCHAR(50) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    nombre_tutor VARCHAR(150) NOT NULL,
    correo VARCHAR(120) NOT NULL,
    telefono VARCHAR(20) NOT NULL,
    contraseña VARCHAR(255) NOT NULL,
    comentarios TEXT,
    aceptar_terminos TINYINT(1) NOT NULL DEFAULT 0,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
