// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

import VC from './modules/dots';
import SD from './modules/scroll';
import HS from './modules/header-sticky';
import CW from './modules/currency';
import NT from './modules/toogle-nav';
import OC from './modules/carousel';

(($) => {
  // When DOM is ready
  $(() => {
    VC.videoControl();
    SD.scroll();
    HS.headerSticky();
    OC.carousel();
    CW.currency();
    NT.navToggle();
  });
})(jQuery);
