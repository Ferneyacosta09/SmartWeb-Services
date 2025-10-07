let servicios = [
  { id: 1, nombre: "Desarrollo de páginas web", precio: 2500000, estado: true },
  { id: 2, nombre: "Diseño de aplicaciones", precio: 5100000, estado: true },
  { id: 3, nombre: "Soporte técnico remoto", precio: 500000, estado: true },
  { id: 4, nombre: "Seguridad informática", precio: 1200000, estado: true },
  { id: 5, nombre: "Consultoría en transformación", precio: 3000000, estado: true },
  { id: 6, nombre: "Diseño UX/UI profesional", precio: 2000000, estado: false },
  { id: 7, nombre: "Mantenimiento de equipos", precio: 1000000, estado: true },
  { id: 8, nombre: "Gestión de bases de datos", precio: 2000000, estado: true },
  { id: 9, nombre: "Hosting y dominios", precio: 800000, estado: true }
];

let editandoId = null; // Para saber si estamos editando o creando
let eliminarId = null; // Para saber qué servicio se va a eliminar

// Renderizar tabla
function renderizarTabla(filtro = "") {
  const tbody = document.getElementById("tablaServicios");
  tbody.innerHTML = "";

  servicios
    .filter(s => {
      const estadoTexto = s.estado ? "activo" : "inactivo";

      // ✅ Búsqueda exacta para estados
      if (filtro.toLowerCase() === "activo" || filtro.toLowerCase() === "inactivo") {
        return estadoTexto === filtro.toLowerCase();
      }

      // ✅ Búsqueda parcial para ID, nombre y precio
      return (
        s.id.toString().includes(filtro) ||
        s.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
        s.precio.toString().includes(filtro)
      );
    })
    .forEach(s => {
      const fila = `
        <tr>
          <td>${s.id}</td>
          <td>${s.nombre}</td>
          <td>${s.precio.toLocaleString()} COP</td>
          <td>
            <button class="btn btn-sm ${s.estado ? "btn-success" : "btn-warning"}" onclick="toggleEstado(${s.id})">
              ${s.estado ? "Activo" : "Inactivo"}
            </button>
          </td>
          <td>
            <button class="btn btn-primary btn-sm" onclick="abrirModalEditar(${s.id})">Editar</button>
            <button class="btn btn-danger btn-sm" onclick="abrirModalEliminar(${s.id})">Eliminar</button>
          </td>
        </tr>
      `;
      tbody.innerHTML += fila;
    });
}

// Buscar
document.getElementById("buscador").addEventListener("input", (e) => {
  renderizarTabla(e.target.value);
});

// Abrir modal para crear
function abrirModalCrear() {
  editandoId = null;
  document.getElementById("servicioModalLabel").textContent = "Crear servicio";
  document.getElementById("nombreServicio").value = "";
  document.getElementById("precioServicio").value = "";
  const modal = new bootstrap.Modal(document.getElementById("servicioModal"));
  modal.show();
}

// Abrir modal para editar
function abrirModalEditar(id) {
  const servicio = servicios.find(s => s.id === id);
  if (servicio) {
    editandoId = id;
    document.getElementById("servicioModalLabel").textContent = "Editar servicio";
    document.getElementById("nombreServicio").value = servicio.nombre;
    document.getElementById("precioServicio").value = servicio.precio;
    const modal = new bootstrap.Modal(document.getElementById("servicioModal"));
    modal.show();
  }
}

// Guardar (crear o editar)
document.getElementById("guardarServicio").addEventListener("click", () => {
  const nombre = document.getElementById("nombreServicio").value.trim();
  const precio = parseInt(document.getElementById("precioServicio").value.trim());

  if (!nombre || isNaN(precio)) {
    alert("Por favor complete todos los campos correctamente.");
    return;
  }

  if (editandoId) {
    // Editar
    const servicio = servicios.find(s => s.id === editandoId);
    if (servicio) {
      servicio.nombre = nombre;
      servicio.precio = precio;
    }
  } else {
    // Crear
    const nuevo = {
      id: servicios.length ? servicios[servicios.length - 1].id + 1 : 1,
      nombre,
      precio,
      estado: true
    };
    servicios.push(nuevo);
  }

  renderizarTabla();

  // Cerrar modal
  const modal = bootstrap.Modal.getInstance(document.getElementById("servicioModal"));
  modal.hide();
});

// Abrir modal de eliminar
function abrirModalEliminar(id) {
  eliminarId = id;
  const servicio = servicios.find(s => s.id === id);
  if (servicio) {
    document.getElementById("servicioEliminarNombre").textContent = servicio.nombre;
    const modal = new bootstrap.Modal(document.getElementById("eliminarModal"));
    modal.show();
  }
}

// Confirmar eliminación
document.getElementById("confirmarEliminar").addEventListener("click", () => {
  if (eliminarId !== null) {
    servicios = servicios.filter(s => s.id !== eliminarId);
    renderizarTabla();
    eliminarId = null;

    // Cerrar modal
    const modal = bootstrap.Modal.getInstance(document.getElementById("eliminarModal"));
    modal.hide();
  }
});

// Activar/Desactivar
function toggleEstado(id) {
  const servicio = servicios.find(s => s.id === id);
  if (servicio) {
    servicio.estado = !servicio.estado;
    renderizarTabla();
  }
}

// Inicializar
renderizarTabla();