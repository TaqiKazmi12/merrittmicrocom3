document.addEventListener("DOMContentLoaded", function() {
    const categoryLinks = document.querySelectorAll(".side-filter a");
    const productCards = document.querySelectorAll(".single-card");
    // const priceRange = document.getElementById("priceRange");
    // const minPriceInput = document.getElementById("minPrice");
    // const maxPriceInput = document.getElementById("maxPrice");
    const sideFilter = document.querySelector(".side-filter");

    categoryLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            const selectedCategory = link.getAttribute('data-category');
            filterProducts(selectedCategory);
            updateSelectedCategory(selectedCategory);
        });
    });

    // function updatePriceRange() {
    //     const minPrice = parseInt(minPriceInput.value);
    //     const maxPrice = parseInt(maxPriceInput.value);
    //     const priceText = `$${minPrice} - $${maxPrice}`;
    //     document.getElementById("priceValue").textContent = priceText;
    //     // Smooth animation for price value change
    //     document.getElementById("priceValue").style.transition = "opacity 0.3s ease-in-out";
    //     document.getElementById("priceValue").style.opacity = "0";
    //     setTimeout(function() {
    //         document.getElementById("priceValue").style.opacity = "1";
    //     }, 300);
    // }

    function filterProducts(category = null) {
        productCards.forEach(function(card) {
            const cardCategory = card.classList.contains('server') ? 'server' :
                                card.classList.contains('hardware') ? 'hardware' : '';
            // const cardPrice = parseInt(card.getAttribute('data-price'));

            if (!category || cardCategory === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Toggle sidebar visibility
    document.querySelector('.nav-toggle').addEventListener('click', function() {
        sideFilter.classList.toggle('show');
    });
});
function selectCategory(category) {
    const serverTick = document.getElementById('serverTick');
    const hardwareTick = document.getElementById('hardwareTick');
  
    // Remove tick from all categories
    serverTick.innerHTML = '';
    hardwareTick.innerHTML = '';
  
    // Add tick to selected category
    if (category === 'server') {
      serverTick.innerHTML = '✓';
    } else if (category === 'hardware') {
      hardwareTick.innerHTML = '✓';
    }
  }