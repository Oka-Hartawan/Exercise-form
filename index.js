const signUpFroms = document.forms["sign-up-from"];
const firstNameInput = signUpFroms["first-name"];
const lastNameInput = signUpFroms["last-name"];
const ageInput = signUpFroms["age"];
const errorMesageFirstName = document.getElementById("error-mesage-first-name");
// const successMesageFirstName = document.getElementById("success-mesage-first-name");
const errorMesageLastName = document.getElementById("error-mesage-last-name");
// const succesMesageLastName = document.getElementById("success-mesage-last-name");
const errorMesageAge = document.getElementById("error-mesage-age");
// const successMesageAge = document.getElementById("succes-mesage-age");
const container = document.getElementById("container");

function validation(event) {
  event.preventDefault();
  firstNameInput.value.trim() === ""
    ? (errorMesageFirstName.innerText = "First name tidak boleh kosong")
    : (errorMesageFirstName.innerText = "Oke");

  lastNameInput.value.trim() === ""
    ? (errorMesageLastName.innerText = "Last name tidak boleh kosong")
    : (errorMesageLastName.innerText = "Sip");

  ageInput.value.trim() === ""
    ? (errorMesageAge.innerText = "Umur tidak boleh kosong")
    : (errorMesageAge.innerText = "Mantap");
  container.style.height = "auto";
}

signUpFroms.onsubmit = validation;
