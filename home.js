// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Select all 'Add to Cart' buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Add click event listener to each button
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-product-id'); // Get product ID from data attribute
            const quantity = 1; // Default quantity to 1

            // Send the product ID and quantity to the backend
            fetch('backend/cart_data.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams({
                    product_id: productId,
                    quantity: quantity,
                    action: 'add_to_cart',
                }),
            })
                .then(response => response.json())
                .then(data => {
                    alert(data.message || 'Added to cart!');
                })
                .catch(error => console.error('Error:', error));
        });
    });
});
