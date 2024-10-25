// Sample items from the shop
const shopItems = {
    dal: 101.12,
    biscuits: 110.0,
    "cool drinks": 40.0,
    chocolates: 11.0,
    rice: 2220.0,
    groceries: 1199.0
  };
  
  // Variables for cart and total price
  let cart = [];
  let totalPrice = 0.0;
  
  // Function to display items in the shop
  function displayShopItems() {
    const itemList = document.getElementById('item-list');
    for (let item in shopItems) {
      const listItem = document.createElement('li');
      listItem.textContent = `${item} - $${shopItems[item].toFixed(2)}`;
      
      // Add button to add item to the cart
      const addButton = document.createElement('button');
      addButton.textContent = "Add to Cart";
      addButton.onclick = () => addToCart(item);
      
      listItem.appendChild(addButton);
      itemList.appendChild(listItem);
    }
  }
  
  // Function to add items to the cart and update total price
  function addToCart(item) {
    cart.push(item);
    totalPrice += shopItems[item];
    updateCartDisplay();
  }
  
  // Function to update the cart display
  function updateCartDisplay() {
    const cartList = document.getElementById('cart-list');
    const totalDisplay = document.getElementById('total-price');
    
    // Clear cart display
    cartList.innerHTML = "";
    
    // Display each item in the cart
    cart.forEach(cartItem => {
      const cartItemElement = document.createElement('li');
      cartItemElement.textContent = cartItem;
      cartList.appendChild(cartItemElement);
    });
    
    // Update total price
    totalDisplay.textContent = totalPrice.toFixed(2);
  }
  
  // Initial setup
  displayShopItems();