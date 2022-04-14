const barsClick = document.querySelector(".bars");
const sidebar = document.querySelector("ul");
const closeClick = document.querySelector(".close");
const buttonScroll = document.querySelector(".arrow");

barsClick.addEventListener("click", function () {
  sidebar.classList.toggle("active");
});

closeClick.addEventListener("click", function () {
  sidebar.classList.remove("active");
});

window.addEventListener("scroll", function () {
  windowPosition = window.scrollY > 200;
  buttonScroll.classList.toggle("scroll-active", windowPosition);
});

window.onscroll = () => {
  sidebar.classList.remove("active");
};
