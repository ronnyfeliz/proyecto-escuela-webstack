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

