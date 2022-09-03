const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');

menuButton.addEventListener('click', () => {
	menuButton.classList.toggle('open');
});

const slides = document.querySelectorAll('.slider .slide');
const sliderButtonLeft = document.querySelector('.slider .arrow-button.left');
const sliderButtonRight = document.querySelector('.slider .arrow-button.right');
let activeSlideIndex = 0;

setSlidesPosition()

sliderButtonLeft.addEventListener('click', function () {
	if (activeSlideIndex === 0) {
		activeSlideIndex = slides.length - 1;
	} else {
		activeSlideIndex = activeSlideIndex - 1;
	}

	setSlidesPosition();
});

sliderButtonRight.addEventListener('click', function () {
	if (activeSlideIndex === slides.length -1) {
		activeSlideIndex = 0;
	} else {
		activeSlideIndex = activeSlideIndex + 1;
	}

	setSlidesPosition();
});

function setSlidesPosition() {
	slides.forEach(function(slide, index) {
		const percent = index - activeSlideIndex

		slide.style.transform = `translate(${100 * percent}%, 0)`;
	})
	
	if (activeSlideIndex === 0) {
		sliderButtonLeft.style.opacity = '.5';
		sliderButtonLeft.style.pointerEvents = 'none';
	} else {
		sliderButtonLeft.style.opacity = '1';
		sliderButtonLeft.style.pointerEvents = 'initial';
	}

	if (activeSlideIndex === slides.length - 1) {
		sliderButtonRight.style.opacity = '.5';
		sliderButtonRight.style.pointerEvents = 'none';
	} else {
		sliderButtonRight.style.opacity = '1';
		sliderButtonRight.style.pointerEvents = 'initial';
	}
};