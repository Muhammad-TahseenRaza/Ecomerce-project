import { getCartProductFromLS } from "./05.getCartProducts.js";
import { fetchQuantityFromCartLS } from "./08.fetchQuantityFromCartLS.js";
import { removeProdFromCart } from "./09.removeProdFromCart.js";
import { incrementDecrement } from "./10.incrementDecrement.js";
import { updateCartProductTotal } from "./11.updateCartProductTotal.js";
import products from "./api/products.json"


let cartProducts = getCartProductFromLS();

let cartIds = cartProducts.map(p => p.id);

let filterProducts = products.filter(p => cartIds.includes(p.id));


const cartElement = document.querySelector('#productCartContainer');
const templateContainer = document.querySelector('#productCartTemplate');

function showCartProducts(){

    filterProducts.forEach((curProd)=>{

        const { category, id, image, name, stock, price } = curProd;

        let productClone = document.importNode(templateContainer.content, true);

        const LSActualData = fetchQuantityFromCartLS(id, price);

        productClone.querySelector('#cardValue').setAttribute('id', `card${id}`)

        productClone.querySelector('.category').textContent = category;
        productClone.querySelector('.productImage').src = image;
        productClone.querySelector('.productName').textContent = name;

        productClone.querySelector('.productPrice').textContent = LSActualData.price;
        productClone.querySelector('.productQuantity').textContent = LSActualData.quantity;

        productClone.querySelector('.remove-to-cart-button').addEventListener('click', ()=>{
            removeProdFromCart(id);
        })

        productClone.querySelector('.stockElement').addEventListener('click', (event)=>{
            incrementDecrement(id, stock, price, event);
        })

        cartElement.append(productClone);

    })

}

showCartProducts();

updateCartProductTotal();