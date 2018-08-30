/* :::::::::::::::::::::::::::: PARALLAX SCROLLING */
var screen = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
if (screen > 800) {
	$('.parallax').each(function(){
	  var elem = $(this);
	  var elemParent = $(this).parent();
	  function parallaxImg () {
	    var speed = elem.data('speed');
	    var elemY = elemParent.offset().top;
	    var winY = $(this).scrollTop();
	    var winH = $(this).height();
	    var parentH = elemParent.innerHeight();
	
	    // The next pixel to show on screen      
	    var winBottom = winY + winH;
	
	    // If block is shown on screen
	    if (winBottom > elemY && winY < elemY + parentH) {
	      // Number of pixels shown after block appear
	      var elemBottom = ((winBottom - elemY) * speed);
	      // Max number of pixels until block disappear
	      var elemTop = winH + parentH;
	      // Porcentage between start showing until disappearing
	      var elemPercent = ((elemBottom / elemTop) * 100) + (50 - (speed * 50));
	    }
	    elem.css({
	      top: elemPercent + '%',
	      transform: 'translate(0, -' + elemPercent + '%)'
	    });
	  }
	  $(document).on({
	    scroll: function () {
	      parallaxImg();
	    }, ready: function () {
	      parallaxImg();
	    }
	  });
	});
	$( window ).resize(function() {
	  parallaxImg();
	});
}