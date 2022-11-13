const loodMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {
    const mealsContainer = document.getElementById('meal-container');
    mealsContainer.innerHTML = ``;
    meals.forEach(meal => {
        console.log(meal)
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div onclick="loadMealDetails(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 200)}.</p>
            </div>
         </div>
        `
        mealsContainer.appendChild(mealDiv)
    });
}


const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const value = searchField.value;
    searchField.value = '';
    loodMeals(value)
}


const loadMealDetails = (id) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealsDetails(data))
}


const displayMealsDetails = (data) => {
    console.log(data)
    const mealDetail = document.getElementById('meal-detail');
    mealDetail.innerHTML = ``;
    const card = document.createElement('div');
    card.innerHTML = `
    <img src="${data.meals[0].strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${data.meals[0].strMeal}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
            card's content.</p>
    </div>
    `
    mealDetail.appendChild(card)
}

loodMeals('')







