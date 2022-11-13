const getInputValueById = id => {
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    // inputField.value = '';
    return inputFieldValue;
}

// Send Name

const sendName = () => {
    const nameValue = getInputValueById('name-field');
    localStorage.setItem('Name', nameValue)
}

// Send email

const sendEmail = () => {
    const emailValue = getInputValueById('email-field');
    localStorage.setItem("Email", emailValue)
}

// Send message

const sendMessage = () => {
    const messageValue = getInputValueById('message-field');
    localStorage.setItem('Message', messageValue);
}

// delete Name
const deleteName = () => {
    localStorage.removeItem('Name')
}

// delete email
const deleteEmail = () => {
    localStorage.removeItem('Email')
}

// delete Message
const deleteMessage = () => {
    localStorage.removeItem('Message')
}

// Reset all

const resetAll = () => {
    localStorage.clear()
}

// Send All a object


const sendAll = () => {
    const name = getInputValueById('name-field');
    const email = getInputValueById('email-field');
    const message = getInputValueById('message-field');
    saveItemToLocalStorage(name, email, message)
}

const getShoppingCartFromLocalStorage = () => {
    let cart = {};
    const saveCart = localStorage.getItem('cart');
    if (saveCart) {
        cart = JSON.parse(saveCart);
    }
    return cart;
}

const saveItemToLocalStorage = (name, email, message) => {
    const cart = getShoppingCartFromLocalStorage();
    const myName = 'name';
    const myEmail = 'email';
    const myMessage = 'message';
    cart[myName] = name;
    cart[myEmail] = email;
    cart[myMessage] = message;
    const string = JSON.stringify(cart)
    localStorage.setItem('cart', string)
}


const displayCartValue = () => {
    const cart = getShoppingCartFromLocalStorage();
    for (const item in cart) {
        const value = cart[item]
        console.log(item, value)
    }
}

displayCartValue()