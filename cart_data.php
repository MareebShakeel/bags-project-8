<?php
// Include necessary files
require_once '../config/DatabaseCart.php'; // Cart-specific database connection
require_once '../backend/Cart.php';       // Cart business logic

// Start session for user identification (assuming user login exists)
session_start();

// Get the user ID from the session
if (!isset($_SESSION['user_id'])) {
    echo json_encode(['error' => 'User not logged in']);
    exit;
}
$userId = $_SESSION['user_id'];

// Get the request method (POST for adding, DELETE for removing, GET for fetching)
$method = $_SERVER['REQUEST_METHOD'];

try {
    $cart = new Cart();

    if ($method === 'POST') {
        // Add to cart (expects product_id and quantity in POST data)
        $productId = $_POST['product_id'] ?? null;
        $quantity = $_POST['quantity'] ?? null;

        if (!$productId || !$quantity) {
            echo json_encode(['error' => 'Invalid input']);
            exit;
        }

        $result = $cart->addToCart($userId, $productId, $quantity);

        if ($result) {
            echo json_encode(['success' => 'Product added to cart']);
        } else {
            echo json_encode(['error' => 'Failed to add product to cart']);
        }
    } elseif ($method === 'DELETE') {
        // Remove from cart (expects product_id in query params)
        parse_str(file_get_contents("php://input"), $deleteData);
        $productId = $deleteData['product_id'] ?? null;

        if (!$productId) {
            echo json_encode(['error' => 'Invalid input']);
            exit;
        }

        $result = $cart->removeFromCart($userId, $productId);

        if ($result) {
            echo json_encode(['success' => 'Product removed from cart']);
        } else {
            echo json_encode(['error' => 'Failed to remove product from cart']);
        }
    } elseif ($method === 'GET') {
        // Get cart items
        $cartItems = $cart->getCartItems($userId);

        echo json_encode($cartItems);
    } else {
        echo json_encode(['error' => 'Invalid request method']);
    }
} catch (Exception $e) {
    echo json_encode(['error' => $e->getMessage()]);
}
?>
