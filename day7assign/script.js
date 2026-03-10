const form = document.getElementById("registerForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");

const strengthBar = document.getElementById("strengthBar");
const togglePassword = document.getElementById("togglePassword");


nameInput.addEventListener("input", () => {
  nameError.textContent =
    nameInput.value.length < 3 ? "Minimum 3 characters required" : "";
});


emailInput.addEventListener("input", () => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailError.textContent =
    !pattern.test(emailInput.value) ? "Invalid email format" : "";
});


phoneInput.addEventListener("input", () => {
  const pattern = /^[0-9]{10}$/;
  phoneError.textContent =
    !pattern.test(phoneInput.value) ? "Enter valid 10-digit phone number" : "";
});


passwordInput.addEventListener("input", () => {
  let strength = 0;
  const value = passwordInput.value;

  if (value.length >= 6) strength++;
  if (/[A-Z]/.test(value)) strength++;
  if (/[0-9]/.test(value)) strength++;
  if (/[^A-Za-z0-9]/.test(value)) strength++;

  const width = strength * 25;
  strengthBar.style.width = width + "%";

  if (width <= 25) strengthBar.style.background = "red";
  else if (width <= 50) strengthBar.style.background = "orange";
  else if (width <= 75) strengthBar.style.background = "yellow";
  else strengthBar.style.background = "lime";
});


togglePassword.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const submission = {
    name: nameInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    password: passwordInput.value
  };

  let submissions = JSON.parse(localStorage.getItem("submissions")) || [];
  submissions.push(submission);

  localStorage.setItem("submissions", JSON.stringify(submissions));

  alert("Registered Successfully 🚀");

  form.reset();
  strengthBar.style.width = "0%";
});