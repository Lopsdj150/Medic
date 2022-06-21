const navItems = document.querySelector("#nav__items");
const openNavBtn = document.querySelector("#open__nav-btn");
const closeNavBtn = document.querySelector("#close__nav-btn");

openNavBtn.addEventListener("click", () => {
	navItems.style.display = "flex";
	openNavBtn.style.display = "none";
	closeNavBtn.style.display = "inline-block";
});

const closeNav = () => {
	navItems.style.display = "none";
	openNavBtn.style.display = "inline-block";
	closeNavBtn.style.display = "none";
};

closeNavBtn.addEventListener("click", closeNav);

//seccion de testimonios
var swiper = new Swiper(".mySwiper", {
	slidesPerView: 1,
	spaceBetween: 30,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},

	//Responsivo

	breakpoints: {
		600: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
	},
});
