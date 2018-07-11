function divToggle(options, div) {
	// Remove item 'div' from array of options so that only one can be up at a time
	var otherOptions = options.filter(function(e) { return e !== div })
	for (i = 0; i < otherOptions.length; i++) {
		document.getElementById(otherOptions[i]).style.display = "none";
	}
	var x = document.getElementById(div);
    if (x.style.display === "none" || x.style.display === "") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}