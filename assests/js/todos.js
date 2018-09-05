$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

$("input").on("keypress",function (e){
	if(e.which === 13){
		var newItem = $(this).val();
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ newItem +"</li>");
		$(this).val("");
	}
});

$("ul").on("click","span",function(e){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	e.stopPropagation();
});