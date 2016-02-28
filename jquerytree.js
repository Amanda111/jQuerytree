$(document).ready(function(){
	$("li").children().hide();
	$("li:has(ul)").addClass("listimage");
	$("li:not(:has(ul))").addClass("sonimage");
	$("li").click(function(event){
		if (this==event.target) {
			if ($(this).is(".listimage")) {
				$(this).children().slideDown("fast",function(){
					$(this).parent().removeClass("listimage").addClass("listimagea");
				});
			}else if ($(this).is(".listimagea")) {
				$(this).children().slideUp("fast",function(){
				$(this).parent().removeClass("listimagea").addClass("listimage");
				});
			};
		};
	});
});

//initial

// $(document).ready(function(){
// 	$("li").children().hide();
// 	$("li:has(ul)").addClass("listimage");
// 	$("li ul").addClass("sonimage");
// 	$("li").click(function(event){
// 		$(this).children().toggle();
// 		event.stopPropagation();
// 		if ($(this).is(".listimage")) {
// 			$(this).removeClass("listimage").addClass("listimagea");
// 		}else if ($(this).is(".listimagea")) {
// 			$(this).removeClass("listimagea").addClass("listimage");
// 		};
// 	});
// });