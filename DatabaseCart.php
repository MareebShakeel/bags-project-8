<?php
require_once '../config/Database.php'; // Correct path to Database.php

class DatabaseCart {
    private static $conn = null;

    // Prevent direct instantiation
    private function __construct() {}

    // Get the database connection for the cart system
    public static function getConnection() {
        if (self::$conn === null) {
            try {
                // Use the full namespace path when calling getInstance()
                self::$conn = \Config\Database::getInstance();
            } catch (PDOException $e) {
                echo "Cart Database connection failed: " . $e->getMessage();
            }
        }
        return self::$conn;
    }
}
?>

