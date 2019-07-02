$(document).ready(function($) {

	$('.input_phone .input__wrap').mask('+7 (000) 000-00-00');


	var priceItemOpen = 'price__item_open',
			priceSubitemOpen = 'price__subitem_open';


	$('.price__head').click(function(event) {
		var item = $(this).parents('.price__item'),
				body = $(this).next('.price__body');
		if(item.hasClass(priceItemOpen)){
			item.removeClass(priceItemOpen);
			body.slideUp(500);
		} else {
			$('.price__item').removeClass(priceItemOpen);
			$('.price__body').slideUp(500);
			item.addClass(priceItemOpen);
			body.slideDown(500);
		}
	});


	$('.price__subhead').click(function(event) {
		var item = $(this).parents('.price__subitem'),
				body = $(this).next('.price__subbody');
		if(item.hasClass(priceSubitemOpen)){
			item.removeClass(priceSubitemOpen);
			body.slideUp(500);
		} else {
			$('.price__subitem').removeClass(priceSubitemOpen);
			$('.price__subbody').slideUp(500);
			item.addClass(priceSubitemOpen);
			body.slideDown(500);
		}
	});


	var faqItemOpen = 'faq__item_open',
			faqSubitemOpen = 'faq__subitem_open';

	$('.faq__head').click(function(event) {
		var item = $(this).parents('.faq__item'),
				body = $(this).next('.faq__body');
		if(item.hasClass(faqItemOpen)){
			item.removeClass(faqItemOpen);
			body.slideUp(500);
		} else {
			$('.faq__item').removeClass(faqItemOpen);
			$('.faq__body').slideUp(500);
			item.addClass(faqItemOpen);
			body.slideDown(500);
		}
	});


	$('.faq__subhead').click(function(event) {
		var item = $(this).parents('.faq__subitem'),
				body = $(this).next('.faq__subbody');
		if(item.hasClass(faqSubitemOpen)){
			item.removeClass(faqSubitemOpen);
			body.slideUp(500);
		} else {
			$('.faq__subitem').removeClass(faqSubitemOpen);
			$('.faq__subbody').slideUp(500);
			item.addClass(faqSubitemOpen);
			body.slideDown(500);
		}
	});
});
