/* :::::::::::::::::::::::::::: MODERNIZR */

/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssgrid_cssgridlegacy-flexbox-flexboxlegacy-flexboxtweener-svg-svgasimg-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,s,i,l;for(var a in C)if(C.hasOwnProperty(a)){if(e=[],n=C[a],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],l=i.split("."),1===l.length?Modernizr[l[0]]=o:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=o),_.push((o?"":"no-")+l.join("-"))}}function s(e){var n=b.className,t=Modernizr._config.classPrefix||"";if(T&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),T?b.className.baseVal=n:b.className=n)}function i(e,n){if("object"==typeof e)for(var t in e)S(e,t)&&i(t,e[t]);else{e=e.toLowerCase();var r=e.split("."),o=Modernizr[r[0]];if(2==r.length&&(o=o[r[1]]),"undefined"!=typeof o)return Modernizr;n="function"==typeof n?n():n,1==r.length?Modernizr[r[0]]=n:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=n),s([(n&&0!=n?"":"no-")+r.join("-")]),Modernizr._trigger(e,n)}return Modernizr}function l(e,n){return!!~(""+e).indexOf(n)}function a(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):T?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function f(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function u(e,n){return function(){return e.apply(n,arguments)}}function c(e,n,t){var o;for(var s in e)if(e[s]in n)return t===!1?e[s]:(o=n[e[s]],r(o,"function")?u(o,t||n):o);return!1}function d(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function p(n,t,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,n,t);var s=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(s){var i=s.error?"error":"log";s[i].call(s,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!t&&n.currentStyle&&n.currentStyle[r];return o}function g(){var e=n.body;return e||(e=a(T?"svg":"body"),e.fake=!0),e}function m(e,t,r,o){var s,i,l,f,u="modernizr",c=a("div"),d=g();if(parseInt(r,10))for(;r--;)l=a("div"),l.id=o?o[r]:u+(r+1),c.appendChild(l);return s=a("style"),s.type="text/css",s.id="s"+u,(d.fake?d:c).appendChild(s),d.appendChild(c),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),c.id=u,d.fake&&(d.style.background="",d.style.overflow="hidden",f=b.style.overflow,b.style.overflow="hidden",b.appendChild(d)),i=t(c,e),d.fake?(d.parentNode.removeChild(d),b.style.overflow=f,b.offsetHeight):c.parentNode.removeChild(c),!!i}function h(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(d(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+d(n[o])+":"+r+")");return s=s.join(" or "),m("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==p(e,null,"position")})}return t}function v(e,n,o,s){function i(){c&&(delete j.style,delete j.modElem)}if(s=r(s,"undefined")?!1:s,!r(o,"undefined")){var u=h(e,o);if(!r(u,"undefined"))return u}for(var c,d,p,g,m,v=["modernizr","tspan","samp"];!j.style&&v.length;)c=!0,j.modElem=a(v.shift()),j.style=j.modElem.style;for(p=e.length,d=0;p>d;d++)if(g=e[d],m=j.style[g],l(g,"-")&&(g=f(g)),j.style[g]!==t){if(s||r(o,"undefined"))return i(),"pfx"==n?g:!0;try{j.style[g]=o}catch(y){}if(j.style[g]!=m)return i(),"pfx"==n?g:!0}return i(),!1}function y(e,n,t,o,s){var i=e.charAt(0).toUpperCase()+e.slice(1),l=(e+" "+E.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?v(l,n,o,s):(l=(e+" "+N.join(i+" ")+i).split(" "),c(l,n,t))}function w(e,n,r){return y(e,t,t,n,r)}var _=[],C=[],x={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){C.push({name:e,fn:n,options:t})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=x,Modernizr=new Modernizr;var S,b=n.documentElement,T="svg"===b.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;S=r(e,"undefined")||r(e.call,"undefined")?function(e,n){return n in e&&r(e.constructor.prototype[n],"undefined")}:function(n,t){return e.call(n,t)}}(),x._l={},x.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},x._trigger=function(e,n){if(this._l[e]){var t=this._l[e];setTimeout(function(){var e,r;for(e=0;e<t.length;e++)(r=t[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){x.addTest=i}),Modernizr.addTest("svgasimg",n.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"));var P="Moz O ms Webkit",E=x._config.usePrefixes?P.split(" "):[];x._cssomPrefixes=E;var N=x._config.usePrefixes?P.toLowerCase().split(" "):[];x._domPrefixes=N;var z={elem:a("modernizr")};Modernizr._q.push(function(){delete z.elem});var j={style:z.elem.style};Modernizr._q.unshift(function(){delete j.style}),x.testAllProps=y,x.testAllProps=w,Modernizr.addTest("cssgridlegacy",w("grid-columns","10px",!0)),Modernizr.addTest("cssgrid",w("grid-template-rows","none",!0)),Modernizr.addTest("flexbox",w("flexBasis","1px",!0)),Modernizr.addTest("flexboxlegacy",w("boxDirection","reverse",!0)),Modernizr.addTest("flexboxtweener",w("flexAlign","end",!0)),Modernizr.addTest("svg",!!n.createElementNS&&!!n.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),o(),s(_),delete x.addTest,delete x.addAsyncTest;for(var A=0;A<Modernizr._q.length;A++)Modernizr._q[A]();e.Modernizr=Modernizr}(window,document);

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
	$(".table_container").mCustomScrollbar({
	    axis:"x",
	    theme:"loup"
	});
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
});
$(window).scroll(function(){
	if($(window).scrollTop() >= 150){
		$('.page_wrapper').addClass('stickynav');
	}
	else{
		$('.page_wrapper').removeClass('stickynav');
	}
});