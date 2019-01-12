

/* ------- GLOBAL variables ---------*/
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

function toggleNav() {
  navToggler.classList.toggle('open');
  navbar.classList.toggle('open');
}

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

/* ----- LightGallery JS plugin init below  ---- */

lightGallery(document.getElementById('lightgallery'), {
  // mode: 'lg-zoom-out',
  cssEasing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
  counter: true,
  download: false
});

/* ----- Leaflet Map JS plugin init below ---- */

var mymap = L.map('map').setView([41.879225, -87.629236], 25);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);



L.marker([41.879225, -87.629236]).addTo(mymap)
  .bindPopup('<strong>Our office</strong>')
  .openPopup();

$(document).ready(function () {

  $('.opinions').slick({
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '25%',
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
  // .last-minute sliding on mobile
  //   $('.last-minute__heading').on('click', function(e) {
  //     e.preventDefault();

  //     // check if items are in column layout
  //     if ($('.last-minute').css('flex-direction') === 'column') {
  //       $(this)
  //         .next()
  //         .children('.last-minute__about')
  //         .slideToggle();
  //     }
  //   });
  // });

  // ARROW - slide down behavior below...

  var $about = $('.section-about');

  $ = jQuery;

  $('#arrow-down').click(function () {
    $('body,html').animate(
      {
        scrollTop: $about.offset().top
      },
      1000,
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
        1000
      );
  });

  /* ----- OPINIONS ----- */


  // var opiniosWrapperEl = document.querySelector('.opinions');
  // var opinionBoxes = opiniosWrapperEl.children;
  // var actualTransform = 0;
  // var activeSlide = 1;

  // function changeOpinion(e) {

  //   if (e.target.tagName === 'BUTTON' || e.type === 'keyup') {
  //     var direction = e.target.dataset.target;

  //     console.log(direction);
  //     console.log(e.keyCode);

  //     if (((direction === 'next') || (e.keyCode === 39)) && (activeSlide < opinionBoxes.length)) {
  //       actualTransform -= 100 / 3;

  //       activeSlide++;

  //       opiniosWrapperEl.style.transform = 'translateX(' + actualTransform + '%)';

  //     } else if (((direction === 'prev') || (e.keyCode === 37)) && (activeSlide > 1)) {
  //       actualTransform += 100 / 3;

  //       activeSlide--;

  //       opiniosWrapperEl.style.transform = 'translateX(' + actualTransform + '%)';
  //     }

  //   }
  // }

  // document.querySelector('.opinions__button-box').addEventListener('click', changeOpinion);

  // document.addEventListener('keyup', changeOpinion);







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

  $('.js--wp-1').waypoint(
    function (direction) {
      $('.js--wp-1').addClass('animated');
    },
    {
      offset: '70%'
    }
  );

  // HOW fadeIN on scroll

  var howBoxes = document.querySelectorAll('.how__box');
  var howBoxesArr = Array.prototype.slice.call(howBoxes);
  console.log(howBoxesArr);

  // howBoxes.forEach(cur => (cur.style.display = 'none'));

  var $line = $('.how__line');

  $(window).on('scroll', function () {
    $scroll = $(document).scrollTop();
    console.log($scroll);
    console.log(window.scrollY);

    howBoxesArr.forEach(function (cur, index) {
      if (window.scrollY > $(cur).offset().top - window.innerHeight * 0.7) {
        $(cur).addClass('js-show');
        // $line.css('height', );
      } else {
        $(cur).removeClass('js-show');
      }
    });
  });
});
