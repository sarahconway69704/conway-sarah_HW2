(function(){
	"use strict";
	console.log("starting site!");
	
	const pinkIcons = document.querySelectorAll(".icons")
	
	function logIcon(){
		console.log("logging Icon");
		
		this.style.borderBottom = "3px solid hotpink";
	}
	
	pinkIcons.forEach(icon => icon.addEventListener("click", logIcon));
})();