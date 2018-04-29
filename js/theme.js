;(function($) {
    "use strict";
    
    
	$('.main_banner_area').ripples({
		resolution: 212,
		dropRadius: 20,
		perturbance: 0.04,
	});
	
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
	
	
	/*----------------------------------------------------*/
    /*  portfolio_isotope
    /*----------------------------------------------------*/
    function demo_main_gallery(){
        if ( $('.main_demo_img').length ){
            // Activate isotope in container
            $(".main_demo_img").imagesLoaded( function() {
                $(".main_demo_img").isotope({
                    layoutMode: 'fitRows',
                    percentPosition:true,
                    columnWidth: 1
                }); 
            }); 
        }
    }
    demo_main_gallery();
    
    /*----------------------------------------------------*/
    /*  Feature slider js
    /*----------------------------------------------------*/
    function demo_isotope(){
        if ( $('.portfolio_filter ul li').length ){
            // Add isotope click function
            $(".portfolio_filter ul li").on('click',function(){
                $(".portfolio_filter ul li").removeClass("active");
                $(this).addClass("active");

                var selector = $(this).attr("data-filter");
                $(".main_demo_img").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 450,
                        easing: "linear",
                        queue: false,
                    }
                });
                return false;
            });
        }
    }
    
    demo_isotope();
	
	
    
	
	$.scrollIt();
    
})(jQuery)
