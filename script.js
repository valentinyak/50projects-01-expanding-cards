const allPanels = document.querySelectorAll('.container>li');

for (let i = 0; i < allPanels.length; i += 1) {
  const panel = allPanels[i];

  panel.addEventListener('click', () => {
    const activePanel = document.querySelector('.active');

    if (panel != activePanel) {
      activePanel.classList.remove('active');
      panel.classList.add('active');
    }
  });
}
