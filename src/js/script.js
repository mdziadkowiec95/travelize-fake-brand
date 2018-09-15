/* section PLANS scritp START */

const benefitsParent = document.querySelector('.benefits-buttons');
const benefitsButtons = document.querySelectorAll('.benefits-btn');
const benefitsContentDivs = document.querySelectorAll('.benefits-content');


function changeBenefit(e) {
    const clickedBtn = e.target;
    const clickedBtnData = clickedBtn.dataset.target;
    
    
    for (let i = 0; i < benefitsButtons.length; i++) {
        
        if (benefitsButtons[i].className === "benefits-btn active") {
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
};

benefitsButtons.forEach( (button) => button.addEventListener('click', changeBenefit));




/* section PLANS scritp END */






var $about = $(".section-about");


$(document).ready(function () {
    
    // ARROW - slide down behavior below...
    
    $('#arrow-down').click(function () {
    $('body,html').animate({
      scrollTop: $about.offset().top
    }, 1000, function () { })
  });
    
    
// Menu item animation after click below...    
    
$('li.about').click(function () {
    $('body,html').animate({
      scrollTop: $about.offset().top
    }, 1000, function () { })
  });


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
//    });
    
    
        // Navigation on mobile behavior below...
            
            $('.nav-toggle').click(function(){
             $(this).toggleClass('open');
             $('nav.mobile').toggleClass('nav-active');
                $('nav.mobile').click(function() {
                   $('nav.mobile').removeClass('nav-active');
                    $('.nav-toggle').removeClass('open');
                });
            
            return false;
        });
    
    // Google Maps settings below
        
    const map = new GMaps({
          div: '#map',
          lat: 50.0301489,
          lng: 19.918081,
          zoom: 12
        });
   
    map.addMarker({
      lat: 50.0301489,
      lng: 19.918081,
      title: 'Our main office',
      infoWindow: {
      content: '<p>Our main office</p>'
    }
    });
        
    // only mobile
    
//    $('.nav-item a').on('click', function(e) {
//        e.preventDefault();
//       $('.nav-toggle').removeClass('open');
//        $('nav').fadeToggle(100);
//    });
    
    
    // POPUP show
    

//    setTimeout(function() {
//        $('.newsletter-popup').fadeIn().css('display', 'flex');
//    }, 2000);
//    
//    // popup listener 
//    $('.popup-close, .btn-submit').on('click', function(e) {
//       e.preventDefault();
//        $('.newsletter-popup').fadeOut();
//    });
    });



    
    


    