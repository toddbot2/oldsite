$(document).ready(function(){
    console.log("ready.........");
	$('.nav-bar').click(function(){
        console.log("clicked!!!!!!!");
		var list = $('.nav-bar');
		if (list.hasClass('expand')) {
            console.log('removing!!!');
			list.removeClass('expand');
		} else {
            console.log('adding!!!!!!!!111');
			list.addClass('expand');
        }
	});
	$('.parent').click(function(){
		var proj = $('.drop_down', this);
		console.log('is this thing on?');
		if (proj.hasClass('expand')){
			proj.removeClass('expand');
		}
		 else{
			proj.addClass('expand');
		}
	});
	$('.bxslider').bxSlider({
	  auto: true,
	});
});