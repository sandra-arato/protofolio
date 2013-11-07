var projects = [
	{
		name: 
			"hundredlovers",
		title:
			"A Hundred Lovers",
		description: 
			"An interactive website featuring Diesel’s new Summer 2010 collection. We could pause the video at any time during the experience, check and see information about every single clothing one by one worn by the actors.",
		producer:
			"Stinkdigital",
		client:
			"Diesel",
		year:	
			"2010",
		url:
			"http://diesel-hundredlovers.archive.stinkdigital.com/",
		duties:
			"Developing the back-end part of the website, webshop integration. Also, the system I wrote sent the data to the experience about what kind of clothes appeared at a particular moment.",
		role: "back-end web developer",
		awards: 
			["FWA - Site of The Day",
			"Eurobest - Bronze/Interactive/Websites",
			"BIMA - Best Advertising"],
		images: 
			["images/hundredlovers1.jpg",
			"images/hundredlovers0.jpg",
			"images/hundredlovers2.jpg",
			"images/hundredlovers3.jpg"]
		// PRESS to be added later
	},
	{
		name: 
			"ikeacats",
		title:
			"Happy Inside / Ikea Cats",
		description: 
			"An award-winning interactive campaign for Ikea, where users could predict which cat likes what Ikea product. If you find a match, you win that Ikea product.",
		producer:
			"Stinkdigital",
		client:
			"IKEA",
		year:	
			"2010",
		url:
			"http://cats.archive.stinkdigital.com/",
		duties:
			"Developing the back-end, integrating the database with the front-end experience, and generating winning combinations and deciding on whether or not the user has won the product.",
		role: "back-end web developer",
		awards: 
			["CANNES - Cyber Bronze Lion",
			"FWA - Site of The Day",
			"Epica Awards 2010"],
		images: 
			["images/ikeacats0.jpg",
			"images/ikeacats1.jpg",
			"images/ikeacats2.jpg",
			"images/ikeacats3.jpg"]
		// PRESS to be added later
	},
	{
		name: 
			"ikeacats",
		title:
			"Third Project",
		description: 
			"An interactive website featuring Diesel’s new Summer 2010 collection. We could pause the video at any time during the experience, check and see information about every single clothing one by one worn by the actors.",
		producer:
			"Stinkdigital",
		client:
			"Diesel",
		year:	
			"2010",
		url:
			"http://diesel-hundredlovers.archive.stinkdigital.com/",
		duties:
			"Developing the back-end part of the website, webshop integration. Also, the system I wrote sent the data to the experience about what kind of clothes appeared at a particular moment.",
		role: "back-end web developer",
		awards: 
			["FWA - Site of The Day",
			"Eurobest - Bronze/Interactive/Websites",
			"BIMA - Best Advertising"],
		images: 
			["images/hundredlovers3.jpg",
			"images/hundredlovers0.jpg",
			"images/hundredlovers1.jpg",
			"images/hundredlovers2.jpg"]
		// PRESS to be added later
	},
	{
		name: 
			"hundredlovers",
		title:
			"This Is ME / Get inspired",
		description: 
			"An award-winning interactive campaign for Ikea, where users could predict which cat likes what Ikea product. If you find a match, you win that Ikea product.",
		producer:
			"Stinkdigital",
		client:
			"IKEA",
		year:	
			"2010",
		url:
			"http://cats.archive.stinkdigital.com/",
		duties:
			"Developing the back-end, integrating the database with the front-end experience, and generating winning combinations and deciding on whether or not the user has won the product. Maybe it's less weird if I add some extra lines and texts.",
		role: "back-end web developer",
		awards: 
			["CANNES - Cyber Bronze Lion",
			"FWA - Site of The Day",
			"Epica Awards 2010"],
		images: 
			["images/ikeacats0.jpg",
			"images/ikeacats1.jpg",
			"images/ikeacats2.jpg",
			"images/ikeacats3.jpg"]
		// PRESS to be added later
	},
	{
		name: 
			"hundredlovers",
		title:
			"Tweetlover's Music",
		description: 
			"We could pause the video at any time during the experience, check and see information about every single clothing one by one worn by the actors. We could buy these clothes by clicking the ‘buy’ button that went directly to Diesel’s online store.",
		producer:
			"Stinkdigital",
		client:
			"Diesel",
		year:	
			"2010",
		url:
			"http://diesel-hundredlovers.archive.stinkdigital.com/",
		duties:
			"Developing the back-end part of the website, webshop integration. Also, the system I wrote sent the data to the experience about what kind of clothes appeared at a particular moment.",
		role: "back-end web developer",
		awards: 
			["FWA - Site of The Day",
			"Eurobest - Bronze/Interactive/Websites",
			"BIMA - Best Advertising"],
		images: 
			["images/hundredlovers2.jpg",
			"images/hundredlovers0.jpg",
			"images/hundredlovers1.jpg",
			"images/hundredlovers3.jpg"]
		// PRESS to be added later
	},
	{
		name: 
			"ikeacats",
		title:
			"I heart NYC",
		description: 
			"An award-winning interactive campaign for Ikea, where users could predict which cat likes what Ikea product. If you find a match, you win that Ikea product.",
		producer:
			"Stinkdigital",
		client:
			"IKEA",
		year:	
			"2010",
		url:
			"http://cats.archive.stinkdigital.com/",
		duties:
			"Developing the back-end, integrating the database with the front-end experience, and generating winning combinations and deciding on whether or not the user has won the product.",
		role: "back-end web developer",
		awards: 
			["CANNES - Cyber Bronze Lion",
			"FWA - Site of The Day",
			"Epica Awards 2010"],
		images: 
			["images/ikeacats0.jpg",
			"images/ikeacats1.jpg",
			"images/ikeacats2.jpg",
			"images/ikeacats3.jpg"]
		// PRESS to be added later
	}
]

var mainContent;

function carousel() {
	$( ".my-portfolio:hover" ).hover(
	  function() {
	    $( this ).addClass( "carousel slide" );
	    $( this ).attr("id", "carousel-example-generic");
	    $( this ).attr("data-ride", "carousel");
	  }, function() {
	    $( this ).removeClass( "carousel slide" );
	    $( this ).attr("id", "");
	    $( this ).attr("data-ride", "");
	  }
	);
}

function setHeight () {
	boxes = $( ".thumbnails" );
	console.log(boxes);
	maxHeight = Math.max.apply(
	  Math, boxes.map(function() {
	    return $(this).height();
	}).get());
	// maxHeight = $("#project-thumbnails").height();
	console.log(maxHeight);
	// boxes.height(maxHeight);
}

function clearfix() {
	var clearDiv = $("<div />")
		.html(" ")
		.addClass("clearfix");
	console.log("in clearfix");
	$("#project-thumbnails").append(clearDiv);
	console.log("after clear");
}

function initPage() {
  mainContent = document.getElementById("project-thumbnails");
  renderCards();
  // setHeight();
  // carousel();
  
}

function renderCards() {
  var source   = $("#project-template").html();
  var template = Handlebars.compile(source);
  for (var i = 0; i < projects.length; i++) {
    renderCard(projects[i], template);
  };

}

function renderCard(card, template) {
  var div = document.createElement("div");
  var html   = template(card);
  div.innerHTML = html;
  mainContent.appendChild(div);
}

$(document).ready(initPage);