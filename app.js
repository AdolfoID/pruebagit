document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Gestión del Modo Oscuro
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Verificar si el usuario ya tenía una preferencia guardada
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        themeToggleBtn.textContent = 'Modo Claro';
    }

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDark = body.classList.contains('dark-mode');
        
        // Actualizar texto del botón y guardar preferencia
        themeToggleBtn.textContent = isDark ? 'Modo Claro' : 'Modo Oscuro';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });

    // 2. Gestión del Formulario de Suscripción
    const subscribeForm = document.getElementById('subscribe-form');
    const emailInput = document.getElementById('email');
    const feedback = document.getElementById('form-feedback');

    subscribeForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita que la página se recargue

        const emailValue = emailInput.value.trim();

        if (emailValue) {
            feedback.textContent = `¡Gracias! Hemos registrado el correo: ${emailValue}`;
            subscribeForm.reset(); // Limpia el campo
        }
    });

});