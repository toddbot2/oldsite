$(document.ready(function(){
	$('.navbar').click(function(){
		var list = $('.navbar');
		if (list.hasClass('expand'))
			list.removeClass('expand'));

		else 
			list.addClass('expand');
	});

});

	