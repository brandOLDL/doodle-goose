
/* nav stick to top */
$(window).bind('scroll', function() {
	var navHeight = $(window).height() - 50;
	if ($(window).scrollTop() > navHeight) {
		$('.logo').addClass('shrink');
	} else {
		$('.logo').removeClass('shrink');
	}
});
/* smooth scroll */
      $(".frmbtn").click(function() {
        $('html, body').animate({
            scrollTop: $("#form-main").offset().top
        }, 650);
      });

	    $(".aboutscroll").click(function() {
	    	$('html, body').animate({
	        	scrollTop: $("#about").offset().top
	    	}, 650);
		  });

  		$(".workscroll").click(function() {
  	    	$('html, body').animate({
  	        	scrollTop: $("#work").offset().top
  	    	}, 650);
  		});

      $(".testscroll").click(function() {
          $('html, body').animate({
              scrollTop: $("#tests").offset().top
          }, 650);
      });

      $(".contactscroll").click(function() {
          $('html, body').animate({
              scrollTop: $("#contact").offset().top
          }, 650);
      });

      $(".logo").click(function() {
          $('html, body').animate({
              scrollTop: $("#top").offset().top
          }, 650);
      });
// Get the modal
var modalparent = document.getElementsByClassName("modal_multi");
// Get the button that opens the modal
var modal_btn_multi = document.getElementsByClassName("myBtn_multi");
// Get the <span> element that closes the modal
var span_close_multi = document.getElementsByClassName("close_multi");
// When the user clicks the button, open the modal
function setDataIndex() {
	for (i = 0; i < modal_btn_multi.length; i++) {
		modal_btn_multi[i].setAttribute('data-index', i);
		modalparent[i].setAttribute('data-index', i);
		span_close_multi[i].setAttribute('data-index', i);
	}
}
for (i = 0; i < modal_btn_multi.length; i++) {
	modal_btn_multi[i].onclick = function() {
		var ElementIndex = this.getAttribute('data-index');
		modalparent[ElementIndex].style.display = "block";
	};
	// When the user clicks on <span> (x), close the modal
	span_close_multi[i].onclick = function() {
		var ElementIndex = this.getAttribute('data-index');
		modalparent[ElementIndex].style.display = "none";
	};
}
window.onload = function() {
	setDataIndex();
};
window.onclick = function(event) {
	if (event.target === modalparent[event.target.getAttribute('data-index')]) {
		modalparent[event.target.getAttribute('data-index')].style.display = "none";
	}
};
// ----------------------------- SVG
(function() {
  
        function init() {
          var speed = 600,
            easing = mina.easeinout;

          [].slice.call ( document.querySelectorAll( '#grid > div' ) ).forEach( function( el ) {
            var s = Snap( el.querySelector( 'svg' ) ), path = s.select( 'path' ),
              pathConfig = {
                from : path.attr( 'd' ),
                to : el.getAttribute( 'data-path-hover' )
              };

            el.addEventListener( 'mouseenter', function() {
              path.animate( { 'path' : pathConfig.to }, speed, easing );
            });

            el.addEventListener( 'mouseleave', function() {
              path.animate( { 'path' : pathConfig.from }, speed, easing );
            });
          });
        }

        init();

      })();
// ---------------------- scrolling rotate
$(window).scroll(function() {
var wheel = $(window).scrollTop() / 20 % Math.PI;
$('.fadedmandala').css({ transform: 'rotate(' + wheel + 'rad)' });
});
// ------------------------------- WAYPOINTS
var $about = $('.about-wrap');
var $geese = $('.white-geese');
var $grape = $('.grapes');
$about.waypoint(function () {
    $about.addClass('fade-in-up');
},{ offset: '50%'});
$geese.waypoint(function () {
    $geese.addClass('fade-in-up');
},{ offset: '50%'});
$grape.waypoint(function () {
    $grape.addClass('fade-in-up');
},{ offset: '50%'});