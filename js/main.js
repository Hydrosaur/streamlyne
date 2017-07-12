var urlParams = new URL(location.href).searchParams;

var page = location.href.split("/")[3];

if(page === "" || page === "#"){
	page = "home";
} else if(page.search("search") > -1){
	page = "search";
}

$("#navbar").append(`
	<div id="icon-bar">
		<img id="img-brand" src="img/streamlyne-logo.png">
		<a ${page === "home" ? 'class="active"' : ""} onclick="location.href = '/'" title="Home"><span class="glyphicon glyphicon-home"></span></a>
		<a ${page === "search" ? 'class="active"' : ""} id="search-btn" title="Search">
			<span class="glyphicon glyphicon-search" id="search-icon"></span>
			<form id="search-form" action=""><input type="text" id="search-input" placeholder="Search:"></form>
		</a>
		<a onclick="//location.href = '#'" title="Trending"><span class="glyphicon glyphicon-fire"></span></a>
		<a onclick="//location.href = '#'" title="Subscriptions"><span class="glyphicon glyphicon-certificate"></span></a>
		<a onclick="//location.href = '#'" title="Your Clips"><span class="glyphicon glyphicon-user"></span></a>
		<a onclick="//location.href = '#'"><span class="glyphicon glyphicon-cog"></span></a>
	</div>
`);

$("#search-input").hide();
$("#search-btn").click(function() {
	$("#search-btn").addClass("slidebtn");
	$("#search-input").addClass("slideinput");
	$("#search-icon").hide();
	$("#search-input").show();
	$("#search-input").focus();
});

$("#search-form").on("submit", function(e){
	location.href = "/search?q=" + encodeURIComponent($("#search-input").val());
	console.log("/search?q=" + encodeURIComponent($("#search-input").val()));
	e.preventDefault();
});

setInterval(function(){
	if(!($("#search-input").is(":focus"))){
		$("#search-input").hide();
		$("#search-icon").show();
		$("#search-input").removeClass("slideinput");
		$("#search-btn").removeClass("slidebtn");
		$("#search-input").blur();
	}
}, 500);