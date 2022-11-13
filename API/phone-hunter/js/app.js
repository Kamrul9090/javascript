const loedPhone = async (inputText, dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhone(data.data, dataLimit)
}

const displayPhone = (phones, dataLimit) => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = ``;

    // display phone only 10;

    const showAll = document.getElementById('show-all');

    if (dataLimit && phones.length > 10) {
        phones = phones.slice(0, 10);
        showAll.classList.remove('d-none');
    } else {
        showAll.classList.add('d-none')
    }


    //Display no phone found
    const noPhone = document.getElementById('no-phone');

    if (phones.length === 0) {
        noPhone.classList.remove('d-none')
    } else {
        noPhone.classList.add('d-none');
    }



    // Display All Phone
    phones.forEach(phone => {
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
        `
        phoneContainer.appendChild(phoneDiv)
    })
    spinners(false)
}

// ProcessSearch

const processSearch = (dataLimit) => {
    spinners(true)
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    loedPhone(inputText, dataLimit);
}


// search phone

document.getElementById('btn-search').addEventListener('click', function () {
    processSearch(10)
})


// search input field enter

document.getElementById('input-field').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        processSearch(10)
    }

})


// Loading spinners

const spinners = isLoading => {
    const loader = document.getElementById('loader');
    if (isLoading) {
        loader.classList.remove('d-none')
    }
    else {
        loader.classList.add('d-none')
    }
}


//Not the best way to load show all

document.getElementById('btn-show-all').addEventListener('click', function () {
    processSearch()

})


// 

const loadPhoneDetails = async (id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`

    const res = await fetch(url);
    const data = await res.json();
    displayPhoneDetails(data.data);
}


const displayPhoneDetails = phone => {
    console.log(phone)
    const phoneTitle = document.getElementById('phoneDetailModalLabel');
    phoneTitle.innerText = phone.name;
    const phoneDetails = document.getElementById('phoneDetail');

    phoneDetails.innerHTML = `
        <p>${phone.others ? phone.others.Bluetooth : "No Bluethooth"}</p>
        <p>${phone.others ? phone.others.Radio : "yes"}</p>
    `;
}



loedPhone('apple')




