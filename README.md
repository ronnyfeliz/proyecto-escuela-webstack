# 🏫 Escuela Primaria San Miguel — Plataforma Web

Sistema web completo para la **Escuela Primaria San Miguel**, una institución educativa en Santo Domingo, República Dominicana, con más de 25 años de trayectoria. El proyecto consta de un **sitio web público** de presentación institucional y un **sistema de gestión administrativa** interno.

> **Proyecto grupal — INFOTEP, Programación Web 2025**

---

## ✨ Características

### 🌐 Sitio Público (5 páginas)

| Página | Archivo | Descripción |
|--------|---------|-------------|
| **Inicio** | `index.html` | Carrusel de imágenes, niveles educativos, redes sociales |
| **Nosotros** | `html/nosotros.html` | Historia, misión, visión y estadísticas |
| **Actividades** | `html/actividades.html` | Galería de imágenes: deportes, arte, ciencias, tecnología |
| **Inscripción** | `html/inscripcion.html` | Formulario de preinscripción con validación |
| **Contacto** | `html/contacto.html` | Información de contacto y formulario de mensajes |

### 🔧 Sistema Administrativo (PHP + MySQL)

- Panel de inicio de sesión
- Dashboard con gráficos (Morris.js / Flot)
- CRUD completo de **estudiantes**, **cursos** y **materias**
- Gestión de sesiones académicas
- Interfaz basada en **SB Admin 2**

### ⚙️ API REST (PHP + JSON)

Endpoints para operaciones CRUD de estudiantes con respuestas en JSON, consumidos mediante `fetch()`.

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Uso |
|------------|-----|
| **HTML5** | Estructura de todas las páginas públicas |
| **CSS3** | Estilos personalizados (5 hojas) y Bootstrap 3 (admin) |
| **JavaScript** | Validación de formularios, carrusel, peticiones AJAX |
| **PHP 7+** | Lógica backend, conexión a BD, API REST |
| **MySQL** | Base de datos relacional |
| **Font Awesome 6** | Iconos sociales |
| **jQuery** | Interacciones en panel admin |
| **SB Admin 2** | Plantilla del panel administrativo |
| **Morris.js / Flot** | Gráficos del dashboard |

---

## 📁 Estructura del Proyecto

```
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

### Requisitos

- XAMPP / WAMP / Laragon (Apache + PHP + MySQL)
- Navegador web moderno

### Pasos

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/escuela-primaria-san-miguel.git
   ```

2. **Mover a la carpeta del servidor**
   ```bash
   # En XAMPP: C:\xampp\htdocs\escuela_proyecto
   ```

3. **Importar la base de datos**
   - Abre phpMyAdmin
   - Crea una base de datos llamada `escuela`
   - Importa el archivo `sql/escuela.sql`

4. **Configurar la conexión**
   - Edita `php/conexion.php` si tu usuario/contraseña de MySQL es distinto

5. **Acceder al sitio**
   - Sitio público: `http://localhost/escuela_proyecto/index.html`
   - API CRUD: los endpoints en `php/` devuelven JSON
   - Sistema admin: `http://localhost/escuela_proyecto/Bases%20de%20datos%20y%20PHP/escuela%20San%20Miguel/`

---

## 👥 Equipo de Desarrollo

| Integrante | Rol |
|------------|-----|
| **Ronny** | **Estructura y maquetación HTML del sitio público** |
| **Adrian** | Estilos CSS y diseño visual |
| Integrante 3 | Lógica JavaScript y validaciones |
| Integrante 4 | Backend PHP y conexión a base de datos |
| Integrante 4 | Base de datos y modelo relacional |

> *Completa los nombres según corresponda.*

---

## 🖼️ Capturas de Pantalla

*(Agrega aquí capturas del proyecto: página de inicio, formulario de inscripción, panel admin, etc.)*

| Vista Previa | Descripción |
|--------------|-------------|
|<img width="1351" height="613" alt="image" src="https://github.com/user-attachments/assets/dafeec83-9ef0-4d77-907a-0807486253c7" />
 | Página de inicio con carrusel |
|<img width="1349" height="610" alt="image" src="https://github.com/user-attachments/assets/e3804955-96ac-4770-98bc-368cbdd41488" />
 | Formulario de preinscripción |

---

## 📄 Licencia

Este proyecto fue desarrollado con fines educativos como parte del programa **Programación Web** de **INFOTEP**, República Dominicana.
