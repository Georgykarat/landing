$(function(){

	const header_nav = $('.header__open-nav');
	const popup_cnt = $('.popup-container');
	const close_btn = $('.close');
	const services_anchor = $('.services_a');
	const body_html = $('html,body');
	const portfolio_anchor = $('.portfolio_a');
	const costs_anchor = $('.costs_a');
	const tel_form = $('.tel-form');
	const slider = $('.your-class');

	header_nav.on('click',function(){
		popup_cnt.css('display','block');
		popup_cnt.css('position','fixed');
		popup_cnt.animate({
			left: '0px'
		},500);
	});
	close_btn.on('click',function(){
		popup_cnt.animate({
			left: '-1000px'
		},500,function(){
			popup_cnt.css('display','none');
		});
		popup_cnt.css('position','fixed');
	});
	services_anchor.on('click', function(e){
		body_html.stop().animate({ scrollTop: $('#Services').offset().top }, 800);
		e.preventDefault();
	});
	portfolio_anchor.on('click', function(e){
		body_html.stop().animate({ scrollTop: $('#Portfolio').offset().top }, 800);
		e.preventDefault();
	});
	costs_anchor.on('click', function(e){
		body_html.stop().animate({ scrollTop: $('#Costs').offset().top }, 800);
		e.preventDefault();
	});

	slider.slick({
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

	const section = $('.section');
	const item1 = $('.item-1');
	const item2 = $('.item-2');
	const item3 = $('.item-3');
	const item4 = $('.item-4');
	const item5 = $('.item-5');
	section.on('mouseover',function(){
		item1.css('transform','translate(-700px,-300px) rotate(-30deg)');
		item2.css('transform','translate(-1250px,-400px) rotate(20deg)');
		item3.css('transform','translate(-1190px,-180px) rotate(20deg)');
		item4.css('transform','translate(-400px,100px) rotate(20deg)');
		item5.css('transform','translate(-1100px,150px) rotate(-40deg)');
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
		body.css('overflow','hidden');
	});
	cross.on('click',function(event){
		if (event.target == this) {
			form_popup.fadeOut('fast','linear');
			body.css('overflow','unset');
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
		body_html.animate({
			scrollTop:0
		},700);
	});
	tel_form.inputmask({"mask": "+9 (999) 999-99-99"});
});
