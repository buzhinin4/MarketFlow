document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".details-tabs .tab-btn");
  const tabContents = document.querySelectorAll(
    ".details-content .tab-content"
  );

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

  const thumbnails = document.querySelectorAll(".gallery-thumbs .thumb");
  const mainImage = document.querySelector(".gallery-main img");

  thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", function () {
      thumbnails.forEach((t) => t.classList.remove("active"));

      this.classList.add("active");

      const newSrc = this.querySelector("img").src.replace("80x80", "500x500");
      mainImage.src = newSrc;
    });
  });
});
