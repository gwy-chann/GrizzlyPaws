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
    // Product slider functionality
    const productSliders = document.querySelectorAll('.product-slider');
    
    productSliders.forEach(slider => {
      const productGrid = slider.querySelector('.products-grid');
      const leftArrow = slider.querySelector('.arrow.left');
      const rightArrow = slider.querySelector('.arrow.right');
      
      if (!productGrid || !leftArrow || !rightArrow) return;
      
      // Calculate scroll amount based on visible area and card width
      const calculateScrollAmount = () => {
        const cardWidth = productGrid.querySelector('.product-card')?.offsetWidth || 300;
        const gap = 20; // Match this to your CSS gap
        return cardWidth + gap;
      };
      
      // Function to scroll left - show complete cards
      leftArrow.addEventListener('click', () => {
        const scrollAmount = calculateScrollAmount();
        // Calculate the current position to find nearest card boundary
        const currentPos = productGrid.scrollLeft;
        const mod = currentPos % scrollAmount;
        
        // If we're exactly at a card boundary, go back one card
        // Otherwise, go back to the previous card boundary
        const targetPos = mod === 0 
          ? currentPos - scrollAmount 
          : currentPos - mod - (mod === 0 ? 0 : scrollAmount);
        
        productGrid.scrollTo({
          left: Math.max(0, targetPos),
          behavior: 'smooth'
        });
      });
      
      // Function to scroll right - show complete cards
      rightArrow.addEventListener('click', () => {
        const scrollAmount = calculateScrollAmount();
        // Calculate next card boundary
        const currentPos = productGrid.scrollLeft;
        const mod = currentPos % scrollAmount;
        const targetPos = currentPos + scrollAmount - mod + (mod === 0 ? scrollAmount : 0);
        
        productGrid.scrollTo({
          left: Math.min(productGrid.scrollWidth - productGrid.clientWidth, targetPos),
          behavior: 'smooth'
        });
      });
      
      // Check scroll position to disable arrows when at edges
      const updateArrowState = () => {
        // Check if at start (left edge)
        if (productGrid.scrollLeft <= 5) {
          leftArrow.classList.add('disabled');
        } else {
          leftArrow.classList.remove('disabled');
        }
        
        // Check if at end (right edge)
        if (productGrid.scrollLeft + productGrid.clientWidth >= productGrid.scrollWidth - 5) {
          rightArrow.classList.add('disabled');
        } else {
          rightArrow.classList.remove('disabled');
        }
      };
      
      productGrid.addEventListener('scroll', updateArrowState);
      
      // Update arrow states when window resizes
      window.addEventListener('resize', () => {
        updateArrowState();
      });
      
      // Initialize arrow states
      updateArrowState();
      
      // Add touch swiping capability for mobile
      let touchStartX = 0;
      let touchEndX = 0;
      
      productGrid.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });
      
      productGrid.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
      }, { passive: true });
      
      const handleSwipe = () => {
        const threshold = 50; // Minimum swipe distance
        if (touchStartX - touchEndX > threshold) {
          // Swipe left, go right
          rightArrow.click();
        } else if (touchEndX - touchStartX > threshold) {
          // Swipe right, go left
          leftArrow.click();
        }
      };
    });
    
    // Section toggling functionality
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
          
          // If this section has a product slider, update arrow states
          const productGrid = section.querySelector('.products-grid');
          if (productGrid) {
            productGrid.dispatchEvent(new Event('scroll'));
            
            // Allow time for CSS transitions to finish, then update arrow states again
            setTimeout(() => {
              productGrid.dispatchEvent(new Event('scroll'));
            }, 300);
          }
        }
      });
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


