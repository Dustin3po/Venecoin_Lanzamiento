// Toggle modo oscuro
document.getElementById('toggle-dark').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Mostrar sección móvil si pantalla es pequeña
window.addEventListener('load', () => {
  const movil = document.getElementById('movil');
  if (window.innerWidth < 600) {
    movil.style.display = 'block';
  } else {
    movil.style.display = 'none';
  }
});
