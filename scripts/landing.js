$(function(){

	$('.header__open-nav').on('click',function(){
		$('.popup-container').css('display','block');
		$('.popup-container').css('position','fixed');
		$('.popup-container').animate({
			left: '0px'
		},500);
	});
	$('.close').on('click',function(){
		$('.popup-container').animate({
			left: '-1000px'
		},500,function(){
			$('.popup-container').css('display','none');
		});
		$('.popup-container').css('position','fixed');
	});
	$('.services_a').on('click', function(e){
		$('html,body').stop().animate({ scrollTop: $('#Services').offset().top }, 800);
		e.preventDefault();
	});
	$('.portfolio_a').on('click', function(e){
		$('html,body').stop().animate({ scrollTop: $('#Portfolio').offset().top }, 800);
		e.preventDefault();
	});
	$('.costs_a').on('click', function(e){
		$('html,body').stop().animate({ scrollTop: $('#Costs').offset().top }, 800);
		e.preventDefault();
	});

	$('.your-class').slick({
		slidesToShow: 3,
		autoplay: true,
  		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 1250,
				settings: {
					slidesToShow: 3,
					dots: false,
					arrows: false
				}
			},
			{
				breakpoint: 1125,
				settings: {
					slidesToShow: 2,
					dots: true,
					arrows: false,
					centerMode: true,
					adaptiveHeight: true,
					height: 500
				}

			},
			{
				breakpoint: 835,
				settings: {
					slidesToShow: 1,
					dots: true,
					arrows: false,
					centerMode: true,
					adaptiveHeight: true,
					height: 500
				}
			},
		]
	});


	$('.section').on('mouseover',function(){
		$('.item-1').css('transform','translate(-700px,-300px) rotate(-30deg)');
		$('.item-2').css('transform','translate(-1250px,-400px) rotate(20deg)');
		$('.item-3').css('transform','translate(-1190px,-180px) rotate(20deg)');
		$('.item-4').css('transform','translate(-400px,100px) rotate(20deg)');
		$('.item-5').css('transform','translate(-1100px,150px) rotate(-40deg)');
	});

	const form_open = $('.form-open');
	const form_popup = $('.form-popup__cnt');
	const cross = $('.cross-btn');
	const body = $('body');
	const btn = $('.up-button');
	form_open.on('click', function(){
		form_popup.fadeIn('fast','linear');
		form_popup.css('display','flex');
		btn.css('display','none');
		$('body').css('overflow','hidden');
	});
	cross.on('click',function(event){
		if (event.target == this) {
			form_popup.fadeOut('fast','linear');
			$('body').css('overflow','unset');
			if ($(window).scrollTop() > 1000) {
				btn.css('display','flex');
			}
		}
	})
	$(window).on('scroll',function(){
		if ($(window).scrollTop() > 1000) {
			btn.css('display','flex');
		} else {
			btn.css('display','none');
		}
	});
	btn.on('click',function(){
		$('body,html').animate({
			scrollTop:0
		},700);
	});
	$('.tel-form').inputmask({"mask": "+9 (999) 999-99-99"});
});
