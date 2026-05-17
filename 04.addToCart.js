import { getCartProductFromLS } from "./05.getCartProducts.js";
import { updateCartValue } from "./06.updateCartValue.js";
import { showToast } from "./12.showToast.js";


getCartProductFromLS()

export function addToCart(event, id, stock) {

    let arrLocalStorageProd = getCartProductFromLS();

    const currentProdElem = document.querySelector(`#card${id}`);
    console.log(currentProdElem);

    let quantity = currentProdElem.querySelector('.productQuantity').innerText;
    let price = currentProdElem.querySelector('.productPrice').innerText.slice(3);

    // console.log(quantity, price);

    price = price.replace('Rs ', '');

    price = Number(price * quantity);
    price = Number(price.toFixed(2));

    quantity = Number(quantity);

    let existingProd = arrLocalStorageProd.find((curProd) => curProd.id === id);

    if (existingProd) {
        existingProd.quantity = existingProd.quantity + quantity;
        existingProd.price = Number((existingProd.price + price).toFixed(2));
    } else {
        let updatedCart = { id, quantity, price };
        arrLocalStorageProd.push(updatedCart);
        showToast('add', id)
    }

    localStorage.setItem('cartProductLS', JSON.stringify(arrLocalStorageProd));


    updateCartValue(arrLocalStorageProd);

}