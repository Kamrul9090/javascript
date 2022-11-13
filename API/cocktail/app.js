const loadDrinks = async (searchText, dataLimit) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`;
    const res = await fetch(url);
    const drinks = await res.json();
    displayDrinks(drinks.drinks, dataLimit);
}

const displayDrinks = (drinks, dataLimit) => {


    // display only 10
    const showAll = document.getElementById('show-all-btn');
    if (dataLimit && drinks.length > 10) {
        drinks = drinks.slice(0, 10)
        showAll.classList.remove('d-none');
    } else {
        showAll.classList.add('d-none');
    }
    console.log(drinks);
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = ``;
    drinks.forEach(drink => {
        const drinkDiv = document.createElement('div');
        drinkDiv.classList.add('col');
        drinkDiv.innerHTML = `
        <div onclick="drinkDetails('${drink.idDrink}')" class="card h-100">
            <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${drink.strDrink}</h5>
            <p class="card-text">${drink.strInstructions.slice(0, 100)}.</p>
            </div>
        </div>
        `
        cardContainer.appendChild(drinkDiv);
    })
}



// Display Drinks Details


const drinkDetails = async (id) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

    const res = await fetch(url);
    const datas = await res.json();

    displayDrinksDetails(datas.drinks);
}


const displayDrinksDetails = (drinks) => {
    const cardDetails = document.getElementById('card-details');
    cardDetails.innerHTML = ``;
    cardDetails.innerHTML = `
    <div class="card">
    <img src="${drinks[0].strDrinkThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${drinks[0].strDrink}</h5>
      <p class="card-text">${drinks[0].strInstructions.slice(0, 100)}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${drinks[0].strIngredient1}</li>
      <li class="list-group-item">${drinks[0].strIngredient2}</li>
      <li class="list-group-item">${drinks[0].strIngredient3 ? drinks[0].strIngredient3 : 'not found'}</li>
      <li class="list-group-item">${drinks[0].strIngredient4 ? drinks[0].strIngredient4 : "not found"}</li>
    </ul>
  </div>
    `
}





// create a function for searching

const searchProcess = (dataLimit) => {
    const inputField = document.getElementById('search-field');
    const searchValue = inputField.value;
    loadDrinks(searchValue, dataLimit);
    console.log(searchValue, dataLimit);
}

// Search Drinks using search button

document.getElementById('search-button').addEventListener('click', function () {
    searchProcess(10)
})


// Search Drinks using search field

document.getElementById('search-field').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        searchProcess(10)
    }
})



// show all button 

document.getElementById('show-all-btn').addEventListener('click', function () {
    searchProcess();
})



loadDrinks('')