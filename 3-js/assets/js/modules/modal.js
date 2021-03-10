export default function initModal() {
  const bodyDoc = document.body;
  const modal = document.querySelector('.modal-wiki');
  const btnOpenModal = document.querySelector('.button-modal')
  const btnCloseModal = document.querySelector('.close-modal');

  function toggleModal(event) {
    event.preventDefault();

    modal.classList.toggle('-active')
    bodyDoc.classList.toggle('-overlay')
  }

  btnOpenModal.addEventListener('click', toggleModal)
  btnCloseModal.addEventListener('click', toggleModal)
}