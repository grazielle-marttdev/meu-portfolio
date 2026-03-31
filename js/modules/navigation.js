export function initNavigation() {
    const sections = document.querySelectorAll('.section');
    const links = document.querySelectorAll('.link');

    // Configura o Intersection Observer para destacar o link ativo
    const observer = new IntersectionObserver((entries) => {
        // Cada seção "observada" é verificada para ver se está visível na viewport
        entries.forEach((entry) => {
            // Verifica se a seção está visível (intersectando a viewport)
            if (entry.isIntersecting) {
                // Obtém o ID da seção visível
                const id = entry.target.getAttribute('id');
                // Para cada link, verifica se o href corresponde ao ID da seção visível
                links.forEach((link) => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    }, { threshold: 0.2}); // Define o momento em que a seção é considerada visível (20% visível)

    // Manda o observer vigiar cada seção
    sections.forEach((section) => {
        observer.observe(section);
    });
}

// Usamos IntersectionObserver porque é mais eficiente que escutar o scroll:
// ele só dispara quando uma seção entra/sai da tela, sem cálculos manuais.
