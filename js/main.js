/* :::::::::::::::::::::::::::: MODERNIZR */

/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssgrid_cssgridlegacy-flexbox-flexboxlegacy-flexboxtweener-svg-svgasimg-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,s,i,l;for(var a in C)if(C.hasOwnProperty(a)){if(e=[],n=C[a],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],l=i.split("."),1===l.length?Modernizr[l[0]]=o:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=o),_.push((o?"":"no-")+l.join("-"))}}function s(e){var n=S.className,t=Modernizr._config.classPrefix||"";if(b&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),b?S.className.baseVal=n:S.className=n)}function i(e,n){return!!~(""+e).indexOf(n)}function l(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):b?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function f(e,n){return function(){return e.apply(n,arguments)}}function u(e,n,t){var o;for(var s in e)if(e[s]in n)return t===!1?e[s]:(o=n[e[s]],r(o,"function")?f(o,t||n):o);return!1}function c(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(n,t,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,n,t);var s=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(s){var i=s.error?"error":"log";s[i].call(s,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!t&&n.currentStyle&&n.currentStyle[r];return o}function p(){var e=n.body;return e||(e=l(b?"svg":"body"),e.fake=!0),e}function g(e,t,r,o){var s,i,a,f,u="modernizr",c=l("div"),d=p();if(parseInt(r,10))for(;r--;)a=l("div"),a.id=o?o[r]:u+(r+1),c.appendChild(a);return s=l("style"),s.type="text/css",s.id="s"+u,(d.fake?d:c).appendChild(s),d.appendChild(c),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),c.id=u,d.fake&&(d.style.background="",d.style.overflow="hidden",f=S.style.overflow,S.style.overflow="hidden",S.appendChild(d)),i=t(c,e),d.fake?(d.parentNode.removeChild(d),S.style.overflow=f,S.offsetHeight):c.parentNode.removeChild(c),!!i}function m(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(c(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+c(n[o])+":"+r+")");return s=s.join(" or "),g("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==d(e,null,"position")})}return t}function h(e,n,o,s){function f(){c&&(delete z.style,delete z.modElem)}if(s=r(s,"undefined")?!1:s,!r(o,"undefined")){var u=m(e,o);if(!r(u,"undefined"))return u}for(var c,d,p,g,h,v=["modernizr","tspan","samp"];!z.style&&v.length;)c=!0,z.modElem=l(v.shift()),z.style=z.modElem.style;for(p=e.length,d=0;p>d;d++)if(g=e[d],h=z.style[g],i(g,"-")&&(g=a(g)),z.style[g]!==t){if(s||r(o,"undefined"))return f(),"pfx"==n?g:!0;try{z.style[g]=o}catch(y){}if(z.style[g]!=h)return f(),"pfx"==n?g:!0}return f(),!1}function v(e,n,t,o,s){var i=e.charAt(0).toUpperCase()+e.slice(1),l=(e+" "+P.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?h(l,n,o,s):(l=(e+" "+E.join(i+" ")+i).split(" "),u(l,n,t))}function y(e,n,r){return v(e,t,t,n,r)}function w(e,n){if("object"==typeof e)for(var t in e)j(e,t)&&w(t,e[t]);else{e=e.toLowerCase();var r=e.split("."),o=Modernizr[r[0]];if(2==r.length&&(o=o[r[1]]),"undefined"!=typeof o)return Modernizr;n="function"==typeof n?n():n,1==r.length?Modernizr[r[0]]=n:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=n),s([(n&&0!=n?"":"no-")+r.join("-")]),Modernizr._trigger(e,n)}return Modernizr}var _=[],C=[],x={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){C.push({name:e,fn:n,options:t})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=x,Modernizr=new Modernizr,Modernizr.addTest("svg",!!n.createElementNS&&!!n.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var S=n.documentElement,b="svg"===S.nodeName.toLowerCase(),T="Moz O ms Webkit",P=x._config.usePrefixes?T.split(" "):[];x._cssomPrefixes=P;var E=x._config.usePrefixes?T.toLowerCase().split(" "):[];x._domPrefixes=E;var N={elem:l("modernizr")};Modernizr._q.push(function(){delete N.elem});var z={style:N.elem.style};Modernizr._q.unshift(function(){delete z.style}),x.testAllProps=v,x.testAllProps=y,Modernizr.addTest("cssgridlegacy",y("grid-columns","10px",!0)),Modernizr.addTest("cssgrid",y("grid-template-rows","none",!0)),Modernizr.addTest("flexbox",y("flexBasis","1px",!0)),Modernizr.addTest("flexboxlegacy",y("boxDirection","reverse",!0)),Modernizr.addTest("flexboxtweener",y("flexAlign","end",!0));var j;!function(){var e={}.hasOwnProperty;j=r(e,"undefined")||r(e.call,"undefined")?function(e,n){return n in e&&r(e.constructor.prototype[n],"undefined")}:function(n,t){return e.call(n,t)}}(),x._l={},x.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},x._trigger=function(e,n){if(this._l[e]){var t=this._l[e];setTimeout(function(){var e,r;for(e=0;e<t.length;e++)(r=t[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){x.addTest=w}),Modernizr.addTest("svgasimg",n.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")),o(),s(_),delete x.addTest,delete x.addAsyncTest;for(var A=0;A<Modernizr._q.length;A++)Modernizr._q[A]();e.Modernizr=Modernizr}(window,document);

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
}
/* :::::::::::::::::::::::::::: CUSTOM STYLES */
var elems = document.querySelectorAll("[data-active]");
for(var i = 0; i < elems.length; i++){
    // Add event listeners to each one
    elems[i].addEventListener("click", function(e){

        // Prevent default action of element
        e.preventDefault();

        // Grab linked elements
        var linkedElement = document.querySelectorAll("." + this.getAttribute('data-active'));

        // Toggle linked element if present
        for(var i = 0; i < linkedElement.length; i++) {
            linkedElement[i].classList.toggle("is-active");
        }
        
    });    
}
function toggleElment() {
	var toggleElem = document.querySelectorAll("[data-toggle]");
	for(var i = 0; i < elems.length; i++){
		$(toggleElem).bind( "click", function() {
			event.preventDefault();
			 var linkedElement = document.querySelectorAll("." + this.getAttribute('data-toggle'));
			 for(var i = 0; i < linkedElement.length; i++) {
	            $(linkedElement).slideToggle("fast");
	        }
		});
	}
}
/* Sticky section */
var stickyHeaders = (function() {
	var $window = $(window),
		$stickies;
	var load = function(stickies) {
    	if (typeof stickies === "object" && stickies instanceof jQuery && stickies.length > 0) {
		$stickies = stickies.each(function() {
        	var $thisSticky = $(this).wrap('<div class="followWrap" />');
			$thisSticky
            .data('originalPosition', $thisSticky.offset().top)
            .data('originalHeight', $thisSticky.outerHeight())
            .parent()
            .height($thisSticky.outerHeight()); 			  
    	});
		$window.off("scroll.stickies").on("scroll.stickies", function() {
		  _whenScrolling();		
      	});
    }
};
var _whenScrolling = function() {
$stickies.each(function(i) {			
	var $thisSticky = $(this),
		$stickyHeaderHeight = $('.mainnav_wrapper').height();
		console.log($stickyHeaderHeight);
    	$stickyPosition = $thisSticky.data('originalPosition') - $stickyHeaderHeight;
	if ($stickyPosition <= $window.scrollTop()) {        
        var $nextSticky = $stickies.eq(i + 1),
            $nextStickyPosition = $nextSticky.data('originalPosition') - $thisSticky.data('originalHeight');
        $thisSticky.addClass("fixed");
        if ($nextSticky.hasClass('nav_clear')) {
	         $nextStickyPositionlast = $nextSticky.data('originalPosition') - $thisSticky.data('originalHeight');
	         if ($nextSticky.length > 0 && $thisSticky.offset().top >= $nextStickyPositionlast) {
	          $thisSticky.addClass("absolute").css("top", $nextStickyPositionlast);
	        }
        } else {
	         if ($nextSticky.length > 0 && $thisSticky.offset().top >= $nextStickyPosition) {
	          $thisSticky.addClass("absolute").css("top", $nextStickyPosition);
	        }
        }
    } else {
        var $prevSticky = $stickies.eq(i - 1);
        $thisSticky.removeClass("fixed");
        if ($prevSticky.length > 0 && $window.scrollTop() <= $thisSticky.data('originalPosition') - $thisSticky.data('originalHeight')) {
          $prevSticky.removeClass("absolute").removeAttr("style");
        }
      }
    });
  };
  return {
    load: load
  };
})();
$( document ).ready(function() {
    toggleElment();
    if (Modernizr.svgasimg) {
		$("img.src").attr("src", function (idx, attr) {
		    return attr.replace(/\.png$/, ".svg");
		});   
	}
	$(".collapsible_handle").click(function(){
	    if ( $(this).parent().hasClass("open") ) {
		    $('.collapsible_item').removeClass("open");
		} else {
			$('.collapsible_item').removeClass("open");
			$(this).parent().addClass("open");
		}
	});
	$("#openmenu").click(function(){
	    if ( $('body').hasClass("mobileopen") ) {
		    $('body').removeClass("mobileopen");
		} else {
			$('body').addClass("mobileopen");
		}
	});
	$(".dropdownbtn").click(function(){
	    if ( $(this).closest("li").hasClass("active") ) {
		    $('.nav li').removeClass("active");
		} else {
			$('.nav li').removeClass("active");
			$(this).closest("li").addClass("active");
		}
	});
	if (screen < 1400) {
		$(".table_container").each(function( index ) {
			$(this).mCustomScrollbar({
		    	axis:"x",
				theme:"loup"
			});
		});
	}
	$("input").on('focus blur', function(){
	     $(this).parent().toggleClass('is_focused');
	})
	$('input').blur(function(){
	    tmpval = $(this).val();
	    if(tmpval == '') {
	        $(this).parent().removeClass('filled');
	    } else {
	        $(this).parent().addClass('filled');
	    }
	});
	$("textarea").on('focus blur', function(){
	     $(this).parent().toggleClass('is_focused');
	})
	$('textarea').blur(function(){
	    tmpval = $(this).val();
	    if(tmpval == '') {
	        $(this).parent().removeClass('filled');
	    } else {
	        $(this).parent().addClass('filled');
	    }
	});
	$(document).on('click', 'a[href^="#"]', function (event) {
	    event.preventDefault();
	
	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 220
	    }, 500);
	});
	stickyHeaders.load($(".section_nav_stick"));
});
$(window).scroll(function(){
	if($(window).scrollTop() >= 150){
		$('.page_wrapper').addClass('stickynav');
	}
	else{
		$('.page_wrapper').removeClass('stickynav');
	}
});