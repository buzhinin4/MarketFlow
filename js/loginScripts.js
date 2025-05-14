document.addEventListener("DOMContentLoaded", function () {
  function validateEmail() {
    const emailInput = document.getElementById("login-email");
    const errorElement = document.getElementById("email-error");

    if (emailInput.value.trim() === "") {
      showError(errorElement, "Введите email или телефон");
      return false;
    }

    return true;
  }

  function validatePassword() {
    const passwordInput = document.getElementById("login-password");
    const errorElement = document.getElementById("password-error");

    if (passwordInput.value.trim() === "") {
      showError(errorElement, "Введите пароль");
      return false;
    }

    if (passwordInput.value.length < 6) {
      showError(errorElement, "Пароль слишком короткий");
      return false;
    }

    return true;
  }

  function showError(element, message) {
    element.textContent = message;
    element.style.display = "block";
  }

  document
    .getElementById("login-email")
    .addEventListener("blur", validateEmail);
  document
    .getElementById("login-password")
    .addEventListener("blur", validatePassword);
});
