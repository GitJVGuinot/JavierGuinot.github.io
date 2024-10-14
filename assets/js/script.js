// Menu
///////////////////////////////////////////////////////////////////////////////
// Function to open/close the menu
function toggleMenu() {
  const menu = document.getElementById('menu');
  const menuIcon = document.querySelector('.menu-icon');

  // Toggle the menu visibility
  menu.classList.toggle('active');

  // Change icon from linex to x
  if (menu.classList.contains('active')) {
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-times');
  } else {
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
  }
}
///////////////////////////////////////////////////////////////////////////////

// Send mail
///////////////////////////////////////////////////////////////////////////////
const PUBLIC_KEY = 'hfgKxpOi2zv3KWsCP';
const SERVICE_ID = 'service_5j7x2xc';
const TEMPLATE_ID = 'template_kwd7tc7';

function sendEmail(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const templateParams = {
    from_name: name,
    from_email: email,
    message: message,
  };

  // Send mail EmailJS
  emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Email sent successfully!');
    }, (err) => {
      console.error('FAILED...', err);
      alert('Error sending email, please try again.');
    });
}
///////////////////////////////////////////////////////////////////////////////

// Works filter
///////////////////////////////////////////////////////////////////////////////
// Function to filter projects based on selected filter
function filterProjects(filter) {
  const projects = document.querySelectorAll('.project');
  projects.forEach(project => {
    const projectFilter = project.getAttribute('data-filter');

    if (filter === 'All' || projectFilter === filter) {
      project.style.display = 'block'; // Show the project
    } else {
      project.style.display = 'none'; // Hide the project
    }
  });
}

// Add event listeners to filter links
document.querySelectorAll('.filter-menu .menu-link').forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    const filter = this.getAttribute('data-filter');
    filterProjects(filter);
  });
});

// Initially show all projects
filterProjects('all');
///////////////////////////////////////////////////////////////////////////////

// Video sound
///////////////////////////////////////////////////////////////////////////////
let userInteracted = false;

// Track user interaction with the document
document.addEventListener('click', () => {
  userInteracted = true;
});

// Get all project divs
const projects = document.querySelectorAll('.project');

// Add hover event listeners to each project
projects.forEach(project => {
  const video = project.querySelector('video');

  project.addEventListener('mouseenter', () => {
    if (userInteracted) {
      video.muted = false;
    }
  });

  project.addEventListener('mouseleave', () => {
    if (userInteracted) {
      video.muted = true;
    }
  });
});
///////////////////////////////////////////////////////////////////////////////
