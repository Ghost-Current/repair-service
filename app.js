let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(id, name, price) {
  let item = cart.find(p => p.id == id);
  if(item) item.qty++;
  else cart.push({id, name, price, qty:1});
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  alert(name + ' added to cart');
}

function updateCartCount() {
  let count = cart.reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll('.cart-count').forEach(el => el.textContent = count);
}

updateCartCount();
