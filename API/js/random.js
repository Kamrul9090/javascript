const loadUsers = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(datas => displayUsers(datas.results))
}

const displayUsers = users => {
    const userContainer = document.getElementById('user-container');
    for (const data of users) {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        console.log(data)
        userDiv.innerHTML = `
            <h3>${data.name.title} ${data.name.first} ${data.name.last}</h3>
            <p>${data.email}</p>
            <p>${data.location.city}</p>
            <img src="${data.picture.thumbnail}">
        `
        userContainer.appendChild(userDiv);
    }
}


loadUsers()