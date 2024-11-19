// Fetch cart data from the backend
function fetchCartItems() {
    fetch('backend/cart_data.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            action: 'get_cart', // Define the action if needed in backend
        }),
    })
        .then(response => response.json())
        .then(data => renderCart(data)) // Render the cart items
        .catch(error => console.error('Error:', error));
}

// Render cart items in the cart container
function renderCart(cartItems) {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = ''; // Clear previous content

    if (cartItems.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    const table = document.createElement('table');
    table.innerHTML = `
        <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
        </tr>
    `;

    cartItems.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price}</td>
            <td>${item.quantity}</td>
            <td>
                <button onclick="removeFromCart(${item.product_id})">Remove</button>
            </td>
        `;
        table.appendChild(row);
    });

    cartContainer.appendChild(table);
    cartContainer.innerHTML += '<a href="checkout.html">Proceed to Checkout</a>';
}

// Remove an item from the cart
function removeFromCart(productId) {
    fetch('backend/remove_from_cart.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            product_id: productId,
        }),
    })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            fetchCartItems(); // Refresh cart
        })
        .catch(error => console.error('Error:', error));
}

// Load cart items on page load
document.addEventListener('DOMContentLoaded', fetchCartItems);
