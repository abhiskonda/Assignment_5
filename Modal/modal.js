$(document).ready(function(){
	//listen for open click
	$('#modalbtn').click(function(){
		$('.modal').css("display","block");
	});
	//listen for close click
	$('.closeBtn').click(function(){
		$('.modal').css("display","none");
	})
	//listen for outside click
	
    $(window).click(function (event) {
    	var target = $(event.target);
    	if ( target.is(".modal") || target.is(".btnCloseBtn") ) {
    		$(".modal").css("display", "none");
    	}
    });
	
})