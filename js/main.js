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
	if (evt.keyCode === 27) {
		evt.preventDefault();
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
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (writeusPopup.classList.contains("modal-show")) {
			writeusPopup.classList.remove("modal-show");
		}
	}
});

var serviceButtons = Array.prototype.slice.call(document.querySelectorAll(".button-service"));
var serviceSlider = document.querySelector(".service-slider");
if (serviceSlider) {
    var serviceSlides = serviceSlider.querySelectorAll(".service-item");
    serviceButtons.forEach(function(button, i) {
        button.addEventListener("click", function() {
            for (var y = 0; y < serviceSlides.length; y++) {
                serviceSlides[y].classList.remove("service-item-active");
                serviceButtons[y].classList.remove("button-service-active")
            }
            this.classList.add("button-service-active");
            serviceSlides[i].classList.add("service-item-active")
        })
    })
};

