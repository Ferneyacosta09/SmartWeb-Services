document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const usuario = document.getElementById("usuario").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  const usuarioValido = "admin";
  const passwordValido = "1234";

  if (usuario === usuarioValido && password === passwordValido) {
    window.location.href = "crud.html"; 
  } else {
    errorMsg.style.display = "block";
  }
});