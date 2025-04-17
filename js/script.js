// JavaScript for the image carousel
document.addEventListener('DOMContentLoaded', function() {
    // Get all images in the hero section
    const slides = document.querySelectorAll('.hero-image img');
    const indicators = document.querySelectorAll('.carousel-indicator');
    let currentSlide = 0;
    const slideCount = slides.length;
    
    // Function to show a specific slide
    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Remove active class from all indicators
        indicators.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Show the current slide and activate its indicator
        slides[index].classList.add('active');
        indicators[index].classList.add('active');
        
        // Update current slide index
        currentSlide = index;
    }
    
    // Function to show the next slide
    function nextSlide() {
        const next = (currentSlide + 1) % slideCount;
        showSlide(next);
    }
    
    // Add click event to indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showSlide(index);
            // Reset the timer when manually changing slides
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, 5000);
        });
    });
    
    // Start automatic slideshow
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Pause slideshow when hovering over the hero container
    const heroContainer = document.querySelector('.hero-container');
    heroContainer.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    // Resume slideshow when mouse leaves
    heroContainer.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });
});

// JavaScript for the product card 

document.addEventListener('DOMContentLoaded', function() {
    const productContainer = document.querySelector('.product-container');
    const leftArrow = document.querySelector('.arrow.left');
    const rightArrow = document.querySelector('.arrow.right');
    
    leftArrow.addEventListener('click', function() {
        productContainer.scrollBy({ left: -400, behavior: 'smooth' });
    });
    
    rightArrow.addEventListener('click', function() {
        productContainer.scrollBy({ left: 400, behavior: 'smooth' });
    });
});

 // Get all section headers
 const sectionHeaders = document.querySelectorAll('.section-header');

 sectionHeaders.forEach(header => {
     header.addEventListener('click', () => {
         const section = header.closest('.section');
         const isActive = section.classList.contains('active');
 
         // Close all sections
         document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
 
         // Toggle current section
         if (!isActive) {
             section.classList.add('active');
         }
     });
 });

 

 // js for hamburger menu
 document.addEventListener('DOMContentLoaded', function() {
    // Get the mobile menu button and navigation
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const nav = document.querySelector('nav');
    
    // Toggle navigation when clicking the hamburger button
    mobileMenuButton.addEventListener('click', function() {
      nav.classList.toggle('active');
    });
  });