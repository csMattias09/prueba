document.addEventListener('DOMContentLoaded', ()=>{
  const form = document.getElementById('loginForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const msg = document.getElementById('message');

  function showError(el, text){
    el.textContent = text;
    el.className = 'error';
  }
  function showSuccess(text){
    msg.textContent = text;
    msg.className = 'success';
  }

  function validateEmail(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    msg.textContent = '';

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if(!validateEmail(email)){
      showError(msg, 'Por favor ingresa un correo electrónico válido.');
      return;
    }
    if(password.length < 6){
      showError(msg, 'La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    // Simulación de login exitoso (reemplazar con llamada al servidor)
    showSuccess('Inicio de sesión exitoso. Bienvenido.');
    form.reset();
  });
});