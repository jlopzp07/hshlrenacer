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

document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slider-image');
    const totalSlides = slides.length;
    const slidesContainer = document.querySelector('.facilities-images-container');

    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    const openModalButton = document.getElementById('openModalButton');
    const closeModalButton = document.getElementById('closeModalButton');
    const modal = document.querySelector('.facilities-images-modal');

    function showSlide(index) {
        const offset = -index * 100;
        slidesContainer.style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    }

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);


    openModalButton.addEventListener('click', () => {
        modal.style.display = 'flex';
        showSlide(currentIndex);
    });

    closeModalButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    showSlide(currentIndex);
});
/* JS para las FAQ */

document.querySelectorAll('.faq-answer').forEach(answer => {
    answer.style.maxHeight = '0';
});

document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        const svg = item.querySelector('.faq-toggle');

        if (answer.style.maxHeight === '0px' || !answer.style.maxHeight) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
            svg.innerHTML = '<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 15l6 -6l6 6" />';
        } else {
            answer.style.maxHeight = '0px';
            svg.innerHTML = '<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" />';
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

