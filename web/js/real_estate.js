$(document).ready(function(){
	//alert(1);
	$(".blackbox").hide();
	$(".upper_div").mouseenter(function(){
		$(this).children(".blackbox").fadeIn(1000);
	})

	$(".upper_div").mouseleave(function(){
		$(".blackbox").fadeOut(1000);
	})

	$(".media-service-info").hover(function(){
	 	$(this).toggleClass('cn');
	 });

	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
		})


	// owlCarouselslider

	$(".yellow_box").hide();
	$(".agent-slider").mouseenter(function(){
		$(this).children(".yellow_box").fadeIn(1000);
	})

	$(".agent-slider").mouseleave(function(){
		$(".yellow_box").fadeOut(1000);
	})
})