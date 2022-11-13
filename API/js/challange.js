const loadComment = () => {
    const url = `https://jsonplaceholder.typicode.com/comments`;
    fetch(url)
        .then(res => res.json())
        .then(comments => displayComments(comments.slice(0, 20)))
}

const displayComments = (users) => {
    const post = document.getElementById('post-section');
    for (const user of users) {
        const postDiv = document.createElement('div');
        postDiv.innerHTML = `
            <h4 onclick="loadPost(${user.id})">${user.name}</h4>
            `
        post.appendChild(postDiv);
    }
}

const loadPost = (posts) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${posts}`;

    fetch(url)
        .then(res => res.json())
        .then(datas => detailPost(datas))
}

const detailPost = (data) => {
    console.log(data)
    const detailPost = document.getElementById('load-data');
    const loadData = document.createElement('div');
    loadData.innerHTML = `
        <h2>${data.userId}</h2>
        <h2>${data.id}</h2>
        <p>${data.body}</p>
        `
    detailPost.appendChild(loadData);

}


loadComment()