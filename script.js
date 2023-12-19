let cart = [];
let total = 0;

function addToCart() {
    const product = {
        name: "Product Name",
        price: 19.99
    };

    cart.push(product);
    total += product.price;

    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    // Clear existing cart items
    cartItems.innerHTML = "";

    // Populate cart items
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });

    // Update total
    cartTotal.textContent = total.toFixed(2);
}

function viewCart() {
    alert("Cart Items: " + JSON.stringify(cart) + "\nTotal: $" + total.toFixed(2));
}
