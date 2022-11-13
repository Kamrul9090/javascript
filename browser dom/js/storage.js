document.getElementById('add-name').addEventListener('click', function () {
    const nameField = document.getElementById('name-field');
    const nameValue = nameField.value;

    localStorage.setItem('name', nameValue);

})

document.getElementById('add-age').addEventListener('click', function () {
    const ageField = document.getElementById('age-field');
    const ageFieldValue = ageField.value;

    localStorage.setItem('age', ageFieldValue);
})

document.getElementById('remove-name').addEventListener('click', function () {
    localStorage.removeItem('name')
})

document.getElementById('remove-age').addEventListener('click', function () {
    localStorage.removeItem('age');
})


document.getElementById('clear-all').addEventListener('click', function () {
    localStorage.clear();
})