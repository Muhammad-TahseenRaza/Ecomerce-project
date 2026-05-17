import { getCartProductFromLS } from "./05.getCartProducts";

export function updateCartProductTotal(){

    let productSubTotal = document.querySelector('.productSubTotal');
    let productFinalTotal = document.querySelector('.productFinalTotal');

    let cartProducts = getCartProductFromLS();

    let totalProductPrice = cartProducts.reduce((accum, curProd, index, arr)=>{
        let productPrice = curProd.price || 0;
        
        let result =  Number((accum + productPrice).toFixed(2));
        return result;

    }, 0);

    productSubTotal.innerText = `Rs ${totalProductPrice}`;
    productFinalTotal.innerText = `Rs ${totalProductPrice + 50}`;

}