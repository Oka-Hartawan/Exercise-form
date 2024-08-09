const signUpFroms = document.forms["sign-up-from"];
const firstNameInput = signUpFroms["first-name"];
const lastNameInput = signUpFroms["last-name"];
const ageInput = signUpFroms["age"];
const mesageFirstName = document.getElementById("error-mesage-first-name");
const mesageLastName = document.getElementById("error-mesage-last-name");
const mesageAge = document.getElementById("error-mesage-age");
const container = document.getElementById("container-1");
const container2 = document.getElementById("container-2");
const heloMesage = document.getElementById("helo-mesage");
const value1 = document.getElementById("value-1");
const value2 = document.getElementById("value-2");
const buton1 = document.getElementById("buton-1");
const buton2 = document.getElementById("buton-2");
const symbols = /[!@#$%^&*()_+{}\[\]:;"'<>,.?/~`1234567890]/;

function validation() {
  if (firstNameInput.value.trim() === "") {
    mesageFirstName.classList.remove("text-success");
    mesageFirstName.classList.add("text-danger");
    mesageFirstName.innerHTML = "First Name tidak boleh kosong";
  } else if (symbols.test(firstNameInput.value)) {
    mesageFirstName.classList.remove("text-success");
    mesageFirstName.classList.add("text-danger");
    mesageFirstName.innerHTML =
      "First name tidak boleh berisi simbol atau tombol";
  } else if (firstNameInput.value.length < 3) {
    mesageFirstName.classList.remove("text-success");
    mesageFirstName.classList.add("text-danger");
    mesageFirstName.innerHTML = "First name tidak boleh kurang dari 3 karakter";
  } else {
    mesageFirstName.classList.add("text-success");
    mesageFirstName.classList.remove("text-danger");
    mesageFirstName.innerHTML = "Oke";
  }

  if (lastNameInput.value.trim() === "") {
    mesageLastName.classList.remove("text-success");
    mesageLastName.classList.add("text-danger");
    mesageLastName.innerHTML = "Last Name tidak boleh kosong!";
  } else if (symbols.test(lastNameInput.value)) {
    mesageLastName.classList.remove("text-success");
    mesageLastName.classList.add("text-danger");
    mesageLastName.innerHTML =
      "Last name name tidak boleh berisi simbol atau tombol";
  } else if (lastNameInput.value.length < 3) {
    mesageLastName.classList.remove("text-success");
    mesageLastName.classList.add("text-danger");
    mesageLastName.innerHTML = "Last name tidak boleh kurang dari 3 karakter";
  } else {
    mesageLastName.classList.add("text-success");
    mesageLastName.classList.remove("text-danger");
    mesageLastName.innerHTML = "sip";
  }

  if (ageInput.value.trim() < 18) {
    mesageAge.classList.remove("text-success");
    mesageAge.classList.add("text-danger");
    mesageAge.innerHTML = "Umur tidak boleh di bawah 18";
  } else {
    mesageAge.classList.add("text-success");
    mesageAge.classList.remove("text-danger");
    mesageAge.innerHTML = "Mantap";
  }
  container.style.height = "auto";
}

function userIdentity() {
  if (
    mesageFirstName.innerHTML === "Oke" &&
    mesageLastName.innerHTML === "sip" &&
    mesageAge.innerHTML === "Mantap"
  ) {
    container.classList.add("d-none");
    container2.classList.remove("d-none");
    heloMesage.innerHTML = `Login Anda Telah Berhasil`;
    value1.innerHTML =
      " Nama Lengkap:" + " " + firstNameInput.value + " " + lastNameInput.value;
    value2.innerHTML = "Umur:" + " " + ageInput.value;
  } else {
    container2.classList.add("d-none");
    value1.innerHTML = "undefined";
    value2.innerHTML = "undefined";
  }
}

function resetForm() {
  buton2.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Terimakasih Telah Login");
    location.reload();
  });
}

buton1.addEventListener("click", (event) => {
  event.preventDefault();
  validation();
  userIdentity();
  resetForm();
});
