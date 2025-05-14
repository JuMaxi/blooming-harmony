document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.getElementById('navbarNav');       

    // Function to handle the toggle button in small screens
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

    // Function to scroll the timeline to the current month
    const scrollToCurrentMonth = () => {
        const currentMonth = new Date().toLocaleString('default', { month: 'long' }); // Get the current month name
        const monthElement = document.querySelector(`[data-month="${currentMonth}"]`); // Find the element with the current month
        if (monthElement) {
            monthElement.scrollIntoView({ behavior: 'smooth', block: 'center' }); // Scroll to the element smoothly
        }
    };

    // Call the function when the page loads
    scrollToCurrentMonth();

});