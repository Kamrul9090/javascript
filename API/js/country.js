loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(countries => displayCountries(countries));
};

displayCountries = countries => {

    const countryContainer = document.getElementById('country-container');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
            <h3>Name: ${country.name.common}</h3>
            <p>Capital: ${country.capital ? country.capital.length : 'No capital'}</p>
            <img src="${country.flags.png}">
            <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
        `
        countryContainer.appendChild(div);
    })
}


const loadCountryDetails = (code) => {
    console.log(code)
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDitail(data[0]))
}


const displayCountryDitail = (data) => {
    console.log(data)
    const detailCountry = document.getElementById('detail-country');
    detailCountry.innerHTML = `
        <h2>${data.name.common}</h2>
    `
}

loadCountries()