savedata=function(form) {
	var username = $(form).find('input.name');
	var country = $(form).find('select.country');
localStorage.setItem('username', username.val());
localStorage.setItem('country', country.val());
}

$(function() {
	$('form').submit(function(event) {
		event.preventDefault();
		savedata(this);
		$(this).fadeOut(function() {
			$('#thank_you').fadeIn();
			$('#thank_you p').html();
			$('#thank_you p').html($('#thank_you p').html() + ', ' + localStorage.getItem('username'));

		});
	});
var country = localStorage.getItem('country');
if (country) {
	$('.country_flag').attr('src','images/'+country.toLowerCase()+'.png');
} 

});