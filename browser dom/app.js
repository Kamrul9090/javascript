const askSomething = () => {
    const dicision = confirm('do you coming?');

    if (dicision === true) {
        console.log('thanks')
    } else {
        console.log('dure giya mor')
    }
}

const getUserInfo = () => {
    const name = prompt("tell us yor name");
    if (!!name) {
        console.log('Welcome here', name);
    }
}

const getCookiesByName = name => {
    cookieString = document.cookie;
    const cookiesParts = cookieString.split(', ');
    const cookie = cookiesParts.find(c => c.includes(name));
    if (cookie) {
        const cookieVakue = cookie.split('=')[1];
        return cookieVakue;

    }
}