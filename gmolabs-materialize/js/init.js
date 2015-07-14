(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    // $('.scrollspy').scrollSpy();
    $(".smoothnav").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(($(this).attr("href"))).offset().top
        }, 
        {
            duration: 500,
            easing: 'easeInOutExpo'
            // try using 'swing' too
            // 'easeInOutExpo' is supported with jQuery UI
        });
    });

    $(".activator").click(function(e) {
        // e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).parent().parent()).offset().top-70
        }, 
        {
            duration: 200,
            easing: 'easeInOutExpo'
            // try using 'swing' too
            // 'easeInOutExpo' is supported with jQuery UI
        });
    });

    
  }); // end of document ready
})(jQuery); // end of jQuery name space