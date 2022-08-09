$(".cases-slaider").slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	dots: false,
	infinite: false,
	arrows: true,
	// rows - удоляет пустые div
	rows: 0,
	nextArrow: $(".cases-btn-next"),
	prevArrow: $(".cases-btn-prev"),
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 762,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}

	]
});