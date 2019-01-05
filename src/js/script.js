/* ------- GLOBAL variables ---------*/
var header = document.querySelector('.header'),
  headerOverlay = document.querySelector('.header-overlay'),
  navToggler = document.querySelector('.nav-toggle'),
  navbar = document.querySelector('.navbar');

/* ------- GLOBAL functions ---------*/

// debouncing on scroll funcitons

function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// var sliderImages = document.querySelectorAll('.slide-in');

// function checkSlide() {
//     console.log('ok');
//     sliderImages.forEach(function (sliderImage) {
//         // half way through the image
//         var slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
//         // bottom of the image
//         var imageBottom = sliderImage.offsetTop + sliderImage.height;
//         var isHalfShown = slideInAt > sliderImage.offsetTop;
//         var isNotScrolledPast = window.scrollY < imageBottom;
//         console.log(imageBottom);
//         console.log(isHalfShown);
//         console.log(isNotScrolledPast);
//         if (isHalfShown && isNotScrolledPast) {
//             sliderImage.classList.add('active');
//         } else {
//             sliderImage.classList.remove('active');
//         }
//     });
// }

// window.addEventListener('scroll', debounce(checkSlide));

/* ----- FAQs ----- */
// $('.faq__body')
//   .eq(0)
//   .slideDown();

$('.faq__box').on('click', function(e) {
  if ($('.faq__sign', this).text() === '+') {
    $('.faq__head').removeClass('js-open');
    $('.faq__head', this).addClass('js-open');
    $('.faq__body').slideUp();
    $('.faq__sign').text('+');
    $('.faq__head.js-open + .faq__body', this).slideDown();
    $('.faq__sign', this).text('-');
  } else if ($('.faq__sign', this).text() === '-') {
    $('.faq__head.js-open + .faq__body', this).slideUp();
    $('.faq__head').removeClass('js-open');
    $('.faq__sign', this).text('+');
  }

  // if ($('.faq__sign', this).text() === '-') {
  //   $('.faq__head', this).removeClass('js-open');
  //   $('faq__body').slideUp();
  //   $('.faq__head.js-open + .faq__body', this).slideDown();
  // }
});

/* ----- Navigation ----- */

// navigation toggling on mobile

$('.nav-item a').on('click', function() {
  $('.navbar').removeClass('open');
  $('.nav-toggle').removeClass('open');
});

function toggleNav() {
  navToggler.classList.toggle('open');
  navbar.classList.toggle('open');
}

// document.addEventListener('click', function (e) {
//     console.log(navToggler.classList.contains('open'));
//     // e.stopPropagation();
//     if (navbar.classList.contains('open')) {
//         if (e.target !== navbar && navToggler.classList.contains('open')) {
//             navToggler.classList.remove('open');
//             navbar.classList.remove('open');
//             alert();
//         }
//     }
// });

navToggler.addEventListener('click', toggleNav);

// navigation sticky on desktop
function stickNavbar() {
  var headerHeight = header.offsetHeight;
  var scrolledTop = window.scrollY;

  if (scrolledTop >= headerHeight) {
    navbar.classList.add('js-sticky');
  } else {
    navbar.classList.remove('js-sticky');
  }
}

window.addEventListener('scroll', debounce(stickNavbar, 15));

/* ----------------------------------*/
/* ---- HEADER opacity on scroll ----*/
/* ----------------------------------*/

function headerFade() {
  var headerHeight = header.offsetHeight;
  var scrolledTop = window.scrollY;
  var opacityPercentage = scrolledTop / headerHeight;

  headerOverlay.style.backgroundColor =
    'rgba(255, 255, 255, ' + opacityPercentage + ')';
}

window.addEventListener('scroll', headerFade);

/* ----- FAQ accordion ---- */

// function toggleFAQs(e) {
//     if (e.target.tagName === 'BUTTON') {
//         document.querySelectorAll('.faq__button').forEach(function (btn) {
//             btn.classList.add('collapsed');
//             btn.textContent = '+';
//         });
//         e.target.classList.remove('collapsed');
//         e.target.textContent = '-';
//     }
// }

// document.querySelector('.faq').addEventListener('click', toggleFAQs);

/* ----- LightGallery JS plugin init ---- */

lightGallery(document.getElementById('lightgallery'));

// Google Maps settings below

// var map = new GMaps({
//     div: '#map',
//     lat: 50.0301489,
//     lng: 19.918081,
//     zoom: 12
// });

// map.addMarker({
//     lat: 50.0301489,
//     lng: 19.918081,
//     title: 'Our main office',
//     infoWindow: {
//         content: '<p>Our main office</p>'
//     }
// });

var mymap = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

$(document).ready(function() {
  // .last-minute sliding on mobile
  $('.last-minute__heading').on('click', function(e) {
    e.preventDefault();

    // check if items are in column layout
    if ($('.last-minute').css('flex-direction') === 'column') {
      $(this)
        .next()
        .children('.last-minute__about')
        .slideToggle();
    }
  });
});

/* ---------- add classes on scroll ------ */

/* --------- Code below needs to be refactored ---------*/

/* section PLANS scritp START */

// let date = new Date();
// let month = date.getMonth();
// let dayOfMonth = date.getDate();
// let fullYear = date.getFullYear();

// let daysLeft = 0;

// function setLastMinuteTime() {

//     if ((month + 1) % 2 === 0 && (month + 1) !== 2) {
//         daysLeft = 31 - dayOfMonth;
//         return daysLeft;
//     } else if ((month + 1) % 2 === 1) {
//         daysLeft = 30 - dayOfMonth;
//         return daysLeft;
//     } else {

