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

  const moonIcon = `<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>`;
  const sunIcon = `
    <circle cx="12" cy="12" r="4"/>
    <path d="M12 2v2"/>
    <path d="M12 20v2"/>
    <path d="m4.93 4.93 1.41 1.41"/>
    <path d="m17.66 17.66 1.41 1.41"/>
    <path d="M2 12h2"/>
    <path d="M20 12h2"/>
    <path d="m6.34 17.66-1.41 1.41"/>
    <path d="m19.07 4.93-1.41 1.41"/>
  `;

  function actualizarIcono(isDark) {
    icon.innerHTML = isDark ? moonIcon : sunIcon;
  }

  const isDark = localStorage.getItem("darkMode") === "true";
  if (isDark) {
    body.classList.add("dark-mode");
  }
  actualizarIcono(isDark);

  if (toggle && icon) {
    toggle.addEventListener("click", () => {
      const isDark = body.classList.toggle("dark-mode");
      localStorage.setItem("darkMode", isDark);
      actualizarIcono(isDark);
    });
  }
});
