function toggleMobileMenu(button) {
	button.classList.toggle("change");
	button.parentElement.classList.toggle("closed_nav");
}

window.onload = function() {
	const videos = document.getElementsByTagName("video");
	
	for(let i = 0; i < videos.length; i++) {
		if(!videos[i].controls) {
			videos[i].addEventListener("mouseover", function(event) {
				videos[i].play();
			});
			videos[i].addEventListener("mouseout", function(event) {
				videos[i].pause();
			});
		}
	}
}