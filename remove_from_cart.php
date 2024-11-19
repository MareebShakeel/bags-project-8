<?php
session_start();
require_once 'backend/config/DatabaseCart.php';
require_once 'backend/Cart.php';

header('Content-Type: application/json');

// Check if the user is logged in
if (!isset($_SESSION['user_id'])) {
    echo json_encode(['success' => false]);
    exit();
}

$userId = $_SESSION['user_id'];  // Get user ID from session

// Check if product ID is provided
if (isset($_GET['product_id'])) {
    $productId = $_GET['product_id'];

    // Create a cart instance
    $cart = new Cart();

    // Remove the product from the cart
    $success = $cart->removeFromCart($userId, $productId);

    // Return success status as JSON
    echo json_encode(['success' => $success]);
} else {
    echo json_encode(['success' => false]);
}
?>
