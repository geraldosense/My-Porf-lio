// Animação de fade-in dos cards ao carregar
window.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, i) => {
        setTimeout(() => {
            card.classList.add('visible');
        }, 120 + i * 120);
    });
});
// Efeito de clique nos botões
window.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.card-link').forEach(btn => {
        btn.addEventListener('mousedown', function() {
            btn.style.boxShadow = '0 1px 4px rgba(0,191,174,0.10)';
        });
        btn.addEventListener('mouseup', function() {
            btn.style.boxShadow = '';
        });
        btn.addEventListener('mouseleave', function() {
            btn.style.boxShadow = '';
        });
    });
}); 