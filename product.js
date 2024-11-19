// Get the product ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Example: Product Data (Mock Data)
const products = [
    { id: "1", name: "New Arrival 1", price: "$99.99", description: "Detailed description of Product 1", image: "image/image2-all.jpg" },
    { id: "2", name: "New Arrival 2", price: "$120.00", description: "Detailed description of Product 2", image: "image/image-all.jpg" },
    { id: "3", name: "New Arrival 3", price: "$79.99", description: "Detailed description of Product 3", image: "image/image7.jpg" },
    { id: "4", name: "New Arrival 4", price: "$85.00", description: "Detailed description of Product 4", image: "image/image17.png" },
    { id: "5", name: "New Arrival 5", price: "$90.00", description: "Detailed description of Product 5", image: "image/image6.png" },
    { id: "6", name: "Beaded Bag 1", price: "$90.00", description: "Detailed description of Product 6", image: "image/image2-all.jpg" },
    { id: "7", name: "Beaded Bag 2", price: "$90.00", description: "Detailed description of Product 7", image: "image/image-all.jpg" },
    { id: "8", name: "Beaded Bag 3", price: "$90.00", description: "Detailed description of Product 8", image: "image/image7.jpg" },
    { id: "9", name: "Beaded Bag 4", price: "$90.00", description: "Detailed description of Product 9", image: "image/image6.png" },
    { id: "10", name: "Beaded Bag 5", price: "$90.00", description: "Detailed description of Product 10", image: "image/image3.jpg" },
    { id: "11", name: "Beaded Bag 6", price: "$90.00", description: "Detailed description of Product 11", image: "image/image19.webp" },
    { id: "12", name: "Leather Bag 1", price: "$90.00", description: "Detailed description of Product 12", image: "image/image4.jpg" },
    { id: "13", name: "Leather Bag 2", price: "$90.00", description: "Detailed description of Product 13", image: "image/image5.jpg" },
    { id: "14", name: "Leather Bag 3", price: "$90.00", description: "Detailed description of Product 14", image: "image/image20.jpg" },
    { id: "15", name: "Leather Bag 4", price: "$90.00", description: "Detailed description of Product 15", image: "image/image17.png" },
];

// Find the product by ID
const product = products.find(p => p.id === productId);

// Update the page dynamically
if (product) {
    document.querySelector(".product-details h2").textContent = product.name;
    document.querySelector(".product-image img").src = product.image;
    document.querySelector(".product-description").textContent = product.description;
    document.querySelector(".product-price").textContent = product.price;
} else {
    // Product not found message
    const productDetailsSection = document.querySelector(".product-details");
    productDetailsSection.innerHTML = "<p class='error-message'>Product not found! Please check the product ID.</p>";
}

// Handle the review submission
document.getElementById('submit-review').addEventListener('click', () => {
    const newReview = document.getElementById('new-review').value.trim();
    if (newReview) {
        const reviewList = document.querySelector('.reviews');
        const reviewParagraph = document.createElement('p');
        reviewParagraph.textContent = newReview;
        reviewList.appendChild(reviewParagraph);
        document.getElementById('new-review').value = ''; // Clear textarea
        // Show a confirmation message
        const confirmationMessage = document.createElement('p');
        confirmationMessage.textContent = "Thank you for your review!";
        confirmationMessage.classList.add('confirmation-message');
        reviewList.appendChild(confirmationMessage);
    } else {
        alert('Please write a review before submitting!');
    }
});

