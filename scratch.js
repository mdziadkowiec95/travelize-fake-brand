/* button TOP part */ 

document.body.innerHTML += '<i class="far fa-arrow-alt-circle-up" id="go-top"></i>';

var btnTop = document.getElementById('go-top');
btnTop.style.display = 'none';

window.onscroll = function() { 
    scrollFunction();
    scrollNav();
     };


function scrollNav() {
    var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    
    if (document.body.scrollTop > height || document.documentElement.scrollTop > height) {
       
        document.querySelector('#navigation').classList.remove('main-nav');
        document.querySelector('#navigation').classList.add('main-nav-fixed');
        
    } else {
        document.querySelector('#navigation').classList.remove('main-nav-fixed');
        document.querySelector('#navigation').classList.add('main-nav');
        
    }
}


function scrollFunction() {
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
        btnTop.style.display = 'block';
        btnTop.style.animation = 'goTopEnter 0.5s';
      } else {
        btnTop.style.display = 'none';
    }
}

btnTop.addEventListener('click', function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});


/* form validation  */


function validateForm() { 
    var name = document.forms['contact-forms']['name'].value;
    var email = document.forms['contact-forms']['email'].value;
    
    if (name == "" || email == "") {
        alert("Fill the fields correctly!");
        return false;
    }
}
/*
document.querySelector('.submit').addEventListener('click', validateForm);
*/

/* slider experimenting 
var number = Math.floor(Math.random() * 3 + 1);

window.onload = changeBackground();



function hide() {
    $('#header').fadeOut(100);
}

function changeBackground() {
    number++; if (number > 3) number = 1;
  var x =  document.getElementById('header').style.cssText += "background-image: linear-gradient(rgba(0, 0, 0, 0.53), rgba(0, 0, 0, 0.53)), url(resources/css/img/background" + number + ".jpg);";
    $('#header').fadeIn(100);
    setTimeout('changeBackground()', 5000);
    setTimeout('hide()', 4900);
    
}

*/



/* testing Create/Append Child 

window.onload = addBtn();
    
function addBtn () { 
    var aboutBoxes = document.getElementsByClassName('about-box');
    
    console.log(btn);
   
    
    for (var i = 0; i < aboutBoxes.length; i++) {
        var btn = document.createElement("a");
        var txt = document.createTextNode("CLICK ME");
        btn.appendChild(txt);
        
       aboutBoxes[i].appendChild(btn);
        btn.classList.add('btnJS');
        btn.setAttribute('href', '#');

    }
   
    
}
*/







/*

var mediaSmall = window.matchMedia("(max-width: 600px)");


if (mediaSmall) {
    console.log('yes');
    
    
    
} else {
    
    console.log('no');
    
};
*/

/* 
window.onscroll = function() { 
    scrollFunction();

*/



