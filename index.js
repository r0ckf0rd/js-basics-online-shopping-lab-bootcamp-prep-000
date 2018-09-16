var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var cartCount = cart.length
  cart[cartCount] = {itemName: `${item}`, itemPrice: Math.floor(Math.random()*100) }
 return `${item} has been added to your cart.`
}



function viewCart() {
  var inYourCart = "In your cart, you have"
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  if (cart.length === 1) {
    return `${inYourCart} ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  if (cart.length > 1) {
    for (var i = 0; i < cart.length; i++) {
      if (i === (cart.length - 1)) {
        inYourCart = `${inYourCart}, and ${cart[i].itemName} at $${cart[i].itemPrice}.`
      }
      else {
        inYourCart = `${inYourCart} ${cart[i].itemName} at $${cart[i].itemPrice}, `
      }
      
      
    }
 
    return inYourCart 
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
