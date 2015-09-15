$(document).ready(function(){
    console.log("ready.........");
	$('.navbar').click(function(){
        console.log("clicked!!!!!!!");
		var list = $('.navbar');
		if (list.hasClass('expand')) {
            console.log('removing!!!');
			list.removeClass('expand');
		} else {
            console.log('adding!!!!!!!!111');
			list.addClass('expand');
        }
	});
});