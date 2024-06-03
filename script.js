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

/* JS para las FAQ */

document.querySelectorAll('.faq-answer').forEach(answer => {
    answer.style.maxHeight = '0';
});

document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        const toggle = item.querySelector('.faq-toggle img');
        
        if (answer.style.maxHeight === '0px') {
            answer.style.maxHeight = answer.scrollHeight + 'px';
            toggle.src = 'assets/faqtoogleclose.svg';
        } else {
            answer.style.maxHeight = '0px';
            toggle.src = 'assets/faqtoogle.svg';
        }
    });
});


/* JS para la animación de las estrellas en testimonios */
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.star').forEach(star => {
                    star.classList.add('visible');
                });
            }
        });
    }, { threshold: 1 });

    document.querySelectorAll('.testimonial').forEach(item => {
        observer.observe(item);
    });
});

