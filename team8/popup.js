document.addEventListener('DOMContentLoaded', function(){

	var audio = new Audio('choir.mp3');

	var sswitch = document.getElementById('sexyswitch');
	sswitch.addEventListener('change', function(){

		document.getElementById('logo').classList.toggle("badlogo");
		document.getElementById('logo').classList.toggle("goodlogo");

		if (this.checked) {
			chrome.tabs.executeScript(null, { file: "blankslate.js" });
            chrome.tabs.executeScript(null, { file: "jquery-3.3.1.min.js" });
			chrome.tabs.insertCSS(null, { file: "bootstrap.min.css" });
			audio.play();
		}
		else {
			chrome.tabs.reload();
			audio.pause();
		}

	});
});