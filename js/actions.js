function addToCart(orderDetails) {
    const product = products.find((product) => product.id == orderDetails.id)
    const cart = JSON.parse(localStorage.getItem('cart')) || []

    const selectedVariation = product.variations.find(variation => variation.unit === orderDetails.unit);



  
    const cartItem = {
        id: product.id,
        name: product.name,
        quantity: orderDetails.quantity || 1,
        price: selectedVariation.price,
        unit: selectedVariation.unit, 
        totalPrice: selectedVariation.price * (orderDetails.quantity || 1)
    }


    
   
    const existingProduct = cart.find((item) => item.id == orderDetails.id && item.unit == orderDetails.unit)
   
    if (existingProduct) {
        existingProduct.quantity += orderDetails.quantity
        existingProduct.totalPrice = selectedVariation.price * existingProduct.quantity
    } else {
        cart.push(cartItem)
    }

    localStorage.setItem('cart', JSON.stringify(cart))
}



const modal = document.getElementById("myModal");
const closeBtn = document.querySelector(".close");
// const addToCartBtn = document.getElementById("myBasket");
const continueShoppingBtn = document.querySelector(".continue-shopping");
const viewBasketBtn = document.querySelector(".view-basket");
const modalProductInfo = document.getElementById("modal-product-info");


// Function to show the modal with product details
function showSuccessModal(productId) {
    const product = products.find((product) => product.id == productId)

    // Get product info
    const productTitle = product.name;
    const selectedSize = document.getElementById("custom_select")?.value || product.variations[0].unit;
    const quantity = document.getElementById("quantity")?.value || 1;
    
    // Update modal message with product details
    modalProductInfo.textContent = `${quantity} × ${productTitle} (${selectedSize}) has been added to your basket.`;
    
    modal.style.display = "block";
    
    // Prevent scrolling on the body while modal is open
    document.body.style.overflow = "hidden";
  }
  
  // Function to close the modal
  function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Re-enable scrolling
  }

  // Close modal when clicking outside of it
window.addEventListener("click", function(event) {
    if (event.target === modal) {
      closeModal();
    }
  });
  
  // Optional: Close modal with ESC key
  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape" && modal.style.display === "block") {
      closeModal();
    }
  });

closeBtn.addEventListener("click", closeModal);
continueShoppingBtn.addEventListener("click", closeModal);
