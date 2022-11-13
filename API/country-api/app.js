const loadCountries = async (searchText) => {
    const url = `https://restcountries.com/v3.1/name/${searchText}`;
    const res = await fetch(url);
    const countries = await res.json();
    displayCountries(countries);
}

const displayCountries = countries => {
    processData(true)
    countries.forEach(country => {
        console.log(country)
        const countryCard = document.getElementById('country-card');
        console.log(country.altSpellings[0]);
        const description = country.altSpellings;
        let about = ''
        for (const string of description) {
            about += string + ' ';
        }
        console.log(about)
        countryCard.innerHTML = `
            <div class="card" style="width: 18rem;">
                <img src="${country.flags.png}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${country.name.common}</h5>
                    <p class="card-text">${about}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Language: ${country.status}</li>
                    <li class="list-group-item">Area: ${country.area}</li>
                    <li class="list-group-item">Capital: ${country.capital[0]}</li>
                </ul>
            </div>
        `

    })
    processData(false)
}


// search Countries

const searchCountry = () => {
    const searchField = document.getElementById('search-field');
    const searchFieldValue = searchField.value;
    loadCountries(searchFieldValue);
    console.log(searchFieldValue)
}

// search button 

document.getElementById('search-button').addEventListener('click', function () {
    searchCountry()
    processData(true);
})

// Loading spinners

const processData = isLoding => {
    const loading = document.getElementById('loading');
    if (isLoding) {
        loading.classList.remove('d-none');
    } else {
        loading.classList.add('d-none');
    }
}




loadCountries('Bangladesh');