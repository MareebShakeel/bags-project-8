<?php
require_once 'backend/Cart.php'; // Include the Cart class

class CartFactory {

    // Factory method to create Cart instances
    public static function createCart() {
        // Here we can later add logic to determine what type of cart to create (if there are variations)
        return new Cart(); // Returning an instance of Cart
    }
}
?>