//         if ((fullYear % 4 == 0) && (fullYear % 100 != 0) || (fullYear % 400 == 0)) {
//             daysLeft = 29 - dayOfMonth;
//             return daysLeft;
//         } else {
//             daysLeft = 28 - dayOfMonth;
//             return daysLeft;
//         }
//     }
// }

// function printDaysLeft() {
//     const daysLeft = setLastMinuteTime();
//     document.querySelector('.last-minute-timer span').textContent = daysLeft;
// }

// printDaysLeft();

// -----------------------------

// Section Gallery ----> image preview functionality

const galleryBoxes = document.querySelectorAll('.gallery-box'); // grab a collection of Gallery boxes.

var image = function(e) {
  const previewBox = document.querySelector('.gallery-preview-box'); // grab the preview div
  const previewBoxImg = previewBox.firstElementChild; // grab the img inside the div

  if (e.target.tagName === 'SPAN') {
    // check what was clicked and...

    var img = e.target.nextElementSibling; // ...go to the img directly
    previewBoxImg.setAttribute('src', img.getAttribute('src')); // then set SRC to SRC of clicked img
  } else {
    var img = e.target.parentNode.nextElementSibling;
    previewBoxImg.setAttribute('src', img.getAttribute('src'));
  }

  previewBox.classList.add('show'); // change display property of PREVIEW BOX by adding .show class

  previewBox.addEventListener('click', () => {
    previewBox.classList.remove('show'); // remove .show class
  });
  return img;
};

// alert(image);

//
//document.querySelector('.prev-foto').addEventListener('click', prev);
//document.querySelector('.next-foto').addEventListener('click', next);

galleryBoxes.forEach(box => box.addEventListener('click', image)); //loop through the gallery and attach event listeners to each gallery item

// BENEFITS section change script below

const benefitsParent = document.querySelector('.benefits-buttons');
const benefitsButtons = document.querySelectorAll('.benefits-btn');
const benefitsContentDivs = document.querySelectorAll('.benefits-content');

function changeBenefit(e) {
  const clickedBtn = e.target;
  const clickedBtnData = clickedBtn.dataset.target;

  for (let i = 0; i < benefitsButtons.length; i++) {
    if (benefitsButtons[i].className === 'benefits-btn active') {
      benefitsButtons[i].classList.remove('active');
      benefitsContentDivs[i].classList.remove('active');
    }

    if (clickedBtnData === benefitsContentDivs[i].dataset.target) {
      benefitsContentDivs[i].classList.add('active');
    } else {
      benefitsContentDivs[i].classList.remove('active');
    }
  }
  clickedBtn.classList.add('active');
}

benefitsButtons.forEach(button =>
  button.addEventListener('click', changeBenefit)
);

/* section PLANS scritp END */

var $about = $('.section-about');

$ = jQuery;

$(document).ready(function() {
  // ARROW - slide down behavior below...

  $('#arrow-down').click(function() {
    $('body,html').animate(
      {
        scrollTop: $about.offset().top
      },
      1000,
      function() {}
    );
  });

  // Menu item animation after click below...

  $('.nav-item').click(function(e) {
    e.preventDefault();

    var $scrollTo = $(this).attr('id');

    $('body,html')
      .stop()
      .animate(
        {
          scrollTop: $('.section-' + $scrollTo).offset().top
        },
        1000
      );
  });

  // $('#about').click(function() {
  //   $('body,html')
  //     .stop()
  //     .animate(
  //       {
  //         scrollTop: $('.section-about').offset().top
  //       },
  //       1000
  //     );
  // });

  // $('#gallery').click(function() {
  //   $('body,html')
  //     .stop()
  //     .animate(
  //       {
  //         scrollTop: $('.section-gallery').offset().top
  //       },
  //       1000
  //     );
  // });

  // $('#contact').click(function() {
  //   $('body,html')
  //     .stop()
  //     .animate(
  //       {
  //         scrollTop: $('.section-contact').offset().top
  //       },
  //       1000
  //     );
  // });

  // Animations on scroll

  $('.js--wp-1').waypoint(
    function(direction) {
      $('.js--wp-1').addClass('animated');
    },
    {
      offset: '70%'
    }
  );

  //$('.best-offer').on(
  //    "click",
  //    function () {
  //      if ($('.show', this).text() === "+") {
  //        console.log("+");
  //        $('.photo-box', this).addClass('js-open')
  //        $('div.js-open + article', this).slideDown();
  //        $('.show', this).text("-");
  //      } else if ($('.show', this).text() === "-") {
  //        console.log("-");
  //        $('.photo-box', this).removeClass('js-open')
  //        $('article', this).slideUp();
  //        $('.show', this).text("+");
  //      }
  //
  //    });  // BEST jQuery script

  // Navigation on mobile behavior below...

  // $('.nav-toggle').click(function () {
  //     $(this).toggleClass('open');
  //     $('nav.mobile').toggleClass('nav-active');
  //     $('nav.mobile').click(function () {
  //         $('nav.mobile').removeClass('nav-active');
  //         $('.nav-toggle').removeClass('open');
  //     });

  //     return false;
  // });

  // POPUP show

  //    setTimeout(function() {
  //        $('.newsletter-popup').fadeIn().css('display', 'flex');
  //    }, 4000);
  //
  //    // popup listener
  //    $('.submit-btn, .popup-close').on('click', function(e) {
  //        e.preventDefault();
  //        $('.newsletter-popup').fadeOut();
  //    });
  //
});
