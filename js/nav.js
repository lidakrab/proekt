$(document).ready(function() { 
						   
	var slides = $("body, html").children(".bl"); 
	var height = $(".bl").height(); 
	var i = slides.length; 
	var offset = i * height;
	
	$("#body, html").css('height',offset);
	
	for (j=0; j < i; j++) {
		if (j==0) {
			$(".navigation").append("<div class='dot active' ></div>");
		}
		else {
			$(".navigation").append("<div class='dot'></div>");
		}
	}
	
	offset = 0; 
	i = 0;
	
	$('.navigation .dot').click(function(){
		$(".navigation .active").removeClass("active");								  
		$(this).addClass("active");
		i = $(this).index();
		offset = i * height;
		$("body, html").animate({"scrollTop":offset}, 500); 
	});

});