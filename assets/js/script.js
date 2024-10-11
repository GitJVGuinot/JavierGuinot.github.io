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

const PUBLIC_KEY = 'hfgKxpOi2zv3KWsCP';
const SERVICE_ID = 'service_5j7x2xc';
const TEMPLATE_ID = 'template_kwd7tc7';

function sendEmail(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Crear el objeto con los datos del formulario
  const templateParams = {
    from_name: name,
    from_email: email,
    message: message,
  };

  // Enviar el correo
  emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Email sent successfully!');
    }, (err) => {
      console.error('FAILED...', err);
      alert('Error sending email, please try again.');
    });
}

// Function to filter projects based on selected filter
function filterProjects(filter) {
  const projects = document.querySelectorAll('.project');
  projects.forEach(project => {
    // Get the filter data attribute of the project
    const projectFilter = project.getAttribute('data-filter');

    // Show or hide the project based on the filter
    if (filter === 'all' || projectFilter === filter) {
      project.style.display = 'block'; // Show the project
    } else {
      project.style.display = 'none'; // Hide the project
    }
  });
}

// Add event listeners to filter links
document.querySelectorAll('.filter-menu .menu-link').forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default anchor behavior
    const filter = this.getAttribute('data-filter'); // Get the filter from the clicked link
    filterProjects(filter); // Call the filter function
  });
});

// Initially show all projects
filterProjects('all');
