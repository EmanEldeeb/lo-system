const nameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");
const signUpBtn = document.getElementById("singup");
const failMessage = document.querySelector(".fail");
const successMessage = document.querySelector(".success");
const existsMessage = document.querySelector(".exists");
let users = [];

signUpBtn.addEventListener("click", (event) => {
  event.preventDefault();
  validInputs();
  addNewUser(nameInput.value, emailInput.value, passInput.value);
});

function validInputs() {
  if (
    nameInput.value === "" ||
    emailInput.value === "" ||
    passInput.value === ""
  ) {
    failMessage.classList.remove("d-none");
    successMessage.classList.add("d-none");
    existsMessage.classList.add("d-none");
  }
}
function User(name, email, password) {
  this.name = name;
  this.email = email;
  this.password = password;
}

function addNewUser(name, email, password) {
  if (name && email && password) {
    const user = new User(name, email, password);
    console.log(preUser(email));
    if (preUser(email)) {
      existsMessage.classList.remove("d-none");
      successMessage.classList.add("d-none");
      failMessage.classList.add("d-none");
      return;
    } else {
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
      successMessage.classList.remove("d-none");
      failMessage.classList.add("d-none");
      existsMessage.classList.add("d-none");
    }
  }
}

function preUser(email) {
  if (localStorage.getItem("users") != null) {
    users = JSON.parse(localStorage.getItem("users"));
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email) {
        return true;
      }
    }
  }
}
