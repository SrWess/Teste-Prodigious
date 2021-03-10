//Sistema de sanfona para a lista
export default function initAccordion() {
  const activeClass = "-active"

  const accordionItems = document.querySelectorAll('.item');

  function activeAccordion() {
    this.classList.toggle(activeClass);
  }

  accordionItems.forEach((item) => {
    item.addEventListener('click', activeAccordion)
  })
}
