const loadPhotos = async () => {
    const url = `https://jsonplaceholder.typicode.com/photos`;
    const res = await fetch(url);
    const photos = await res.json();
    displayPhotos(photos.slice(0, 20));
}


const displayPhotos = (photos) => {
    const photosContainer = document.getElementById('photo-container');

    photos.forEach(photo => {
        const photoDiv = document.createElement('div');
        photoDiv.classList.add('col');
        photoDiv.innerHTML = `
        <div class="card">
            <img src="${photo.thumbnailUrl}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${photo.title}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                <button onclick="phoneDetails(${photo.id})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Details
            </button>
            </div>
        </div>
        `
        photosContainer.appendChild(photoDiv)
    })
}


const phoneDetails = async (id) => {
    const url = `https://jsonplaceholder.typicode.com/albums/${id}`
    const res = await fetch(url);
    const datas = await res.json();

    displayPhotosDetails(datas);
}

const displayPhotosDetails = (data) => {
    console.log(data)
    const detail = document.getElementById('modal-detail');
    const exampleModalLabel = document.getElementById('exampleModalLabel');
    exampleModalLabel.innerHTML = `
    <h2>${data.title}</h2>
    `
    detail.innerHTML = `
    <h3>${data.id}</h3>
    `
}


loadPhotos()