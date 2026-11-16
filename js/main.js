// ============================================================
// JavaScript del portfolio · Adrián Hermida
// ============================================================

// ---------- Validación del formulario de contacto ----------
// Usa la validación de Bootstrap: si hay errores se muestran los
// mensajes .invalid-feedback y el foco va al primer campo incorrecto.
// Como la web no tiene servidor, si todo es correcto se muestra un
// aviso de confirmación y se limpia el formulario.
document.querySelectorAll('.needs-validation').forEach(form => {
  const aviso = form.querySelector('#aviso-envio');

  form.addEventListener('submit', event => {
    event.preventDefault();
    event.stopPropagation();

    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      aviso.classList.add('d-none');
      form.querySelector(':invalid').focus();
      return;
    }

    form.reset();
    form.classList.remove('was-validated');
    aviso.classList.remove('d-none');
  });
});
