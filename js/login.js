 // Login functionality
 const loginForm = document.getElementById('login-form');
 const emailInput = document.getElementById('email');
 const passwordInput = document.getElementById('password');
 const emailError = document.getElementById('email-error');
 const passwordError = document.getElementById('password-error');
 const loginError = document.getElementById('login-error');
 
 // Clear error messages on input
 emailInput.addEventListener('input', () => {
     emailError.textContent = '';
     loginError.textContent = '';
 });
 
 passwordInput.addEventListener('input', () => {
     passwordError.textContent = '';
     loginError.textContent = '';
 });
 
 loginForm.addEventListener('submit', (e) => {
     e.preventDefault();
     
     // Reset all error messages
     emailError.textContent = '';
     passwordError.textContent = '';
     loginError.textContent = '';
     
     // Validate form fields
     let isValid = true;
     
     const email = emailInput.value.trim();
     const password = passwordInput.value.trim();
     
     if (!email) {
         emailError.textContent = 'Email is required';
         isValid = false;
     } else if (!/\S+@\S+\.\S+/.test(email)) {
         emailError.textContent = 'Please enter a valid email address';
         isValid = false;
     }
     
     if (!password) {
         passwordError.textContent = 'Password is required';
         isValid = false;
     }
     
     // If form is valid, check credentials
     if (isValid) {
         if (email === 'admin@gmail.com' && password === 'test123') {
             // Create a success message element
             const successMessage = document.createElement('div');
             successMessage.style.cssText = `
                 position: fixed;
                 top: 20px;
                 left: 50%;
                 transform: translateX(-50%);
                 background-color: #2ecc71;
                 color: white;
                 padding: 15px 30px;
                 border-radius: 5px;
                 box-shadow: 0 3px 10px rgba(0,0,0,0.2);
                 z-index: 9999;
                 font-weight: 500;
             `;
             successMessage.textContent = 'Login successful! Redirecting...';
             document.body.appendChild(successMessage);
             
             // Redirect after showing success message
             setTimeout(() => {
                 window.location.href = 'index.html';
             }, 1500);
         } else {
             loginError.textContent = 'Invalid email or password. Please try again.';
         }
     }
 });
 
 // Forgot password modal
 const forgotPasswordLink = document.getElementById('forgot-password-link');
 const modal = document.getElementById('forgot-password-modal');
 const closeModal = document.getElementById('close-modal');
 const confirmModal = document.getElementById('confirm-modal');
 
 forgotPasswordLink.addEventListener('click', () => {
     modal.style.display = 'flex';
 });
 
 closeModal.addEventListener('click', () => {
     modal.style.display = 'none';
 });
 
 confirmModal.addEventListener('click', () => {
     modal.style.display = 'none';
 });


document.addEventListener('keydown', (e) => {
     if (e.key === 'Escape') {
         modal.style.display = 'none';
     }
 });
 
 // Close modal if clicked outside
 window.addEventListener('click', (e) => {
     if (e.target === modal) {
         modal.style.display = 'none';
     }
 });
 
 // Social login buttons - just for demonstration
 const facebookBtn = document.getElementById('facebook-login');
 const googleBtn = document.getElementById('google-login');
 
 facebookBtn.addEventListener('click', () => {
     alert('Facebook login is not implemented in this demo.');
 });
 
 googleBtn.addEventListener('click', () => {
     alert('Google login is not implemented in this demo.');
 });
 
 // Sign up link
 const signupLink = document.getElementById('signup-link');
 signupLink.addEventListener('click', (e) => {
     e.preventDefault();
     alert('Sign up functionality is not implemented in this demo.');
 });