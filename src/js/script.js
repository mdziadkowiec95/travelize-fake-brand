

/* ------- GLOBAL variables ---------*/
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.loading-view').classList.add('hidden');
});

var header = document.querySelector('.header'),
  headerOverlay = document.querySelector('.header-overlay'),
  navToggler = document.querySelector('.nav-toggle'),
  navbar = document.querySelector('.navbar');

/* ------- GLOBAL functions ---------*/

// debouncing on scroll funcitons

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function toggleNav() {
  navToggler.classList.toggle('open');
  navbar.classList.toggle('open');
}

navToggler.addEventListener('click', toggleNav);

/**
 * on SCROLL functions below
 */


// header section fadeOut on scroll
function headerFade() {
  var headerHeight = header.offsetHeight;
  var scrolledTop = window.scrollY;
  var opacityPercentage = scrolledTop / headerHeight;

  headerOverlay.style.backgroundColor =
    'rgba(255, 255, 255, ' + opacityPercentage + ')';
}

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

// all elemtnts to add transition on scroll
var elToShowOnScroll = Array.prototype.slice.call(document.querySelectorAll('.show-on-scroll'));
var howBoxes = Array.prototype.slice.call(document.querySelectorAll('.how__box'));

function showOnScroll() {

  var counter = 0 - 3; // 0 minus 3 because there are 3 elements with .show-on-scroll class before 

  elToShowOnScroll.forEach(function (el) {
    if (el.getBoundingClientRect().top < (window.innerHeight * (!el.classList.contains('how__box') ? 0.8 : 0.75))) {
      el.classList.add('animated');
      counter++;

      // how
      if (counter >= 0) {
        drawLine(counter);
      }

    } else {
      el.classList.remove('animated');
    }
  });

  function drawLine(num) {
    var fraction = num / howBoxes.length;
    var height = fraction * 100;

    document.querySelector('.how__line').style.maxHeight = height + '%';

  }

}


window.addEventListener('scroll', function () {

  stickNavbar();
  debounce(showOnScroll(), 30);
  // showOnScroll();
});



/* ----------------------------------*/
/* ---- HEADER opacity on scroll ----*/
/* ----------------------------------*/



// window.addEventListener('scroll', headerFade);

/* ----- LightGallery JS plugin init below  ---- */

lightGallery(document.getElementById('lightgallery'), {
  // mode: 'lg-zoom-out',
  cssEasing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
  counter: true,
  download: false
});

/** FAQ collapse tabs */

$(document).ready(function () {

  $('.opinions__slider').slick({
    slidesToShow: 1,
    centerMode: true,
    centerPadding: 'auto',
    nextArrow: '<div class="slick-nav slick-nav-right"><button type="button" class="slick-button slick-next"></button></div>',
    prevArrow: '<div class="slick-nav slick-nav-left"><button type="button" class="slick-button slick-prev"></button></',
    dots: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '0'
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // ARROW - slide down behavior below...

  var $about = $('.section-about');

  $ = jQuery;

  $('#arrow-down').click(function () {
    $('body,html').animate(
      {
        scrollTop: $about.offset().top
      },
      600,
      function () { }
    );
  });

  // Menu item animation after click below...

  $('.nav-item').click(function (e) {
    e.preventDefault();

    var $scrollTo = $(this).attr('id');

    $('body,html')
      .stop()
      .animate(
        {
          scrollTop: $('.section-' + $scrollTo).offset().top
        },
        800
      );
  });

  /* ----- FAQs ----- */

  $('.faq__box').on('click', function (e) {
    if ($('.faq__sign', this).text() === '+') {
      $('.faq__head').removeClass('js-open');
      $('.faq__head', this).addClass('js-open');
      $('.faq__body').slideUp(300);
      $('.faq__sign').text('+');
      $('.faq__head.js-open + .faq__body', this).slideDown(300);
      $('.faq__sign', this).text('-');
    } else if ($('.faq__sign', this).text() === '-') {
      $('.faq__head.js-open + .faq__body', this).slideUp(300);
      $('.faq__head').removeClass('js-open');
      $('.faq__sign', this).text('+');
    }
  });

  /* ----- Navigation ----- */

  // navigation toggling on mobile

  $('.nav-item a').on('click', function () {
    $('.navbar').removeClass('open');
    $('.nav-toggle').removeClass('open');
  });

  // Animations on scroll

  // $('.js--wp-1').waypoint(
  //   function (direction) {
  //     $('.js--wp-1').addClass('animated');
  //   },
  //   {
  //     offset: '70%'
  //   }
  // );

  // HOW fadeIN on scroll

  var howBoxes = document.querySelectorAll('.how__box');
  var howBoxesArr = Array.prototype.slice.call(howBoxes);
  console.log(howBoxesArr);

  // howBoxes.forEach(cur => (cur.style.display = 'none'));




  // $(window).on('scroll', function () {
  //   // console.log($scroll);
  //   // console.log(window.scrollY);

  //   // ABOUT boxes fade In
  //   if (window.scrollY > (($('.js--wp-1').offset().top - window.innerHeight * 0.6))) {
  //     $('.js--wp-1').addClass('animated');
  //   }

  //   // Steps fade toggle
  //   howBoxesArr.forEach(function (cur, index) {
  //     if (window.scrollY > $(cur).offset().top - window.innerHeight * 0.7) {
  //       $(cur).addClass('js-show');
  //       // $line.css('height', );
  //     } else {
  //       $(cur).removeClass('js-show');
  //     }
  //   });
  // });

});
