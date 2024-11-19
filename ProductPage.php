<?php
// Include necessary files
require_once 'config/Database.php';
require_once 'config/DatabaseCart.php';
require_once 'Cart.php';

// Assuming we are displaying a single product's details
$productId = $_GET['product_id']; // Get product ID from URL
$product = getProductDetails($productId); // Fetch product details from database (see below)

function getProductDetails($productId) {
    $conn = DatabaseCart::getConnection();
    $stmt = $conn->prepare("SELECT * FROM products WHERE id = :product_id");
    $stmt->bindParam(':product_id', $productId);
    $stmt->execute();
    return $stmt->fetch(PDO::FETCH_ASSOC);
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title><?php echo $product['name']; ?></title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

<h1><?php echo $product['name']; ?></h1>
<p><?php echo $product['description']; ?></p>
<p>Price: $<?php echo $product['price']; ?></p>

<form action="product_page.php" method="POST">
    <input type="hidden" name="product_id" value="<?php echo $product['id']; ?>">
    <input type="number" name="quantity" value="1" min="1">
    <button type="submit" name="add_to_cart">Add to Cart</button>
</form>

</body>
</html>

<?php
if (isset($_POST['add_to_cart'])) {
    session_start();
    $userId = $_SESSION['user_id']; // Get user ID from session
    $quantity = $_POST['quantity'];
    $cart = new Cart();
    $cart->addToCart($userId, $_POST['product_id'], $quantity);
}
?>
