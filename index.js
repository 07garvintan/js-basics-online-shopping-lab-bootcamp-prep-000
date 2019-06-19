var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var itemNew = {itemName:`${item}`, itemPrice: Math.floor(Math.random()*100)};
 cart.push(itemNew);
 return `${itemNew.itemName} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else if (cart.length===1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else if (cart.length===2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  } else if (cart.length >= 3) {
     var str = "In your cart, you have "
     for (i = 0; i < cart.length - 2; i+=1) {
       str.push(`${cart[i].itemName} at $${cart[i].item{Price})
       
     }
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
