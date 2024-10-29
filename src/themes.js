document.querySelectorAll('.themes button').forEach(button => {
    button.addEventListener('click', () => {
      const theme = button.getAttribute('data-action');
      document.body.className = theme; 
    });
  });