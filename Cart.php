<?php
require_once 'backend/config/DatabaseCart.php'; // Include the cart-specific database connection

class Cart {
    private $conn;

    public function __construct() {
        $this->conn = DatabaseCart::getConnection(); // Use DatabaseCart for cart connection
    }

    // Add a product to the cart
    public function addToCart($userId, $productId, $quantity) {
        $sql = "INSERT INTO cart_items (user_id, product_id, quantity) 
                VALUES (:user_id, :product_id, :quantity)
                ON DUPLICATE KEY UPDATE quantity = quantity + :quantity";
        
        $stmt = $this->conn->prepare($sql);
        $stmt->bindParam(':user_id', $userId);
        $stmt->bindParam(':product_id', $productId);
        $stmt->bindParam(':quantity', $quantity);

        return $stmt->execute();
    }

    // Remove a product from the cart
    public function removeFromCart($userId, $productId) {
        $sql = "DELETE FROM cart_items WHERE user_id = :user_id AND product_id = :product_id";
        
        $stmt = $this->conn->prepare($sql);
        $stmt->bindParam(':user_id', $userId);
        $stmt->bindParam(':product_id', $productId);
        
        return $stmt->execute();
    }

    // Get the cart items for a user
    public function getCartItems($userId) {
        $sql = "SELECT ci.*, p.name, p.price FROM cart_items ci
                JOIN products p ON ci.product_id = p.id
                WHERE ci.user_id = :user_id";
        
        $stmt = $this->conn->prepare($sql);
        $stmt->bindParam(':user_id', $userId);
        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_ASSOC); // Fetch all cart items
    }
}
?>
