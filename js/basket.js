// Select All Checkbox Functionality
const selectAllCheckbox = document.getElementById('select-all');
const productCheckboxes = document.querySelectorAll('.product-checkbox');
const subtotalElement = document.getElementById('subtotal');
const totalElement = document.getElementById('total');

// Quantity Control Functionality
function setupQuantityControls(product) {
    const minusBtn = product.querySelector('.minus-btn');
    const plusBtn = product.querySelector('.plus-btn');
    const quantityInput = product.querySelector('.quantity');
    const productTotal = product.querySelector('.product-total');
    const productPrice = product.querySelector('.product-price').textContent;
    const checkbox = product.querySelector('.product-checkbox');

    minusBtn.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            currentValue--;
            quantityInput.value = currentValue;
            productTotal.textContent = `€${(currentValue * parseFloat(productPrice.replace('€', ''))).toFixed(2)}`;
            updateTotal();
        }
    });

    plusBtn.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value);
        currentValue++;
        quantityInput.value = currentValue;
        productTotal.textContent = `€${(currentValue * parseFloat(productPrice.replace('€', ''))).toFixed(2)}`;
        updateTotal();
    });

    checkbox.addEventListener('change', updateTotal);
}

// Update Total Calculation
function updateTotal() {
    let subtotal = 0;
    productCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
            const product = checkbox.closest('.product');
            const productTotal = product.querySelector('.product-total');
            subtotal += parseFloat(productTotal.textContent.replace('€', ''));
        }
    });

    subtotalElement.textContent = `€${subtotal.toFixed(2)}`;
    totalElement.textContent = `€${subtotal.toFixed(2)}`;

    // Check if all checkboxes are selected
    const allChecked = Array.from(productCheckboxes).every(cb => cb.checked);
    selectAllCheckbox.checked = allChecked;
}

// Select All Checkbox Event
selectAllCheckbox.addEventListener('change', () => {
    productCheckboxes.forEach(checkbox => {
        checkbox.checked = selectAllCheckbox.checked;
    });
    updateTotal();
});

// Individual Checkbox Event
productCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        // Check if all checkboxes are selected
        const allChecked = Array.from(productCheckboxes).every(cb => cb.checked);
        selectAllCheckbox.checked = allChecked;
        updateTotal();
    });
});

// Setup quantity controls for each product
document.querySelectorAll('.product').forEach(setupQuantityControls);