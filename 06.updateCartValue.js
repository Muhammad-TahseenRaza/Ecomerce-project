const cartValue = document.querySelector('#cartValue');

export function updateCartValue(cartProducts){

    cartValue.innerHTML = `<i class="fa-solid fa-cart-shopping"> ${cartProducts.length} </i>`;

}