document.addEventListener('DOMContentLoaded', function() {
  const chatButton = document.getElementById('chatButton');
  const chatWindow = document.getElementById('chatWindow');
  const chatClose = document.getElementById('chatClose');
  const chatInput = document.getElementById('chatInput');
  const chatSend = document.getElementById('chatSend');
  const chatMessages = document.getElementById('chatMessages');
  const subjectSelection = document.getElementById('subjectSelection');
  const chatInputContainer = document.getElementById('chatInputContainer');
  const selectedSubjectDiv = document.getElementById('selectedSubject');
  const subjectOptions = document.querySelectorAll('.subject-option');
  const notificationBadge = document.querySelector('.chat-notification-badge');

  let selectedSubject = '';

  // Predefined admin responses based on keywords
  const responses = {
    order: [
      "I can help you track your order! Please provide your order number and I'll check the status for you. 📦",
      "To check your order status, you can visit 'My Purchase' section in your account or provide your order number here.",
      "Our typical delivery time is 3-6 working days. Would you like to track a specific order?"
    ],
    product: [
      "I'd be happy to help with product information! Which product are you interested in? 🐾",
      "We have a wide range of pet food and accessories. What are you looking for specifically?",
      "You can browse our products by pet type: Dogs, Cats, Small Pets, Birds, or Aquatic pets. What's your pet?"
    ],
    return: [
      "We accept returns within 30 days of purchase. Items must be unused and in original packaging. 📋",
      "For returns, please go to 'My Purchase' and select the order you'd like to return. We'll guide you through the process.",
      "Refunds are processed within 5-7 business days after we receive the returned item."
    ],
    technical: [
      "I'm here to help with any technical issues. What problem are you experiencing? 💻",
      "If you're having trouble with the website, try clearing your browser cache or using a different browser.",
      "For account-related issues, make sure you're logged in with the correct credentials."
    ],
    pet: [
      "I'd love to help with pet care advice! What would you like to know? 🐕🐈",
      "We have expert guides on feeding, grooming, and training. What specific advice do you need?",
      "Every pet is unique! Tell me about your pet and I can provide personalized recommendations."
    ],
    price: [
      "We offer competitive prices and regular promotions! Check our 'Special Offers' section for current deals. 💰",
      "Sign up for our newsletter to get exclusive discounts and early access to sales!",
      "We have economy packs that help you save more when you buy in bulk!"
    ],
    shipping: [
      "We offer fast nationwide delivery across the Philippines! 🚚",
      "Standard shipping takes 3-6 working days. Express shipping is also available for faster delivery.",
      "Shipping is FREE for orders over ₱1,500!"
    ],
    payment: [
      "We accept credit cards, debit cards, GCash, PayMaya, and cash on delivery. 💳",
      "All payments are processed securely through our encrypted payment gateway.",
      "You can also pay cash on delivery for added convenience!"
    ],
    default: [
      "Thank you for your message! Let me help you with that. Can you provide more details? 😊",
      "I'm here to assist you! Could you please elaborate on your concern?",
      "Great question! I'd be happy to help. Can you tell me more about what you need?",
      "I understand. Let me get you the information you need. Could you clarify a bit more?"
    ]
  };

  // Toggle chat window
  chatButton.addEventListener('click', function() {
    chatWindow.classList.add('active');
    chatButton.style.display = 'none';
    
    // Remove notification badge when chat opens
    if (notificationBadge) {
      notificationBadge.style.display = 'none';
    }
  });

  chatClose.addEventListener('click', function() {
    chatWindow.classList.remove('active');
    chatButton.style.display = 'flex';
  });

  // Subject selection
  subjectOptions.forEach(option => {
    option.addEventListener('click', function() {
      selectedSubject = this.dataset.subject;
      const icon = this.querySelector('i').className;
      
      // Hide subject selection, show chat
      subjectSelection.style.display = 'none';
      chatMessages.style.display = 'block';
      chatInputContainer.style.display = 'block';
      
      // Display selected subject
      selectedSubjectDiv.innerHTML = `<i class="${icon}"></i> Subject: ${selectedSubject}`;
      selectedSubjectDiv.style.display = 'flex';
      
      // Add system message about subject
      addMessage('admin', `Great! I see you need help with "${selectedSubject}". How can I assist you?`);
      
      // Focus on input
      chatInput.focus();
    });
  });

  // Send message on button click
  chatSend.addEventListener('click', sendMessage);

  // Send message on Enter key
  chatInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });

  function sendMessage() {
    const message = chatInput.value.trim();
    if (message === '') return;

    // Add user message
    addMessage('user', message);
    chatInput.value = '';

    // Show typing indicator
    showTypingIndicator();

    // Simulate admin response after delay
    setTimeout(() => {
      hideTypingIndicator();
      const response = getAdminResponse(message);
      addMessage('admin', response);
    }, 1000 + Math.random() * 1000);
  }

  function addMessage(sender, text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const time = new Date().toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });

    if (sender === 'admin') {
      messageDiv.innerHTML = `
        <div class="message-avatar">
          <i class="fas fa-user-tie"></i>
        </div>
        <div class="message-content">
          <div class="message-bubble">
            <p>${text}</p>
          </div>
          <span class="message-time">${time}</span>
        </div>
      `;
    } else {
      messageDiv.innerHTML = `
        <div class="message-avatar">
          <i class="fas fa-user"></i>
        </div>
        <div class="message-content">
          <div class="message-bubble">
            <p>${text}</p>
          </div>
          <span class="message-time">${time}</span>
        </div>
      `;
    }

    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'typing-indicator message admin-message';
    typingDiv.id = 'typingIndicator';
    typingDiv.innerHTML = `
      <div class="message-avatar">
        <i class="fas fa-user-tie"></i>
      </div>
      <div class="message-content">
        <div class="message-bubble">
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
        </div>
      </div>
    `;
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function hideTypingIndicator() {
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
      typingIndicator.remove();
    }
  }

  function getAdminResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    // Check for keywords in the message
    if (message.includes('order') || message.includes('track') || message.includes('delivery')) {
      return getRandomResponse(responses.order);
    } else if (message.includes('product') || message.includes('item') || message.includes('buy')) {
      return getRandomResponse(responses.product);
    } else if (message.includes('return') || message.includes('refund') || message.includes('exchange')) {
      return getRandomResponse(responses.return);
    } else if (message.includes('problem') || message.includes('error') || message.includes('bug') || message.includes('issue')) {
      return getRandomResponse(responses.technical);
    } else if (message.includes('pet') || message.includes('dog') || message.includes('cat') || message.includes('care') || message.includes('food')) {
      return getRandomResponse(responses.pet);
    } else if (message.includes('price') || message.includes('cost') || message.includes('discount') || message.includes('promo')) {
      return getRandomResponse(responses.price);
    } else if (message.includes('ship') || message.includes('deliver')) {
      return getRandomResponse(responses.shipping);
    } else if (message.includes('pay') || message.includes('payment')) {
      return getRandomResponse(responses.payment);
    } else if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! 👋 How can I help you today?";
    } else if (message.includes('thanks') || message.includes('thank you')) {
      return "You're welcome! Is there anything else I can help you with? 😊";
    } else if (message.includes('bye') || message.includes('goodbye')) {
      return "Thank you for chatting with us! Have a great day! 🐾";
    } else {
      return getRandomResponse(responses.default);
    }
  }

  function getRandomResponse(responsesArray) {
    return responsesArray[Math.floor(Math.random() * responsesArray.length)];
  }

  // Close chat when clicking outside
  document.addEventListener('click', function(e) {
    if (!chatWindow.contains(e.target) && !chatButton.contains(e.target)) {
      if (chatWindow.classList.contains('active')) {
        chatWindow.classList.remove('active');
        chatButton.style.display = 'flex';
      }
    }
  });
});


  