function setActive() {
	// Add active class to the current button (highlight it)
	var header = document.getElementById("myLinks");
	var links = header.getElementsByClassName("link");
	for (var i = 0; i < links.length; i++) {
	  links[i].addEventListener("click", function() {
	    var current = document.getElementsByClassName("active");
	    current[0].className = current[0].className.replace(" active", "");
	    this.className += " active";
	  });
	}
}