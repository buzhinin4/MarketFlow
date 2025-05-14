document.addEventListener("DOMContentLoaded", function () {
  const themeToggles = document.getElementsByClassName("theme-toggle");
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark" || (!currentTheme && prefersDarkScheme.matches)) {
    document.body.classList.add("dark-theme");
  }

  Array.from(themeToggles).forEach((e) =>
    e.addEventListener("click", function () {
      const isDark = document.body.classList.toggle("dark-theme");
      localStorage.setItem("theme", isDark ? "dark" : "light");
    })
  );

  const menuToggle = document.getElementById("mobile-menu-toggle");
  const mainNav = document.getElementById("main-nav");

  menuToggle.addEventListener("click", function () {
    this.classList.toggle("active");
    mainNav.classList.toggle("active");
  });

  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      mainNav.classList.remove("active");
    });
  });

  const loginButtons = document.querySelectorAll(".btn-login");
  const registerButtons = document.querySelectorAll(".btn-register");

  Array.from(loginButtons).forEach((e) =>
    e.addEventListener("click", function () {
      window.location.href = "login.html";
    })
  );

  Array.from(registerButtons).forEach((e) =>
    e.addEventListener("click", function () {
      window.location.href = "register.html";
    })
  );
});
