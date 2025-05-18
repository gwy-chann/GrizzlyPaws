// js for hamburger menu
document.addEventListener('DOMContentLoaded', function() {
    // Get the mobile menu button and navigation
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const nav = document.querySelector('nav');
    
    // Check if both elements exist before adding event listener
    if (mobileMenuButton && nav) {
      // Toggle navigation when clicking the hamburger button
      mobileMenuButton.addEventListener('click', function() {
        nav.classList.toggle('active');
      });
    } else {
      console.error('Mobile menu button or navigation not found');
    }
  });