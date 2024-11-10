
    // Wait for the logo animation to complete before showing the main content
    window.onload = function() {
        setTimeout(function() {
            document.querySelector('.logo-animation').classList.add('hide');
        }, 2000); // Show logo for 3 seconds
    }
