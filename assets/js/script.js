// Función para abrir/cerrar el menú y cambiar el icono
function toggleMenu() {
  const menu = document.getElementById('menu');
  const menuIcon = document.querySelector('.menu-icon');

  // Toggle the menu visibility
  menu.classList.toggle('active');

  // Cambiar el icono de las líneas horizontales a una "X"
  if (menu.classList.contains('active')) {
    menuIcon.classList.remove('fa-bars'); // Quitar icono de líneas
    menuIcon.classList.add('fa-times');   // Añadir icono de "X"
  } else {
    menuIcon.classList.remove('fa-times'); // Quitar icono de "X"
    menuIcon.classList.add('fa-bars');     // Añadir icono de líneas
  }
}
