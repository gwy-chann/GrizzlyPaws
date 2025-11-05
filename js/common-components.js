// Common Components JavaScript - FAQ Modal, Contact Modal, and Chat Widget
// This file contains reusable functionality for all pages

document.addEventListener('DOMContentLoaded', function() {
  // Update footer links
  const faqLink = document.querySelector('.footer-links a[href="#"]');
  const contactLink = document.querySelector('.footer-links a[href="https://mail.google.com/mail/u/0/#inbox"]');
  
  // Function to disable body scroll
  function disableBodyScroll() {
    document.body.style.overflow = 'hidden';
  }
  
  // Function to enable body scroll
  function enableBodyScroll() {
    document.body.style.overflow = '';
  }
  
  if (faqLink && faqLink.textContent.trim() === 'FAQS') {
    faqLink.setAttribute('href', '#');
    faqLink.addEventListener('click', function(e) {
      e.preventDefault();
      const faqModal = document.getElementById('faqModal');
      if (faqModal) {
        faqModal.classList.add('active');
        disableBodyScroll();
      }
    });
  }
  
  if (contactLink) {
    contactLink.setAttribute('href', '#');
    contactLink.addEventListener('click', function(e) {
      e.preventDefault();
      const contactModal = document.getElementById('contactModal');
      if (contactModal) {
        contactModal.classList.add('active');
        disableBodyScroll();
      }
    });
  }

  // FAQ Modal Elements
  const faqModal = document.getElementById('faqModal');
  const faqModalClose = document.getElementById('faqModalClose');
  const faqQuestions = document.querySelectorAll('.faq-question');

  // Contact Modal Elements
  const contactModal = document.getElementById('contactModal');
  const contactModalClose = document.getElementById('contactModalClose');
  const contactCancel = document.getElementById('contactCancel');
  const contactForm = document.getElementById('contactForm');

  // FAQ Accordion functionality
  if (faqQuestions.length > 0) {
    faqQuestions.forEach(question => {
      question.addEventListener('click', function() {
        const isActive = this.classList.contains('active');
        const answer = this.nextElementSibling;
        const icon = this.querySelector('.faq-icon');

        // Close all other questions
        faqQuestions.forEach(q => {
          q.classList.remove('active');
          q.querySelector('.faq-icon').textContent = '+';
          q.nextElementSibling.style.display = 'none';
        });

        // Toggle current question
        if (!isActive) {
          this.classList.add('active');
          icon.textContent = '−';
          answer.style.display = 'block';
        }
      });
    });
  }

  // Close FAQ Modal
  if (faqModalClose) {
    faqModalClose.addEventListener('click', function() {
      if (faqModal) {
        faqModal.classList.remove('active');
        enableBodyScroll();
      }
    });
  }

  // Close Contact Modal
  if (contactModalClose) {
    contactModalClose.addEventListener('click', function() {
      if (contactModal) {
        contactModal.classList.remove('active');
        if (contactForm) contactForm.reset();
        enableBodyScroll();
      }
    });
  }

  if (contactCancel) {
    contactCancel.addEventListener('click', function() {
      if (contactModal) {
        contactModal.classList.remove('active');
        if (contactForm) contactForm.reset();
        enableBodyScroll();
      }
    });
  }

  // Handle Contact Form Submission
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const subject = document.getElementById('contactSubject').value;
      const concern = document.getElementById('contactConcern').value;

      alert('Thank you for contacting us!\n\nSubject: ' + subject + '\n\nWe will get back to you soon!');
      
      if (contactModal) {
        contactModal.classList.remove('active');
        contactForm.reset();
        enableBodyScroll();
      }
    });
  }

  // Close modals when clicking outside
  if (faqModal) {
    faqModal.addEventListener('click', function(e) {
      if (e.target === faqModal) {
        faqModal.classList.remove('active');
        enableBodyScroll();
      }
    });
  }

  if (contactModal) {
    contactModal.addEventListener('click', function(e) {
      if (e.target === contactModal) {
        contactModal.classList.remove('active');
        if (contactForm) contactForm.reset();
        enableBodyScroll();
      }
    });
  }

  // Prevent closing when clicking inside modal content
  const faqModalContent = document.querySelector('.faq-modal-content');
  const contactModalContent = document.querySelector('.contact-modal-content');
  
  if (faqModalContent) {
    faqModalContent.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  }

  if (contactModalContent) {
    contactModalContent.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  }

  // Close modals with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      if (faqModal && faqModal.classList.contains('active')) {
        faqModal.classList.remove('active');
        enableBodyScroll();
      }
      if (contactModal && contactModal.classList.contains('active')) {
        contactModal.classList.remove('active');
        if (contactForm) contactForm.reset();
        enableBodyScroll();
      }
    }
  });

  // Chat Widget JavaScript
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

  // Predefined admin responses
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

  if (chatButton && chatWindow) {
    // Toggle chat window
    chatButton.addEventListener('click', function() {
      chatWindow.classList.add('active');
      chatButton.style.display = 'none';
      
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
        
        subjectSelection.style.display = 'none';
        chatMessages.style.display = 'block';
        chatInputContainer.style.display = 'block';
        
        selectedSubjectDiv.innerHTML = `<i class="${icon}"></i> Subject: ${selectedSubject}`;
        selectedSubjectDiv.style.display = 'flex';
        
        addMessage('admin', `Great! I see you need help with "${selectedSubject}". How can I assist you?`);
        chatInput.focus();
      });
    });

    // Send message
    chatSend.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });

    function sendMessage() {
      const message = chatInput.value.trim();
      if (message === '') return;

      addMessage('user', message);
      chatInput.value = '';
      showTypingIndicator();

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
  }
});

