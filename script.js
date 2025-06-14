document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("form-feedback");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const nombre = document.getElementById("nombre").value.trim();
      const email = document.getElementById("email").value.trim();
      const asunto = document.getElementById("asunto").value.trim();
      const mensaje = document.getElementById("mensaje").value.trim();

      if (!nombre || !email || !asunto || !mensaje) {
        feedback.textContent = "Por favor completá todos los campos.";
        feedback.className = "form-error";
        return;
      }

      const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailValido.test(email)) {
        feedback.textContent = "Ingresá un correo electrónico válido.";
        feedback.className = "form-error";
        return;
      }

      feedback.textContent = `Gracias por tu contacto, ${nombre}. En breve le estaré respondiendo.`;
      feedback.className = "form-success";
      form.reset();
    });
  }


  const toggle = document.getElementById("darkModeToggle");
  const icon = document.getElementById("icon-modo");
  const body = document.body;

  function actualizarIcono(isDark) {
    icon.innerHTML = isDark
      ? `<path d="M21.64 13a9 9 0 1 1-8.63-12 1 1 0 0 1 .75 1.84A7 7 0 1 0 19.8 12.9a1 1 0 0 1 1.84.75Z"/>` // Luna
      : `<path d="M12 2a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1Zm0 17a5 5 0 0 1 0-10 5 5 0 0 1 0 10Zm6.36-4.64a1 1 0 0 0-1.41 1.41l1.42 1.42a1 1 0 0 0 1.41-1.41l-1.42-1.42ZM4.93 4.93a1 1 0 1 0-1.41 1.41L4.93 7.76a1 1 0 0 0 1.41-1.41L4.93 4.93ZM3 11a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2h-2ZM6.34 17.66a1 1 0 0 0-1.41 1.41l1.42 1.42a1 1 0 0 0 1.41-1.41l-1.42-1.42Zm12.73-12.73a1 1 0 0 0-1.41 1.41l1.42 1.42a1 1 0 0 0 1.41-1.41L19.07 4.93ZM12 20a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1Z"/>`; // Sol
  }

  if (localStorage.getItem("darkMode") === "true") {
    body.classList.add("dark-mode");
    actualizarIcono(true);
  }

  if (toggle && icon) {
    toggle.addEventListener("click", () => {
      const isDark = body.classList.toggle("dark-mode");
      localStorage.setItem("darkMode", isDark);
      actualizarIcono(isDark);
    });
  }
});
