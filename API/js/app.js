function dataLoad() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
        .then(res => res.json())
        .then(json => console.log(json))
}

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(json => displayData(json))
}

function displayData(data) {
    console.log(data[3].address.city)
    console.log(data[3].address.geo.lat)
}
