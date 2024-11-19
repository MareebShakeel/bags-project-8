function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('mainContent');
    const overlay = document.getElementById('overlay');

    // Toggle active classes for sidebar, overlay, and content shift
    sidebar.classList.toggle('active');
    mainContent.classList.toggle('shifted');
    overlay.classList.toggle('active');
}


// Function to load content based on clicked section
function loadSection(section) {
    const contentPlaceholder = document.getElementById('content-placeholder');

    let content = '';

    switch (section) {
        case 'reviews':
            content = `
                <div class="section reviews">
                    <h2>Customer Reviews</h2>
                    <p>Here are some reviews from our satisfied customers:</p>
                    <ul class="review-list">
                        <li class="review-item">"I love my new bag!" - <span class="review-author">Sarah</span></li>
                        <li class="review-item">"Great quality and fast shipping!" - <span class="review-author">John</span></li>
                        <li class="review-item">"Beautiful designs and affordable prices." - <span class="review-author">Emily</span></li>
                        <li class="review-item">"The bag quality is good and I love it." - <span class="review-author">Maria</span></li>
                    </ul>
                </div>
            `;
            break;
        

        case 'about':
            content = `
                <div class="section about">
                    <h2>About Us</h2>
                    <p>At Bead Charm, we create beautiful bags that tell a story. Our beads are sourced from around the world, ensuring that each piece is unique.</p>
                    <h3>Our Mission</h3>
                    <p>To provide handmade bags that reflect individuality and style.</p>
                    <h3>Our Process</h3>
                    <p>Each bag is handcrafted with care, ensuring high quality and attention to detail.</p>
                </div>
            `;
            break;

        case 'shipping':
            content = `
                <div class="section shipping">
                    <h2>Shipping Policy</h2>
                    <p>We offer fast and reliable shipping on all orders. Orders are processed within 2-3 business days.</p>
                    <p>Shipping costs will be calculated at checkout based on your location.</p>
                </div>
            `;
            break;

        case 'contact':
            content = `
                <div class="section contact">
                    <h2>Contact Us</h2>
                    <p>If you have any questions or concerns, please reach out to us:</p>
                    <p>Email: <a href="mailto:support@beadcharm.com">support@beadcharm.com</a></p>
                    <p>Phone: +123456789</p>
                    <p>Address: 123 Bead Charm Lane, Beadsville, CA 90210</p>
                </div>
            `;
            break;

        case 'privacy':
            content = `
                <div class="section privacy">
                    <h2>Privacy Policy</h2>
                    <p>Your privacy is important to us. We collect personal information to enhance your shopping experience.</p>
                    <p>We will never share your information with third parties without your consent.</p>
                </div>
            `;
            break;

        case 'refund':
            content = `
                <div class="section refund">
                    <h2>Return and Refund Policy</h2>
                    <p>We accept returns within 30 days of purchase. Items must be unused and in their original packaging.</p>
                    <p>If you receive a defective product, please contact us for a refund or exchange.</p>
                </div>
            `;
            break;

    }

    contentPlaceholder.innerHTML = content;

    // Optionally, you can add styles dynamically if needed
    applyStyles();
}

// Function to apply additional styles or effects if necessary
function applyStyles() {
    // You can add any additional JavaScript code here if needed to enhance styles
    // For example, you can add animations or further customize the styles
}