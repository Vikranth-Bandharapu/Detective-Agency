document.addEventListener('DOMContentLoaded', () => {

  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const roleSelect = document.getElementById('loginRole');
      const role = roleSelect ? roleSelect.value : '';
      const emailInput = loginForm.querySelector('input[type="email"]');
      if(emailInput && emailInput.value) sessionStorage.setItem('stackly_email', emailInput.value);
      
      if (!role) {
        alert('Please select an Authorization Level.');
        return;
      }
      
      // Basic validation simulated delay
      const btn = loginForm.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Authenticating...';
      btn.disabled = true;
      
      setTimeout(() => {
        if (role === 'admin') {
          window.location.href = 'admin-dashboard.html';
        } else {
          window.location.href = 'client-dashboard.html';
        }
      }, 800);
    });
  }

  const signupForm = document.getElementById('signupForm');
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Check passwords match
      const passwords = signupForm.querySelectorAll('input[type="password"]');
      if (passwords.length >= 2 && passwords[0].value !== passwords[1].value) {
        alert('Passwords do not match. Please verify.');
        return;
      }

      // Basic validation simulated delay
      const btn = signupForm.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Encrypting Credentials...';
      btn.disabled = true;
      
      setTimeout(() => {
        alert('Dossier Registered Successfully. Please log in.');
        window.location.href = 'login.html';
      }, 1000);
    });
  }

});
