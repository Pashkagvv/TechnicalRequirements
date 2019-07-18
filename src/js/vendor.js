import jQuery from 'jquery';
import svg4everybody from 'svg4everybody';
import 'slick-carousel';
import weather from 'yahoo-weather';

// Expose libraries to global Window object
window.$ = window.jQuery = jQuery;

// Manually initialize third-party libraries
svg4everybody();
weather();
