$(document).ready(function () {

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
             $('nav').fadeToggle(100);
            
            return false;
        });
        
    });
    
    

//         $(this).addClass('open')
//        $('div.open + article', this).slideDown();
//        $('.show', this).text("-");
//      } else if ($('.show', this).text() === "-") {
//        console.log("-");
//        $('.name', this).removeClass('open')
//        $(this).removeClass('open')
//        $('article', this).slideUp();
//        $('.show', this).text("+");
//      }
