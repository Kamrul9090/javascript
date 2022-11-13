function loadPost() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
        .then(res => res.json())
        .then(posts => displayPost(posts))
}

loadPost()

function displayPost(posts) {
    const postDiv = document.getElementById('postContainer');
    for (const post of posts) {
        console.log(post)
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
            <h4>userId: ${post.userId}</h4>
            <h5>id: ${post.id}</h5>
            <p>title: ${post.title}</p>
            <p>description: ${post.body}</p>
        `
        postDiv.appendChild(div);
    }
}

const stuInfo = JSON.stringify({ name: "James", roll: 3 });
console.log(stuInfo.name);
