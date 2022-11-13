const loadPhones = async (searchText, dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const phones = await res.json();
    displayPhones(phones.data, dataLimit);
}

// display Phones form phones array

const displayPhones = (phones, dataLimit) => {
    console.log(phones)


    // display no Phone found
    const noPhone = document.getElementById('no-phone');

    // Display Show all
    const showAll = document.getElementById('show-all')
    if (dataLimit && phones.length > 10) {
        phones = phones.slice(0, 10);
        showAll.classList.remove('d-none')
    } else {
        showAll.classList.add('d-none');
    }


    if (phones.length === 0) {
        noPhone.classList.remove('d-none')
    } else {
        noPhone.classList.add('d-none')
    }


    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.innerHTML = '';



    phones.forEach(phone => {
        console.log(phone)
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div class="card">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit longer.</p>
                <button onclick="loadPhoneDetails('${phone.slug}')" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailModal">Show Details</button>
            </div>
        </div>
        `
        phoneContainer.appendChild(phoneDiv);
    })
    spinners(false)
}




// search mobile using input and btn

const processSearch = (dataLimit) => {
    spinners(true);
    const inputField = document.getElementById('input-field');
    const searchText = inputField.value;
    return loadPhones(searchText, dataLimit);
}

document.getElementById('btn-search').addEventListener('click', function () {
    processSearch(10)
})


//Press enter to get search value

document.getElementById('input-field').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        processSearch(10)
    }
})


// Spinners

const spinners = isLoading => {
    const loader = document.getElementById('loader');
    if (isLoading) {
        loader.classList.remove('d-none')
    }
    else {
        loader.classList.add('d-none')
    }
}


document.getElementById('btn-show-all').addEventListener('click', function () {
    processSearch()
    console.log('jskdfjkb')
})




const loadPhoneDetails = async (id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    const res = await fetch(url);
    const datas = await res.json();
    displayPhoneDetails(datas.data);
}








const displayPhoneDetails = (datas) => {
    const phonetitle = document.getElementById('phoneDetailModalLabel');
    phonetitle.innerText = datas.name;

    const phoneDetails = document.getElementById('phoneDetail');
    phoneDetails.innerHTML = `
        <p>${datas.others ? datas.others.Bluetooth : "no Bluetooth"}</p>
    `
}



// loadPhones('apple')
