var mapLink = document.querySelector(".map");
var writeusLink = document.querySelector(".write-us");

var mapPopup = document.querySelector(".modal-map");
var writeusPopup = document.querySelector(".modal-form");

var mapClose = mapPopup.querySelector(".modal-close");
var writeusClose = writeusPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
	evt.preventDefault();
	if (evt.keyCode === 27) {
		if (mapPopup.classList.contains("modal-show")) {
			mapPopup.classList.remove("modal-show");
		}
	}
});

writeusLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	writeusPopup.classList.add("modal-show");
});

writeusClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	writeusPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
	evt.preventDefault();
	if (evt.keyCode === 27) {
		if (writeusPopup.classList.contains("modal-show")) {
			writeusPopup.classList.remove("modal-show");
		}
	}
});


