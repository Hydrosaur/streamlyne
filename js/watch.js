$("#subscribe-btn").on("click", function(e){
	var isSubbed = $(this).data("subbed");
	if(isSubbed === "false"){
		$(this).find(".text-default").text("Subscribe");
		var $badge = $(this).find(".badge");
		flipContrast(this);
		$badge.text(Number($badge.text()) - 1);
		$(this).data("subbed", "true");
	} else {
		$(this).find(".text-default").text("Unsubscribe");
		var $badge = $(this).find(".badge");
		flipContrast(this);
		$badge.text(Number($badge.text()) + 1);
		$(this).data("subbed", "false");
	}
});

function flipContrast(selector){
	var bgc = $(selector).css("background-color");
	var clr = $(selector).css("color");
	$(selector).css("background-color", clr);
	$(selector).css("color", bgc);
	$(selector).css({
		"outline": "0"
	});
}