$(window).scroll(function(){

	// most of this stuff is for the scrolling reveal thingy
	if ($(window).innerWidth() >= 700) {

		$("#we-cover").css({"margin-top": -($(window).scrollTop() + 117) + "px"});
		$("#we-cover2").css({"margin-top": -($(window).scrollTop() - 400) + "px"});

		$("#them-cover").css({"margin-left": ($(window).scrollTop() - 900) + "px"});
		$("#them-cover2").css({"margin-left": ($(window).scrollTop() - 2200) + "px"});

		$("#us-cover").css({"margin-top": ($(window).scrollTop() - 2000) + "px"});

		// hide down arrow on scroll
		if ($(window).scrollTop() >= 5) {
			$('.down-arrow').css('opacity', '0');
		}

		if ($(window).scrollTop() >= 518) {
			$("#we-holder").css('display', 'none');
			$("#them-holder").css('display', 'block');
			$("#them-cover").css('display', 'block');
		} else {
			$("#we-holder").css('display', 'block');
			$("#them-holder").css('display', 'none');
			$("#them-cover").css('display', 'none');
		}

		if ($(window).scrollTop() >= 1923) {
			$("#them-holder").css('display', 'none');
			$("#us-holder").css('display', 'block');
			$("#us-cover").css('display', 'block');
		}  else {
			$("#us-holder").css('display', 'none');
			$("#us-cover").css('display', 'none');
		}

		if ($(window).scrollTop() >= 2750) {
			$("#us").css({"z-index": "501"});
		}

		if ($(window).scrollTop() >= 2930) {
			$('#us').css('position', 'absolute');
			$('#us').css('top', '3290px');
		}

		if ($(window).scrollTop() >= 3830) {
			$('#logo').css('opacity', '0');
			$('#logo').css('z-index', '502');
			$('#us').css('opacity', '1');
			$('#crowd').css('opacity', '1');
			$('#we').css('display', 'none');
			$('#we-cover').css('display', 'none');
			$('#we-cover2').css('display', 'none');
			$('#them').css('display', 'none');
			$('#them-cover').css('display', 'none');
			$('#them-cover2').css('display', 'none');
			$('#us-cover').css('display', 'none');
		}
		var logoOpacity = document.getElementById('logo').style.opacity;
		if (logoOpacity == 1 && $(window).scrollTop() < 2800) {
			$('#logo').css('position', 'fixed');
			$('#logo').css('top', '40px');
		} else {
			$('#logo').css('position', 'absolute');
			$('#logo').css('top', '2820px');
		}
	}
	else {
		$("#cover").css('display', 'none');
		$("#logo").css('position', 'absolute');
		$("#logo").css('top', '150px');
		$('#us').css('opacity', '0');
		$('#crowd').css('opacity', '0');
		$('#we').css('display', 'none');
		$('#we-cover').css('display', 'none');
		$('#we-cover2').css('display', 'none');
		$('#them').css('display', 'none');
		$('#them-cover').css('display', 'none');
		$('#them-cover2').css('display', 'none');
		$('#us-cover').css('display', 'none');
	}
});

// flicker through center images as soon as page loads
if ($(window).innerWidth() >= 700) {
	setTimeout(function(){
		$('.knife').css('display', 'none');
		$('.flux').css('display', 'block');
	}, 500);
	setTimeout(function(){
		$('.flux').css('display', 'none');
		$('.eye').css('display', 'block');
	}, 1000);
	setTimeout(function(){
		$('.eye').css('display', 'none');
		$('.down-arrow').css('opacity', '1');
	}, 1500);
	$('body').css('overflow', 'hidden');
	setTimeout(function(){
		$('body').css('overflow', 'auto');
	}, 1500);
}

// change palm tree image when hovering over 't'
$('.t').on('mouseover', function(){
	$('#cleanPalm').attr('src', 'palm_pixel.jpg')
});
$('.t').on('mouseout', function(){
	$('#cleanPalm').attr('src', 'palm.jpg')
});
$('.t').on('touchstart', function(){
	$('#cleanPalm').attr('src', 'palm_pixel.jpg')
});
$('.t').on('touchend', function(){
	$('#cleanPalm').attr('src', 'palm.jpg')
});

// open and close nav menu
var navClicks = 0;
$('.hamburger').on('click', function(){
	navClicks++;
	if (navClicks % 2 != 0) {
		$('#nav').css('opacity', '1');
	} else {
		$('#nav').css('opacity', '0');			
	}
})

// smooth scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


// prevent scrolling back up after they get past 'us'
$(function() {
    var scrollPoint = 3250;
    var scrolledPast = false;
    $(window).scroll(function() {
        $(window).scrollTop() > scrollPoint ? scrolledPast = true : '';
        $(window).scrollTop() < scrollPoint && scrolledPast == true ? $(window).scrollTop(scrollPoint) : '';
    }).scroll();
});

var scroll = function(e) {
    // compute state
    if (stopScrollX || stopScrollY) {
        e.preventDefault();              // this one is the key
        e.stopPropagation();
        window.scroll(scrollToX, scrollToY);
    }
}

document.addEventListener('mousewheel', scroll, false);
