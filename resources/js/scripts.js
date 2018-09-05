/* section PLANS part */

const plansParent = document.querySelector('.plans');
const buttons = document.querySelectorAll('.plans-box');
const contentDivs = document.querySelectorAll('.plans-content');

plansParent.addEventListener('click', function(e) {
    if (e.target.className === 'plans-box') {
        const clickedBox = e.target;
        const clickedBoxText = clickedBox.textContent;
        
        for (let i = 0; i < contentDivs.length; i++) {
            let currentDiv = contentDivs[i];
            
            if (currentDiv.dataset.plan === clickedBoxText) {
                currentDiv.classList.add('active');
            } else {
                currentDiv.classList.remove('active');
            }
            buttons[i].classList.remove('active');  
        } 
        clickedBox.classList.add('active');

    } 
});






var $about = $(".section-about");


$(document).ready(function () {
    
    // ARROW - slide down
    
    $('#arrow-down').click(function () {
    $('body,html').animate({
      scrollTop: $about.offset().top
    }, 1000, function () { })
  });
    
    
$('li.about').click(function () {
    $('body,html').animate({
      scrollTop: $about.offset().top
    }, 1000, function () { })
  });


$('.best-offer').on(
    "click",
    function () {
      if ($('.show', this).text() === "+") {
        console.log("+");
        $('.photo-box', this).addClass('js-open')
        $('div.js-open + article', this).slideDown();
        $('.show', this).text("-");
      } else if ($('.show', this).text() === "-") {
        console.log("-");
        $('.photo-box', this).removeClass('js-open')
        $('article', this).slideUp();
        $('.show', this).text("+");
      }

    });
    


            $('.nav-toggle').click(function(){
             $(this).toggleClass('open');
             $('nav.mobile').fadeToggle(100);
            
            return false;
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
    


    