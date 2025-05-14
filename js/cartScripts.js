document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".qty-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const input = this.parentElement.querySelector(".qty-input");
      let value = parseInt(input.value);

      if (this.classList.contains("minus") && value > 1) {
        input.value = value - 1;
        updateCartItem(this.closest(".cart-item"));
      } else if (this.classList.contains("plus")) {
        input.value = value + 1;
        updateCartItem(this.closest(".cart-item"));
      }
    });
  });

  document.querySelectorAll(".qty-input").forEach((input) => {
    input.addEventListener("change", function () {
      if (this.value < 1) this.value = 1;
      updateCartItem(this.closest(".cart-item"));
    });
  });

  document.querySelectorAll(".remove-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const cartItem = this.closest(".cart-item");
      cartItem.classList.add("removing");

      setTimeout(() => {
        cartItem.remove();
        checkEmptyCart();
        updateCartSummary();
      }, 300);
    });
  });

  function checkEmptyCart() {
    const cartItems = document.querySelector(".cart-items");
    const cartEnvironment = document.querySelectorAll(
      ".page-title, .cart-container"
    );
    const emptyCart = document.querySelector(".empty-cart");

    if (cartItems.children.length === 0) {
      emptyCart.style.display = "block";
      cartEnvironment.forEach((e) => {
        e.style.display = "none";
      });
    } else {
      emptyCart.style.display = "none";
    }
  }
});
