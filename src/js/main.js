document.querySelectorAll('[data-modal-target]').forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault();
    const modal = document.querySelector(this.dataset.modalTarget);
    modal.classList.remove('hidden');
  });
});

document.querySelectorAll('[data-modal-close]').forEach(button => {
  button.addEventListener('click', function() {
    const modal = button.closest('.fixed');
    modal.classList.add('hidden');
  });
});