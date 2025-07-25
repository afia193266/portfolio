window.addEventlistener("scroll",function()
{
	const header = document.querySelector("header");
	header.classlist.toggle("sticky",window.scrollY > 0);
});

const serviceModals = document.querySelectorAll(".service-modal");
const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick){
	serviceModals[modalClick].classList.add("active");

}
learnmoreBtns.forEach((learnmoreBtn, i)  => {
	learnmoreBtns.addEventlistener("click", () => {
		modal(i);
	});
});

modalCloseBtns.forEach((modalCloseBtn) => {
	modalCloseBtn.addEventlistener("click", () =>{
		serviceModals.forEach((modalView) => {
			modalView.classlist.remove("active");
		});
	});
});

const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventlistener("click" , () => {
	document.body.classList.toggle("dark-theme");
	themeBtn.classList.toggle("sun");

	localStorage.setItem("Saved-theme",getCurrentTheme());
	localStorage.setItem("Saved-icon",getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon" ;

const savedTheme =localStorage.getItem("Saved-theme");
const savedIcon =localStorage.getItem("Saved-icon");

if(savedTheme){
	document.body.classList[savedTheme==="dark" ? "add" : "remove"]("dark-theme");
	themeBtn.classList[savedIcon==="sun" ? "add" : "remove"]("sun");
}


const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventlistener("scroll", function()
{
	scrollTopBtn.classList.toggle("active",window.scrollY > 500);
});

scrollTopBtn.addEventlistener("click",() => {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
});