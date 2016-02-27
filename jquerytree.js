// $(document).ready(function(){
// 	$("li ul").hide();
// 	$("li:has(ul)").css("listStyleImage","url('hearta.PNG')");
//   	$("ul").css("listStyleImage","url('heart.PNG')");
// 	$("h5").click(function(){
//     	$(this).siblings().toggle();
//   	});
// });

$(document).ready(function(){
	$("li").children().hide();
	$("li:has(ul)").addClass("listimage");
	$("li ul").addClass("sonimage");
	$("li").click(function(event){
		$(this).children().toggle();
		event.stopPropagation();
		if ($(this).is(".listimage")) {
			$(this).removeClass("listimage").addClass("listimagea");
		}else if ($(this).is(".listimagea")) {
			$(this).removeClass("listimagea").addClass("listimage");
		};
	});
});