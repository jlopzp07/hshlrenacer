document.getElementById('toggleServices').addEventListener('click', function() {
    const hiddenRows = document.querySelectorAll('.hidden-row');
    hiddenRows.forEach(row => {
        row.style.display = (row.style.display === 'none' || row.style.display === '') ? 'grid' : 'none';
    });

    // Cambiar el texto del botón según el estado de las filas
    this.textContent = (this.textContent === 'Conoce todos nuestros servicios') ? 'Mostrar menos servicios' : 'Conoce todos nuestros servicios';
});