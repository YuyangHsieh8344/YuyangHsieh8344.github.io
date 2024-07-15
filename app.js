document.addEventListener('DOMContentLoaded', function() {
    const scrollButtons = document.querySelectorAll('.scroll-down-btn');
    
    scrollButtons.forEach((button, index) => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Find the next scroll-down button
            const nextButton = scrollButtons[index + 1];
            
            if (nextButton) {
                // Get the height of the fixed header if you have one
                const headerHeight = document.querySelector('header').offsetHeight || 0;
                
                // Calculate the position to scroll to
                const targetPosition = nextButton.getBoundingClientRect().top + window.pageYOffset - headerHeight - window.innerHeight + nextButton.offsetHeight + 20; // 20px extra for padding
                
                // Smooth scroll to the target position
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            } else {
                // If it's the last button, scroll to the bottom of the page
                window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
});