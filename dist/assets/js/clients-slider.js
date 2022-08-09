$(() => {

	$(".clients-right").slick({
		slidesToShow: 7,
		slidesToScroll: 1,
		dots: false,
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 1000,
		variableWidth: true,
		pauseOnHover: false,
		pauseOnFocus: false,
		responsive: [
			{
				breakpoint: 572,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			}]

	});

	$(".clients-row-left").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 1000,
		rtl: true,
		variableWidth: true,
		pauseOnHover: false,
		pauseOnFocus: false,
		responsive: [
			{
				breakpoint: 572,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}]
	});

})