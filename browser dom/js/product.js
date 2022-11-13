const getInputValueById = id => {
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    inputField.value = '';
    return inputFieldValue;
}


const addProduct = () => {

    const product = getInputValueById('product-field');
    const quantity = getInputValueById('quantity-field');
    // display in browser UI

    addProductToDisplay(product, quantity)

    //add to LocalStorage
    // localStorage.setItem(product, quantity);
    saveItemToLocalStorage(product, quantity)
}

const getShoppingCartFromLocalStorage = () => {
    let cart = {};
    let saveCart = localStorage.getItem('cart');
    if (saveCart) {
        cart = JSON.parse(saveCart);
    }
    return cart;
}


const saveItemToLocalStorage = (product, quantity) => {
    const cart = getShoppingCartFromLocalStorage();
    cart[product] = quantity;

    const stringfied = JSON.stringify(cart);
    localStorage.setItem('cart', stringfied);
}


// display product in browser UI

const addProductToDisplay = (product, quantity) => {
    const ul = document.getElementById('prduct-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;
    ul.appendChild(li);
}

const displayStoredProducts = () => {
    const cart = getShoppingCartFromLocalStorage();
    for (const product in cart) {
        const quantity = cart[product];
        console.log(product, quantity)
        addProductToDisplay(product, quantity);
    }
}

displayStoredProducts()





