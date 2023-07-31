const userHolder = document.getElementById("current-user");
const logoutBtn = document.querySelector(".collapse button");

const currentUser = localStorage.getItem("currentuser");
userHolder.innerHTML = currentUser;

logoutBtn.addEventListener("click", () => {
  window.location = "./login.html";
});
