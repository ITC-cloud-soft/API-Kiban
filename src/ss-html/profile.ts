document.addEventListener('DOMContentLoaded', () => {
  const applyBtn = document.querySelector<HTMLButtonElement>('.a-apply-button');

  if (applyBtn) {
    applyBtn.addEventListener('click', () => {
      window.location.href = 'apply_menu.html';
      return;
    });
  }
});
export {};
