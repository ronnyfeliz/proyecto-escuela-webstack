# 🏫 Escuela Primaria San Miguel — Plataforma Web

Sistema web completo para la **Escuela Primaria San Miguel**, institución educativa de Santo Domingo, República Dominicana, con más de 25 años de trayectoria. El proyecto incluye un **sitio web público** de presentación institucional y un **sistema administrativo interno** para la gestión escolar.  

> **Proyecto grupal — INFOTEP, Programación Web (diciembre 2025)**  

---

## ✨ Características

### 🌐 Sitio Público (5 páginas)

| Página | Archivo | Descripción |
|--------|---------|-------------|
| **Inicio** | `index.html` | Carrusel de imágenes, niveles educativos, enlaces a redes sociales |
| **Nosotros** | `html/nosotros.html` | Historia, misión, visión y estadísticas |
| **Actividades** | `html/actividades.html` | Galería de deportes, arte, ciencias y tecnología |
| **Inscripción** | `html/inscripcion.html` | Formulario de preinscripción con validación |
| **Contacto** | `html/contacto.html` | Información institucional y formulario de mensajes |

### 🔧 Sistema Administrativo (PHP + MySQL)

- Panel de inicio de sesión  
- Dashboard con gráficos (Morris.js / Flot)  
- CRUD de **estudiantes**, **cursos** y **materias**  
- Gestión de sesiones académicas  
- Interfaz basada en **SB Admin 2**  

### ⚙️ API REST (PHP + JSON)

Endpoints CRUD para estudiantes con respuestas en JSON, consumidos mediante `fetch()`.  

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Uso |
|------------|-----|
| **HTML5** | Estructura de páginas públicas |
| **CSS3** | Estilos personalizados y Bootstrap 3 (admin) |
| **JavaScript** | Validación de formularios, carrusel, AJAX |
| **PHP 7+** | Lógica backend, conexión a BD, API REST |
| **MySQL** | Base de datos relacional |
| **Font Awesome 6** | Iconos sociales |
| **jQuery** | Interacciones en panel admin |
| **SB Admin 2** | Plantilla administrativa |
| **Morris.js / Flot** | Gráficos del dashboard |

---

## 📁 Estructura del Proyecto

```bash
escuela_proyecto/
│
├── index.html                     # Página principal
├── README.md                      # Este archivo
│
├── html/                          # Páginas del sitio público
│   ├── nosotros.html
│   ├── actividades.html
│   ├── inscripcion.html
│   └── contacto.html
│
├── Style/                         # Hojas de estilo CSS
│   ├── index.css
│   ├── nosotros.css
│   ├── actividad.css
│   ├── inscripcion.css
│   └── contacto.css
│
├── javascript/                    # Lógica del frontend
│   ├── Carrrusel.js               # Carrusel de imágenes
│   ├── Inscripciones.js           # Validación de inscripción
│   └── Contacto.js                # Validación de contacto
│
├── php/                           # API REST (CRUD estudiantes)
│   ├── conexion.php
│   ├── insertar_estudiante.php
│   ├── listar_estudiantes.php
│   ├── editar_estudiante.php
│   └── eliminar_estudiante.php
│
├── sql/                           # Esquema de base de datos
│   └── escuela.sql
│
└── Bases de datos y PHP/          # Sistema administrativo
    └── escuela San Miguel/
        ├── index.php              # Redirección al login
        ├── config/                # Conexión y funciones DB
        ├── pages/                 # Módulos del admin
        └── dist/                  # Assets (CSS, JS, vendor)
```

---

## 🚀 Instalación y Uso

### 📋 Requisitos

- XAMPP / WAMP / Laragon (Apache + PHP + MySQL)
- Navegador web moderno

### ⚙️ Pasos de instalación

#### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/escuela-primaria-san-miguel.git
```

#### 2️⃣ Mover el proyecto al servidor local

Ejemplo en XAMPP:

```bash
C:\xampp\htdocs\escuela_proyecto
```

#### 3️⃣ Importar la base de datos

- Crear la base de datos `escuela` en **phpMyAdmin**
- Importar el archivo:

```bash
sql/escuela.sql
```

#### 4️⃣ Configurar conexión

Editar el archivo:

```bash
php/conexion.php
```

Modificar:
- usuario
- contraseña
- nombre de la base de datos

(si tu configuración local es diferente).

#### 5️⃣ Acceder al sistema

### 🌐 Sitio público

```bash
http://localhost/escuela_proyecto/index.html
```

### 🔌 API CRUD

Endpoints ubicados en:

```bash
php/
```

### 🛠️ Panel administrativo

```bash
http://localhost/escuela_proyecto/Bases%20de%20datos%20y%20PHP/escuela%20San%20Miguel/
```

---

## 👥 Equipo de Desarrollo

| Integrante | Rol |
|---|---|
| Ronny Sebastián Feliz Mejía | Estructura y maquetación HTML |
| Adrián Martínez | JavaScript y validaciones |
| Ángel Daviel Soriano Mora | Base de datos MySQL y modelo relacional |
| José Joaquín | Backend PHP y Estilos visuales y personalización del frontend |

---

## 🖼️ Capturas de Pantalla

| Vista Previa | Descripción |
|---|---|
| <img width="1351" height="613" alt="inicio" src="https://github.com/user-attachments/assets/dafeec83-9ef0-4d77-907a-0807486253c7" /> | Página de inicio con carrusel |
| <img width="1349" height="610" alt="inscripcion" src="https://github.com/user-attachments/assets/e3804955-96ac-4770-98bc-368cbdd41488" /> | Formulario de preinscripción |

---

## 📄 Licencia

Proyecto educativo desarrollado en el programa **Programación Web de INFOTEP**, República Dominicana.

Todos los derechos reservados al equipo de desarrollo.

