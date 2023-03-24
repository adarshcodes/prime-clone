const ham = document.querySelector(".ham");
const sidebar = document.querySelector(".sidebar");
const search = document.querySelector(".search-bar");
const user = document.querySelector(".user-info");
const angle = document.querySelector(".angle-right");
const bottom = document.querySelector(".bottom");
const avatar = document.querySelector(".avatar");
const mainContent = document.querySelector(".main-content");

ham.addEventListener("click", function () {
	sidebar.classList.toggle("active-sidebar");
	console.log("working");
	search.classList.toggle("add-sidebar-items");
	user.classList.toggle("add-sidebar-items");
	angle.classList.toggle("add-sidebar-items");
	bottom.classList.toggle("active-user");
	avatar.classList.toggle("active-avatar");
	mainContent.classList.toggle("active-main-content");
});
