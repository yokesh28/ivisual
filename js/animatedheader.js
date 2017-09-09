/* ====================================================================== */
/*	Animated header
/* ====================================================================== */

$(function(){
 var shrinkHeader = 50;
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
      if ( scroll >= shrinkHeader ) {
           $('.navbar-fixed-top').addClass('shrink');
           $('.menu-icon').addClass('colorCombo');
		  
		  
           
          
           
        }
        else {
            $('.navbar-fixed-top').removeClass('shrink');
			$('.menu-icon').removeClass('colorCombo');
			
        }
  });
function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
    }
});

