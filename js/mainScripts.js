// scripts.js

const products = [
  {
    name: "Смартфон Xiaomi Redmi Note 12 Pro",
    price: 24990,
    popularity: 124,
    marketplace: "ozon",
    image:
      "https://mi.by/upload/resize_cache/webp/iblock/a0b/0bujbbzkjpy3wq71rx7ivnbudiditpd1.webp",
    rating: 4,
    oldPrice: 29990,
  },
  {
    name: "Наушники Sony WH-CH720N",
    price: 12490,
    popularity: 87,
    marketplace: "wb",
    image:
      "https://imgproxy.onliner.by/Qu59lSK8s5UA6KLft2fOhNjmQIgpUbDe11pSI1gjWhE/w:700/h:550/f:jpg/aHR0cHM6Ly9jb250/ZW50Lm9ubGluZXIu/YnkvY2F0YWxvZy9k/ZXZpY2UvbGFyZ2Uv/OWJiYzY1Mzg3Njgw/OTI2NjM1MjQzMTIx/MWUzNmQ5NDUuanBl/Zw",
    rating: 5,
  },
  {
    name: "Умные часы Amazfit GTS 4",
    price: 15999,
    popularity: 56,
    marketplace: "aliexpress",
    image:
      "https://imgproxy.onliner.by/_JyvqqV4KtdZGIWosrY4lbgs2OlGudL5Mp7fOb90XVo/w:170/h:250/z:2/f:jpg/aHR0cHM6Ly9jb250/ZW50Lm9ubGluZXIu/YnkvY2F0YWxvZy9k/ZXZpY2Uvb3JpZ2lu/YWwvNjM2ZmNiZTM2/MDE5NmQxOTQ1MzEz/ZjFiZTAxZGU3NTMu/anBlZw",
    rating: 4,
    oldPrice: 22999,
  },
  {
    name: "Ноутбук ASUS VivoBook 15",
    price: 54990,
    popularity: 42,
    marketplace: "ozon",
    image:
      "https://shop.mts.by/upload/resize_cache/iblock/304/m6pc9uckg0urcyfn2qi4arwcaiyunvza/500_926_1/Vivobook_15_X1504_blue_1.jpg",
    rating: 3,
  },
  {
    name: "Портативная колонка JBL Flip 6",
    price: 9990,
    popularity: 156,
    marketplace: "aliexpress",
    image:
      "https://img.5element.by/import/images/ut/goods/good_7f8f4957-b7ff-11ed-bb92-005056012465/flip6-wht-aktivnaya-akusticheskaya-sistema-jbl-1_600.jpg",
    rating: 5,
    oldPrice: 12490,
  },
  {
    name: "Фитнес-браслет Huawei Band 7",
    price: 3499,
    popularity: 78,
    marketplace: "wb",
    image:
      "https://imgproxy.onliner.by/RgbpxtTITiEUB3cDS1mPjDFR70bH1jPsI75fv-1cK4w/w:700/h:550/f:jpg/aHR0cHM6Ly9jb250/ZW50Lm9ubGluZXIu/YnkvY2F0YWxvZy9k/ZXZpY2UvbGFyZ2Uv/NDg0N2ZkYzlmYmU4/YWU4ZmE1MDg2MDUz/ZjkzZmJiOWIuanBl/Zw",
    rating: 4,
  },
];

// Function to filter products by price and marketplace
function filterProducts() {
  const priceFilter = document.getElementById("price").value;
  const marketplaceFilter = document.getElementById("marketplace").value;

  let filteredProducts = products;

  // Price filtering
  if (priceFilter !== "all") {
    const priceRanges = {
      low: [0, 5000],
      medium: [5000, 20000],
      high: [20000, Infinity],
    };
    const [min, max] = priceRanges[priceFilter];
    filteredProducts = filteredProducts.filter(
      (product) => product.price >= min && product.price < max
    );
  }

  // Marketplace filtering
  if (marketplaceFilter !== "all") {
    filteredProducts = filteredProducts.filter(
      (product) => product.marketplace === marketplaceFilter
    );
  }

  displayProducts(filteredProducts);
}

// Function to sort products
function sortProducts(criteria) {
  let sortedProducts;
  switch (criteria) {
    case "price-asc":
      sortedProducts = products.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      sortedProducts = products.sort((a, b) => b.price - a.price);
      break;
    case "popular":
      sortedProducts = products.sort((a, b) => b.popularity - a.popularity);
      break;
    default:
      sortedProducts = products;
  }
  displayProducts(sortedProducts);
}

// Function to display products
function displayProducts(products) {
  const productGrid = document.querySelector(".products-grid");
  productGrid.innerHTML = ""; // Clear previous products
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
      <div class="product-badges">
        ${
          product.oldPrice
            ? `<span class="badge discount">-${Math.round(
                ((product.oldPrice - product.price) / product.oldPrice) * 100
              )}%</span>`
            : ""
        }
        <span class="badge marketplace">${product.marketplace}</span>
      </div>
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" />
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <div class="rating">${"★".repeat(product.rating)}<span>(${
      product.popularity
    })</span></div>
        <div class="price">
          <span class="current-price">${product.price} ₽</span>
          ${
            product.oldPrice
              ? `<span class="old-price">${product.oldPrice} ₽</span>`
              : ""
          }
        </div>
        <button class="btn btn-primary">В корзину</button>
      </div>
    `;
    productGrid.appendChild(productCard);
  });
}

// Event listeners for filters and sorting
document.getElementById("price").addEventListener("change", () => {
  filterProducts();
});
document.getElementById("marketplace").addEventListener("change", () => {
  filterProducts();
});
document.getElementById("sort").addEventListener("change", (event) => {
  sortProducts(event.target.value);
  filterProducts(); // Apply filters after sorting
});

// Initial display of products
displayProducts(products);
