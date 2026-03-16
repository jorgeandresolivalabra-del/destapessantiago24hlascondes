(function() { 
  console.log('Landing Destapes Las Condes 24H - Versión mejorada');

  // Efecto de aparición suave para elementos al hacer scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  // Seleccionamos todos los elementos que queremos que aparezcan gradualmente
  document.querySelectorAll('.servicio-card, .problema-card, .paso-card, .beneficio-item, .testimonio-card, .tag, .barrio-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s, transform 0.6s';
    observer.observe(el);
  });

  // Efecto hover en la imagen del proceso (opcional)
  const procesoImg = document.querySelector('.section-proceso img');
  if (procesoImg) {
    procesoImg.addEventListener('mouseover', () => {
      procesoImg.style.transform = 'scale(1.02)';
    });
    procesoImg.addEventListener('mouseout', () => {
      procesoImg.style.transform = 'scale(1)';
    });
  }
})();