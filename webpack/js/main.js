foundation = require('foundation-sites/dist/foundation.min.js');
require("font-awesome-loader");
require('slick-carousel')

$(document).ready(function ($) {
  $('.carousel-slider').slick({});
  $(document).foundation();
});
