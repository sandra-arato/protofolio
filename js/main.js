
function initialize() {
	$( ".my-font-family div" ).click(function() {

		console.log(this);

		$( ".my-font-family div" ).css({
			backgroundColor: "#ddd",
			color: "#212123"
		});

		$( this ).css({
			backgroundColor: "#212123",
			color: "#ddd"
		});
    
		console.log(this.id);

		if (this.id=="my-Dosis")
		  {
		  	console.log("in if");
		  	$( ".starter-template .my-container" ).css("font-family", "'Dosis', sans-serif");
		  }
		else if (this.id=="my-Open")
		  {
		  $( ".starter-template .my-container" ).css("font-family", "'Open Sans Condensed', sans-serif");
		  }
		else
		  {
		  $( ".starter-template .my-container" ).css("font-family", "'Anaheim', sans-serif");
		  }
			});

}

$(document).ready(initialize);
