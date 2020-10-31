$('.popup').hide();

// AOS
// (function ($) {
//   "use strict";

//   // AOS Init
//   AOS.init();

// })(jQuery);

$(document).ready(function () {
  $('.profile').hover(
    (e) => {
      e.preventDefault();
      $('.popup').show();
    },
    (e) => {
      e.preventDefault();
      $('.popup').hide();
    }
  );

  $('.popup').hover(
    (e) => {
      e.preventDefault();
      $('.popup').show();
    },
    (e) => {
      e.preventDefault();
      $('.popup').hide();
    }
  );

  $('.logout').on('click', (e) => {
    e.preventDefault();
    sessionStorage.setItem('authToken', '');
    location.reload();
  });

  $('.flights').on('click', (e) => {
    e.preventDefault();

    sessionStorage.removeItem('toInputValue');
    sessionStorage.removeItem('fromInputValue');

    location.reload();
  });
});
