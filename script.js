// ===============================
// 🌙 Dark Mode Toggle
// ===============================
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// ===============================
// 🎮 Click Counter Feature
// ===============================
let count = 0;
const counterBtn = document.getElementById("counterBtn");
const counterValue = document.getElementById("counterValue");

counterBtn.addEventListener("click", () => {
  count++;
  counterValue.textContent = count;
});

// ===============================
// ❓ FAQ Toggle Feature
// ===============================
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.classList.toggle("show");
  });
});

// ===============================
// 📋 Form Validation
// ===============================
const form = document.getElementById("registerForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const formSuccess = document.getElementById("formSuccess");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form reload
  let valid = true;

  // Validate Name
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // Validate Email with Regex
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emailPattern)) {
    emailError.textContent = "Enter a valid email.";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Validate Password (at least 6 chars, one number)
  const passwordPattern = /^(?=.*\d).{6,}$/;
  if (!passwordInput.value.match(passwordPattern)) {
    passwordError.textContent = "Password must be at least 6 chars and include a number.";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  // If all valid
  if (valid) {
    formSuccess.textContent = "✅ Registration successful!";
    form.reset();
  } else {
    formSuccess.textContent = "";
  }
});
