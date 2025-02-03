document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
  
    cards.forEach(card => {
      card.addEventListener('click', function() {
        alert(`Você clicou na categoria: ${this.querySelector('.card-title').textContent}`);
      });
    });
  });