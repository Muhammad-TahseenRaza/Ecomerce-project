import { homeQuantityToggle } from "./03.homeQuantityToggle.js";
import { addToCart } from "./04.addToCart.js";

const productContainer = document.querySelector('#productContainer');
const productTemplate = document.querySelector('#productTemplate');

export function showProductContainer(products){

    if(!products){
        return false;
    }

    products.forEach((curProd, index)=>{

        const { id, name, category, brand, price, stock, description, image } = curProd;

        const productClone = document.importNode(productTemplate.content, true);

        
        productClone.querySelector('#cardValue').setAttribute('id', `card${id}`);

        productClone.querySelector('.productName').textContent = name;
        productClone.querySelector('.category').textContent = category;
        productClone.querySelector('.productImage').src = image;
        productClone.querySelector('.productImage').alt = brand;
        productClone.querySelector('.productDescription').textContent = description;
        productClone.querySelector('.productPrice').textContent = `Rs ${price}`;
        productClone.querySelector('.productActualPrice').textContent = `Rs ${price * 4}`;
        productClone.querySelector('.productStock').textContent = stock;

        productClone.querySelector('.stockElement').addEventListener('click', (event)=> {
            homeQuantityToggle(event, id, stock);
        })

        productClone.querySelector('.add-to-cart-button').addEventListener('click', (event)=>{
            addToCart(event, id, stock);
        })

        productContainer.append(productClone);

    })

}