# SmartWeb Services

**SmartWeb Services** es una aplicación web desarrollada con HTML, CSS, JavaScript y Bootstrap que permite administrar y visualizar los servicios de una empresa de desarrollo tecnológico.  
Incluye un panel CRUD, login de administrador y páginas informativas para los usuarios.

---

## Objetivo del Proyecto
Desarrollar un sitio web funcional y atractivo que simule el portal corporativo de una empresa de servicios digitales.  
El sistema permite gestionar los servicios (crear, editar, eliminar y activar/inactivar), visualizar detalles de cada uno y mantener comunicación mediante un formulario de contacto.

---

## Estructura del Proyecto

```
SmartWeb-Services/
│
├── index.html               # Página principal con banner y navegación
├── servicios.html           # Vista con tarjetas de servicios
├── contacto.html            # Formulario de contacto
├── login.html               # Inicio de sesión (admin)
├── crud.html                # Panel CRUD del administrador
│
├── detalle-web.html         # Detalle: Desarrollo Web
├── detalle-apps.html        # Detalle: Diseño de Aplicaciones
├── detalle-soporte.html     # Detalle: Soporte técnico remoto
├── detalle-seguridad.html   # Detalle: Seguridad informática
├── detalle-consultoria.html # Detalle: Consultoría
├── detalle-mantenimiento.html # Detalle: Mantenimiento de equipos
├── detalle-bases.html       # Detalle: Gestión de bases de datos
├── detalle-hosting.html     # Detalle: Hosting y dominios
│
├── css/
│   └── estilos.css          # Estilos personalizados
│
├── js/
│   ├── crud.js              # Lógica CRUD
│   └── login.js             # Validación de inicio de sesión
│
└── img/
    ├── logo.png
    ├── favicon.png
    └── servicios/           # Imágenes de servicios
```

---

## Tecnologías Utilizadas

- **HTML5** – Estructura semántica  
- **CSS3 / Bootstrap 5** – Diseño moderno y responsive  
- **JavaScript (Vanilla)** – Lógica de interacción y validaciones  
- **Git / GitHub** – Control de versiones  
- **Visual Studio Code** – Entorno de desarrollo

---

## Principales Funcionalidades

1. **Login de administrador** – acceso restringido.  
2. **CRUD completo** – crear, editar, eliminar y activar/inactivar servicios.  
3. **Filtro inteligente** – búsqueda por ID, nombre, precio o estado.  
4. **Vista de servicios** – catálogo visual responsive.  
5. **Páginas de detalle** – descripción individual de cada servicio.  
6. **Formulario de contacto** – envío de mensajes con datos de empresa.  
7. **Diseño adaptativo** – compatible con cualquier dispositivo.  
8. **Alertas y modales Bootstrap** – mejora la experiencia del usuario.

---

## Instrucciones de Uso

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/TU_USUARIO/smartweb-services.git
   ```

2. Abrir el proyecto en **Visual Studio Code**.

3. Iniciar localmente con:
   - Clic derecho sobre `index.html` → “Abrir con Live Server”

4. Acceso al panel de administrador:
   - Usuario: **admin**  
   - Contraseña: **1234**

---

## Mejores Prácticas

- Separación de capas: HTML / CSS / JS.  
- Uso de nombres semánticos.  
- Implementación de diagramas **UML (Casos de uso y Actividades)**.  
- Validaciones básicas en formularios.  
- Uso de **Bootstrap Modals** para interacción moderna.

---

## Diagramas del Proyecto

- **Casos de Uso:** muestra la relación entre el administrador y las funcionalidades CRUD.  
- **Diagrama de Actividades:** representa el flujo desde el login hasta la gestión de servicios.

---

## Autor

**William Ferney Acosta Ruiz**  
Proyecto académico – Desarrollo Web  
Año: 2025  
Contacto: wfacosta@poligran.edu.co

---

## Estado del Proyecto

**Versión final (Semana 7)**  
Incluye todas las vistas, funcionalidades CRUD, diagramas UML y documentación técnica completa.
