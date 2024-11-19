<?php
require_once 'config/Database.php';

use Config\Database;

try {
    $db = Database::getInstance();
    $stmt = $db->query("SELECT * FROM users");
    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo "<pre>";
    print_r($users);  // Output user data for testing purposes
    echo "</pre>";
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}
