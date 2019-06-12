// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

import videoControl from './modules/video';
import scrollBottom from './modules/scroll';
import headerFixed from './modules/header-sticky';
import currencyWithdrawal from './modules/currency';
import navOpen from './modules/toogle-nav';
import owlCarousel from './modules/carousel';

(($) => {
  // When DOM is ready
  $(() => {
    videoControl.videoControl();
    scrollBottom.scroll();
    headerFixed.headerSticky();
    owlCarousel.carousel();
    currencyWithdrawal.currency();
    navOpen.navToggle();
  });
})(jQuery);
