//Abrir e fechar o menu com o clique no botão Menu
export default function initMenu() {
  const activeClass = "-active"

  const btnMenu = document.querySelector('.menu-button');
  const menuList = document.querySelector('.menu');

  function openMenu() {
    menuList.classList.toggle(activeClass)
  }

  btnMenu.addEventListener('click', openMenu)
}
