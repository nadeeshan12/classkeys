document.querySelectorAll('.social').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      icon.style.boxShadow = `0 0 15px ${icon.style.backgroundColor}`;
    });
    icon.addEventListener('mouseleave', () => {
      icon.style.boxShadow = 'none';
    });
  });
  