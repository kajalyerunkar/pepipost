$(document).ready(function(){
	//alert(1);
	$(".blackbox").hide();
	$(".upper_div").mouseenter(function(){
		$(this).children(".blackbox").fadeIn(1000);
	})

	$(".upper_div").mouseleave(function(){
		$(".blackbox").fadeOut(1000);
	})
	$(".more_details").hide();
	$(".single-property").mouseenter(function(){
		$(this).children(".more_details").fadeIn(1000);
	})

	$(".single-property").mouseleave(function(){
		$(".more_details").fadeOut(1000);
	})

	$(".media-service-info").hover(function(){
	 	$(this).toggleClass('cn');
	 });

	$(".agent_slider").mouseenter(function(){
		$(this).children(".yellow_box").hover();
	})

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

	$(".main-login").hide();
			$(".login-button").click(function(){
		    $(".main-login").show();
		    $(".main-box").hide();
		});

		$(".fa-arrow-left").click(function(){
		    $(".main-login").hide();
		    $(".main-box").show();
		});

		 $( ".slider-range" ).slider({
		        range: true,
		        min: 80,
		        max: 2500,
		        values: [ 300, 2000 ],
		        slide: function( event, ui ) {
				$( ".amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
		        }
    		});
	    $( ".amount" ).val( "$" + $( ".slider-range" ).slider( "values", 0 ) +
		   " - $" + $( ".slider-range" ).slider( "values", 1 ) ); 
		
})