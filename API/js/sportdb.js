const loadLeauge = () => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/search_all_leagues.php?c=England`;
    fetch(url)
        .then(res => res.json())
        .then(leauges => displayLeauge(leauges.countries.slice(0, 10)))
}


const displayLeauge = (leauges) => {
    const leaugeContainer = document.getElementById('leauge-container');
    leaugeContainer.innerHTML = ``;
    leauges.forEach(leauge => {
        const div = document.createElement('div');
        div.classList.add('border-2')
        div.classList.add('border-indigo-500')
        div.classList.add('p-2')
        div.innerHTML = `
                <img src="${leauge.strBadge}">
                <button onclick="loadDetail(${leauge.idLeague})" class="bg-blue-900 text-white p-2 font-bold rounded">Details</button>
        `
        leaugeContainer.appendChild(div);
    })
}

const loadDetail = details => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/search_all_leagues.php?c=England&id=${details}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data.countries.slice(0, 1)))
}

const displayDetails = (element) => {
    console.log(element)
    const card = document.getElementById('card');
    card.innerHTML = ``;
    const div = document.createElement('div');
    div.innerHTML = `
        <h3>intDivision: ${element[0].intDivision}</h3>
        <p>Id: ${element[0].idLeague}</p>
        <h6>intFormedYear: ${element[0].intFormedYear}</h6>
    `
    card.appendChild(div)

}

loadLeauge()