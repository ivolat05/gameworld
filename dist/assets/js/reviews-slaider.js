$(() => {

	$(".reviews-slaider").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		infinite: false,
		arrows: true,
		nextArrow: $(".reviews-box-next"),
		prevArrow: $(".reviews-box-prev"),
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}


		]
	});

})