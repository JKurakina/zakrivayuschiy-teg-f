const dialog = document.querySelector('#save-dialog');
const openBtn = document.querySelector('#save-button');

if (dialog && openBtn) {
  openBtn.addEventListener('click', () => {
    dialog.showModal();
  });
}
