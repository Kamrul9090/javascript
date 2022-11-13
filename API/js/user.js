const loadUser = () => {
    const url = `https://randomuser.me/api/?gender=female`;

    fetch(url)
        .then(res => res.json())
        .then(users => displayUser(users))
        .catch(error => console.log(error))
}

const displayUser = (users) => {
    console.log(users.results[0])
}

// loadUser()


const loadAsnce = async () => {
    const url = `https://randomuser.me/api/?gender=female`;
    try {
        const res = await fetch(url);
        const user = await res.json();
        displayAsynce(user.results)
    } catch (error) {
        console.log(error)
    }
    finally {
        console.log("this is filnaly")
    }
}


const displayAsynce = (user) => {
    console.log(user[0].gender)
}

loadAsnce()