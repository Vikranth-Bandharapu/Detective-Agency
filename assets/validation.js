// validation.js - Form validation and Toasts

function showToast(message, type = 'success') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container p-3';
    document.body.appendChild(container);
  }

  const toastId = 'toast-' + Date.now();
  const icon = type === 'success' ? '<i class="fas fa-check-circle text-success"></i>' : '<i class="fas fa-exclamation-circle text-danger"></i>';
  
  const toastHtml = `
    <div id="${toastId}" class="toast" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="3000">
      <div class="toast-header bg-dark text-white border-0">
        ${icon}
        <strong class="me-auto ms-2">Notification</strong>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        ${message}
      </div>
    </div>
  `;

  container.insertAdjacentHTML('beforeend', toastHtml);
  
  // Note: assumes bootstrap JS is loaded
  const toastElement = document.getElementById(toastId);
  const toast = new bootstrap.Toast(toastElement);
  toast.show();
  
  toastElement.addEventListener('hidden.bs.toast', () => {
    toastElement.remove();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('.needs-validation');
  
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      
      let isValid = true;
      
      // Custom validation logic
      const inputs = form.querySelectorAll('input, select, textarea');
      inputs.forEach(input => {
        if (input.hasAttribute('required') && !input.value.trim()) {
          isValid = false;
          input.classList.add('is-invalid');
        } else {
          input.classList.remove('is-invalid');
        }
        
        // Email validation
        if (input.type === 'email' && input.value.trim()) {
          const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
          if (!emailRegex.test(input.value.trim())) {
            isValid = false;
            input.classList.add('is-invalid');
          }
        }
        
        // Password validation (min 8 chars, up, low, num, spec)
        if (input.type === 'password' && input.hasAttribute('required')) {
          const pwd = input.value;
          const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/;
          // Only strict validate on signup, just check length on login for demo
          if (form.id === 'signupForm' && !pwdRegex.test(pwd)) {
             isValid = false;
             input.classList.add('is-invalid');
          } else if (pwd.length < 1) {
             isValid = false;
             input.classList.add('is-invalid');
          }
        }
      });
      
      // Confirm password check
      const pwd = form.querySelector('#password');
      const cpwd = form.querySelector('#confirmPassword');
      if (pwd && cpwd && pwd.value !== cpwd.value) {
        isValid = false;
        cpwd.classList.add('is-invalid');
      }

      if (isValid) {
        // Form specific logic
        if (form.id === 'loginForm') {
          const role = form.querySelector('#role').value;
          const email = form.querySelector('#email').value;
          // Use temporary non-sensitive state
          sessionStorage.setItem('loggedEmail', email);
          sessionStorage.setItem('loggedRole', role);
          
          showToast('Login successful! Redirecting...', 'success');
          
          setTimeout(() => {
            if (role === 'admin') window.location.href = 'admin-dashboard.html';
            else if (role === 'investigator') window.location.href = 'investigator-dashboard.html';
            else window.location.href = 'client-dashboard.html';
          }, 1500);
        } else if (form.id === 'signupForm') {
          showToast('Account created successfully! Redirecting to login...', 'success');
          setTimeout(() => {
            window.location.href = 'login.html';
          }, 1500);
        } else if (form.id === 'contactForm') {
          showToast('Message sent successfully. We will contact you soon.', 'success');
          form.reset();
        }
      } else {
        showToast('Please correct the errors in the form.', 'error');
      }
    }, false);
    
    // Clear validation on input
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        input.classList.remove('is-invalid');
      });
    });
  });
});
