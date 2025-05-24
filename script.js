const sidebarButtons = document.querySelectorAll('.sidebar button');
const submenu = document.querySelector('.submenu');

const submenusData = {
  validacion: ['Supervisores', 'Verificación 1', 'Verificación 2', 'Verificación 3'],
  buro: [],
  creditos: ['Reporte créditos', 'Restructuración de pagos', 'Vencido por promotor', 'Crédito nuevo'],
  clientes: ['Consultas', 'Reportes', 'Telemarketing'],
  cobranza: [],
  catalogos: [],
  configuracion: [],
  gestion: [],
  contabilidad: [],
  simulador: ['Simulador de préstamos', 'Simulador de pagos', 'Simulador de tasas'],
};

function clearActive() {
  sidebarButtons.forEach(btn => btn.classList.remove('active'));
}

sidebarButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    clearActive();
    btn.classList.add('active');
    const key = btn.getAttribute('data-menu');
    const items = submenusData[key] || [];

    submenu.innerHTML = '';

    if (items.length === 0) {
      submenu.innerHTML = '<p>No hay opciones disponibles.</p>';
      return;
    }

    items.forEach(text => {
      const b = document.createElement('button');
      b.textContent = text;
      submenu.appendChild(b);
    });
  });
});
