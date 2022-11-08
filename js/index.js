const slider = document.querySelector(".slider");
const slidesCount = slider.childElementCount;
const maxLeft = (slidesCount - 1) * 100 * -1;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let current = 0;

function changeSlide(value) {
	if (value) {
		current += current > maxLeft ? -100 : current * -1;
	} else {
		current = current < 0 ? current + 100 : maxLeft;
	}

	slider.style.left = current + "%";
}

next.addEventListener("click", () => changeSlide(true));
prev.addEventListener("click", () => changeSlide(false));
