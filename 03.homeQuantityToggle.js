export function homeQuantityToggle(event, id, stock){

    const currentCardElem = document.querySelector(`#card${id}`);
    const productQuantity = currentCardElem.querySelector('.productQuantity');

    let quantity = parseInt(productQuantity.getAttribute('data-quantity')) || 1;

    if(event.target.className === 'cartIncrement'){
        if(quantity < stock){
            quantity++;
        }else if(quantity === stock){
            quantity = stock;
        }
    }

    if(event.target.className === 'cartDecrement'){
        if(quantity > 1){
            quantity--;
        }
    }

    productQuantity.innerText = quantity;
    
    productQuantity.setAttribute('data-quantity', quantity);

    return quantity;
}