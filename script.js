const allPanels = document.querySelectorAll('.container>li');

allPanels.forEach(panel => {
  panel.addEventListener('click', () => {
    allPanels.forEach(panel => {
      panel.classList.remove('active');
    });

    panel.classList.add('active');
  });
});
