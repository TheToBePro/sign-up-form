const pass = document.getElementById("password");
const passwordConfirm = document.getElementById("Password-Confirm");
const gridform = document.querySelector(".grid-form");
const form = document.getElementById("form-use");
console.log(gridform);
const btn = document.querySelector(".button");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let warning = document.createElement("div");

  warning.style.color = "red";
  warning.textContent = "please Make sure the passwords are the same!";

  if (pass.value !== passwordConfirm.value) {
    pass.classList.add("input-invalid");
    passwordConfirm.classList.add("input-invalid");
    gridform.append(warning);
  } else {
    form.submit();
  }
});
