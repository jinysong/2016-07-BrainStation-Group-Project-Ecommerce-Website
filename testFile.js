$(document).ready(function(){
	$('#submit-question').click(submit_question);
});

var first_load = true;
function submit_question(){
	$('#submit-question').prop('disabled',true);
	var option = Math.floor((Math.random() * number_of_conditions) + 1);
	show_answer(option);

}

function display_answer(answer){

	$('#msg-txt').fadeOut(500,function(){
		$('#msg-txt').html(answer);
		$('#msg-txt').fadeIn(500);
		$('#submit-question').prop('disabled',false);	
	});
	if(first_load){
		$('.msg').fadeIn(300,function(){
			first_load = false;
		});
	}
	
}