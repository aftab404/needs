'use client'

const cart: Product[] = JSON.parse(localStorage.getItem("cart")!);

export function addToCart(item: Product) {
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function getCart(): Product[] {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
}

export function clearCart() {
    
  localStorage.removeItem("cart");
}

export function removeItem(id : number){
    const newCart = cart.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(newCart));
}
