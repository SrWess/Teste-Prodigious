// jQuery
// $(document).ready(function() {
// code
// });

// Vanilla JS

import initModal from '../js/modules/modal.js'
import initMenu from '../js/modules/menu.js'
import initVideo from '../js/modules/startVideo.js'
import initAccordion from '../js/modules/accordion.js'
import initWiki from './modules/wikiApi.js';

window.onload = function () {
  initMenu();
  initVideo();
  initAccordion();
  initWiki();
  initModal();
};
