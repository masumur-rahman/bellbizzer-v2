(function ($) {
"use strict";




	/*----------------------------
       jQuery Mean Menu
       ------------------------------ */
	$("#mobile-menu").meanmenu({
		meanMenuContainer: ".mobile-menu",
		meanScreenWidth: "767"
	});
	/*----------------------------
   Sticky menu active
   ------------------------------ */
	function fixed_top_menu() {
		var windows = $(window);
		windows.on("scroll", function () {
			var header_height = $(".main-navigation").height();
			var scrollTop = windows.scrollTop();
			if (scrollTop > header_height) {
				$(".main-navigation").addClass("sticky");
			} else {
				$(".main-navigation").removeClass("sticky");
			}
		});
	}
	fixed_top_menu();


	/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});



$('.grid').imagesLoaded( function() {
	// init Isotope
	var $grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: '.grid-item',
	  }
	});
});

// filter items on button click
$('.portfolio-menu').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});


//Testimonials
	if ($('.testimonial-slider').length>0) {
		$(".testimonial-slider").slick({
			slidesToShow:1,
			slidesToScroll:1,
			arrows:false,
			fade:true,
			asNavFor:".testimonial-nav"
		});

		$(".testimonial-nav").slick({
			slidesToShow:5,
			slidesToScroll:1,
			asNavFor:".testimonial-slider",
			arrows:false,
			centerMode:true,
			focusOnSelect:true,
			variableWidth:false,
			responsive:[
				{
					breakpoint:991,
					settings:{
						slidesToShow:3,
						arrows:false
					}
				},
				{
					breakpoint:480,
					settings:{
						slidesToShow:1,
						arrows:false
					}
				}
			]
		});
	}

	//Screenshots
	if ($('.screenshot-slider').length>0) {
		$(".screenshot-slider").owlCarousel({
			responsive:{
				0:{
					items:1
				},
				768:{
					items:2
				},
				960 : {
					items:4
				}
			},
			responsiveClass:true,
			autoplay:true,
			autoplaySpeed:1000,
			margin:30,
			dotsEach:2
		});
	}



//for menu active class
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});
	$('.tab-img-2').css('display','none');
	$('.img-tab-1').on('click',function (event) {
		$('.tab-img-1').css('display','block');
		$('.tab-img-2').css('display','none');
	});
	$('.img-tab-2').on('click',function (event) {
		$('.tab-img-1').css('display','none');
		$('.tab-img-2').css('display','block');
	});
// Brand Logo Sliding

	$('.brand-logo-slider').slick({
		dots: false,
		arrows: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 7,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}

		]
	});

	// Product Sliding

	$('.product-slider').slick({
		dots: false,
		arrows: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 4,
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}

		]
	});
    $('.responsive').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    // $('.center').slick({
    //     centerMode: true,
    //     dots: true,
    //     centerPadding: '60px',
    //     slidesToShow: 3,
    //     responsive: [
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 arrows: false,
    //                 centerMode: true,
    //                 centerPadding: '40px',
    //                 slidesToShow: 3
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 arrows: false,
    //                 centerMode: true,
    //                 centerPadding: '40px',
    //                 slidesToShow: 1
    //             }
    //         }
    //     ]
    // });

})(jQuery);	