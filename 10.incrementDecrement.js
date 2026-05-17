import { getCartProductFromLS } from "./05.getCartProducts";
import { updateCartProductTotal } from "./11.updateCartProductTotal";

export function incrementDecrement(id, stock, price, event){

    const currentProdElement = document.querySelector(`#card${id}`);

    const productQuantity = currentProdElement.querySelector('.productQuantity');
    const productPrice = currentProdElement.querySelector('.productPrice');

    let quantity = 1;
    let localStoragePrice = 0;

    let cartProducts = getCartProductFromLS();

    let existingProd = cartProducts.find((curProd)=> curProd.id === id);

    if(existingProd){
        quantity = existingProd.quantity;
        localStoragePrice = existingProd.price;
    }else{
        localStoragePrice = price;

        price = price;
    }

    if(event.target.className === 'cartIncrement'){
        if(quantity < stock){
            quantity++;
        }else if(quantity === stock){
            quantity = stock;
            localStoragePrice = price * stock;
        }
    }

    if(event.target.className === 'cartDecrement'){
        if(quantity > 1){
            quantity--;
        }
    }

    localStoragePrice = Number((price * quantity).toFixed(2));

    let updatedCart = { id, quantity, price: localStoragePrice };

    updatedCart = cartProducts.map((curProd)=>{
        return curProd.id === id ? updatedCart : curProd;
    })

    localStorage.setItem('cartProductLS', JSON.stringify(updatedCart));

    productQuantity.innerText = quantity;
    productPrice.innerText = localStoragePrice;

    updateCartProductTotal();

}