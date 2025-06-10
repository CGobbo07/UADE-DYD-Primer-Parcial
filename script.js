document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("form-feedback");

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
});
