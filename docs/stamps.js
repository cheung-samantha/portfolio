let lastStampIndex = null;
const stamps = [
	"media/stamps/loaf.png",
	"media/stamps/tea.png",
	"media/stamps/puppy.png",
	"media/stamps/sheep.png",
	"media/stamps/strawb.png",
	"media/stamps/book.png",
	"media/stamps/lemon.png",
	"media/stamps/wateringcan.png",
	"media/stamps/pencil.png",
	"media/stamps/yarn.png",
	"media/stamps/cake.png",
	];

const stampsTag = document.querySelector(".stamps");

const addStamp = function (x, y) {
	const img =  document.createElement("img");
	let currentIndex = getRandomInt(0, stamps.length)

	while(currentIndex === lastStampIndex) {
		currentIndex = getRandomInt(0, stamps.length)
	}

	img.setAttribute("src", stamps[currentIndex]);

	lastStampIndex = currentIndex

	//remove half the window width
	img.style.left = (x - window.innerWidth / 2) + "px";
	img.style.top = y + "px";

	stampsTag.appendChild(img);
};

document.addEventListener("click", function(event) {
	addStamp(event.pageX, event.pageY)
}, false);

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min) + min)
}

var link = document.getElementById("myModal");

//When the user clicks on a link, don't add stamp
window.onclick = function(event) {
	if (event.target == link) {
		stampsTag.style.display = "none";
	}
}