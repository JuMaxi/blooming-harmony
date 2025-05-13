document.addEventListener('DOMContentLoaded', function () {
            const navLinks = document.querySelectorAll('.nav-link');
            const navbarCollapse = document.getElementById('navbarNav');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                if (window.innerWidth < 992) { // Adjust breakpoint as needed
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                        toggle: true
                });
                bsCollapse.hide();
            }
        });
    });
});