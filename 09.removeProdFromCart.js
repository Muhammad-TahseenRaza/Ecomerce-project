import { getCartProductFromLS } from "./05.getCartProducts";
import { updateCartValue } from "./06.updateCartValue";
import { updateCartProductTotal } from "./11.updateCartProductTotal";
import { showToast } from "./12.showToast";

export function removeProdFromCart(id){

    let cartProducts = getCartProductFromLS();

    cartProducts = cartProducts.filter((curProd)=> curProd.id !== id);

    localStorage.setItem('cartProductLS', JSON.stringify(cartProducts));

    let removeDiv = document.getElementById(`card${id}`);

    removeDiv.remove();

    updateCartValue(cartProducts);

    showToast('delete', id);

    updateCartProductTotal();

}