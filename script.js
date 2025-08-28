// Search + Filter
const searchBox = document.getElementById("search-box");
const filter = document.getElementById("filter");
const products = document.querySelectorAll(".product");

// Function to filter products
function filterProducts() {
  let searchValue = searchBox.value.toLowerCase();
  let filterValue = filter.value;

  products.forEach(product => {
    let name = product.querySelector("h3").textContent.toLowerCase();
    let category = product.getAttribute("data-category");

    // Check search + filter
    if (
      (name.includes(searchValue)) &&
      (filterValue === "all" || filterValue === category)
    ) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

// Event listeners
if (searchBox) searchBox.addEventListener("keyup", filterProducts);
if (filter) filter.addEventListener("change", filterProducts);
