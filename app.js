async function loadContent(containerId, file) {
    try {
        const response = await fetch(file);
        const content = await response.text();
        document.getElementById(containerId).innerHTML = content;
        
        // Initialiser le bouton top si c'est le conteneur btnTop
        if (containerId === 'btnTop-container') {
            initScrollTopButton();
        }
    } catch (error) {
        console.error(`Erreur lors du chargement de ${file}:`, error);
    }
}

function initScrollTopButton() {
    const scrollTop = document.querySelector('.scroll-top');
    if (!scrollTop) return;
    
    // Afficher/masquer le bouton en fonction du scroll
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 100) {
            scrollTop.classList.add('show');
            scrollTop.classList.remove('hide');
        } else {
            scrollTop.classList.add('hide');
            scrollTop.classList.remove('show');
        }
    });

    // Action de retour en haut
    scrollTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Charger toutes les sections
document.addEventListener('DOMContentLoaded', () => {
    loadContent('nav-container', 'sections/nav.html');
    loadContent('hero-container', 'sections/hero.html');
    loadContent('features-container', 'sections/features.html');
    loadContent('reviews-container', 'sections/reviews.html');
    loadContent('team-container', 'sections/team.html');
    loadContent('pricing-container', 'sections/pricing.html');
    loadContent('facts-container', 'sections/facts.html');
    loadContent('faq-container', 'sections/faq.html');
    loadContent('contact-container', 'sections/contact.html');
    loadContent('footer-container', 'sections/footer.html');
    loadContent('btnTop-container', 'sections/btnTop.html');
});