const FULLSCREEN = document.querySelector(".openfullscreen");

function toggleFullScreen() {
	if (!document.fullscreenElement) {
		document.documentElement.requestFullscreen();
	} else {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		}
	}
}

FULLSCREEN.addEventListener('click', toggleFullScreen);