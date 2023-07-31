const logInBtn = document.getElementById("login-btn");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");
const failMessage = document.querySelector(".fail");
const incorectMessage = document.querySelector(".missing");
let dataBase = [];
if (localStorage.getItem("users") != null) {
  dataBase = JSON.parse(localStorage.getItem("users"));
}

logInBtn.addEventListener("click", (event) => {
  event.preventDefault();
  validInput();
  checkUser(emailInput.value, passInput.value);
});

function validInput() {
  if (emailInput.value === "" || passInput.value === "") {
    failMessage.classList.remove("d-none");
    incorectMessage.classList.add("d-none");
  }
}

function checkUser(email, password) {
  if (dataBase.length > 0 && emailInput.value && passInput.value) {
    dataBase.forEach((element) => {
      if (element.email === email && element.password === password) {
        localStorage.setItem("currentuser", element.name);
        window.location = "./home.html";
      } else {
        showIncorrect();
      }
    });
  } else {
    if (emailInput.value && passInput.value) {
      showIncorrect();
    } else validInput();
  }
}

function showIncorrect() {
  incorectMessage.classList.remove("d-none");
  failMessage.classList.add("d-none");
}
