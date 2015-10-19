$(document).ready(function(){
    console.log("ready.........");
	/*$('.nav-bar').click(function(){
        console.log("clicked!!!!!!!");
		var list = $('.nav-bar');
		if (list.hasClass('expand')) {
            console.log('removing!!!');
			list.removeClass('expand');
		} else {
            console.log('adding!!!!!!!!111');
			list.addClass('expand');
        }
	});*/
	$('.parent').click(function(){
		var proj = $('.drop_down', this);
		console.log('is this thing on?');
		if (proj.hasClass('expand')){
			proj.removeClass('expand');
		}
		 else{
			proj.addClass('expand', 'bxslider');
		}
	});
	$('.bxslider').bxSlider({
	  auto: true,
	  easing: 'ease-in-out',
	});
	$('.preshow').click(function(event){
		console.log("hello mother")
		var pic = $('.showcase', this);
		console.log('hello mom?')
		if (pic.hasClass('drop')){
			console.log('hello dawg')
			pic.removeClass('drop');
		}
		else{
			console.log('fucks')
			pic.addClass('drop');
		}
		event.stopPropagation();
	});	
});