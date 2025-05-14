document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".profile-tabs .tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      this.classList.add("active");

      const tabId = this.dataset.tab;
      document
        .querySelector(`.tab-content[data-tab="${tabId}"]`)
        .classList.add("active");
    });
  });

  const editToggle = document.querySelector(".edit-toggle");
  const saveBtn = document.querySelector(".save-btn");
  const cancelBtn = document.querySelector(".cancel-btn");
  const formInputs = document.querySelectorAll(".profile-form input");

  if (editToggle) {
    editToggle.addEventListener("click", function () {
      formInputs.forEach((input) => (input.disabled = false));
      saveBtn.disabled = false;
      cancelBtn.disabled = false;
      this.style.display = "none";
    });
  }

  if (cancelBtn) {
    cancelBtn.addEventListener("click", function () {
      formInputs.forEach((input) => {
        input.disabled = true;
      });
      saveBtn.disabled = true;
      this.disabled = true;
      editToggle.style.display = "inline-block";
    });
  }
});
