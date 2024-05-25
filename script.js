document.getElementById('toggleServices').addEventListener('click', function() {
    const hiddenRows = document.querySelectorAll('.hidden-row');
    hiddenRows.forEach(row => {
        if (row.classList.contains('show')) {
            row.classList.remove('show');
            setTimeout(() => {
                row.style.display = 'none';
            }, 500); // Duración de la transición en ms
        } else {
            row.style.display = 'grid';
            setTimeout(() => {
                row.classList.add('show');
            }, 10); // Pequeño retraso para permitir la actualización del DOM
        }
    });

    // Cambiar el texto del botón según el estado de las filas
    this.textContent = (this.textContent === 'Conoce todos nuestros servicios') ? 'Mostrar menos servicios' : 'Conoce todos nuestros servicios';

    // Si se están ocultando las filas, desplazar la vista hacia la sección de servicios
    if (this.textContent === 'Conoce todos nuestros servicios') {
        document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
    }
});

document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById("myModal");
    const openModalBtn = document.querySelector(".open-modal-btn");
    const closeBtn = document.querySelector(".close-btn");

    openModalBtn.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});

