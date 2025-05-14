document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const orderCards = document.querySelectorAll(".order-card");

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      const tab = this.dataset.tab;

      orderCards.forEach((card) => {
        if (tab === "all" || card.dataset.status === tab) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });

      checkEmptyOrders(tab);
    });
  });

  function checkEmptyOrders(activeTab) {
    const emptyOrders = document.querySelector(".empty-orders");
    const visibleOrders = document.querySelectorAll(
      `.order-card[data-status="${activeTab}"]:not([style*="display: none"]), .order-card[style*="display: block"]`
    );

    if (activeTab === "all") {
      visibleOrders = document.querySelectorAll(
        '.order-card:not([style*="display: none"])'
      );
    }

    if (visibleOrders.length === 0) {
      emptyOrders.style.display = "block";
    } else {
      emptyOrders.style.display = "none";
    }
  }

  checkEmptyOrders("all");
});
