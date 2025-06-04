let form = document.querySelector('#form')
let postagem = document.querySelector('#postagem')
let posts = document.querySelector('#posts')
let txtPostagem = document.querySelector('#txtPostagem')

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("botao clicado");
    formValidation();
});

let formValidation = () => {
    if (postagem.value === "") {
        txtPostagem.innerHTML = "Postagem nao pode estar em branco"
        console.log("falha")
    }
    else {
        console.log("sucesso...")
        txtPostagem.innerHTML = ""
        acceptData()
    }
}
let data = {};
let acceptData = () => {
    data["text"] = postagem.value
    console.log(data)
    createPost()
}

let createPost = () => {
    posts.innerHTML += `
    <div>
        <p>${data.text}</p>
        <span class="Options">
            <i onclick="editPost(this)" class= "fasfa-edit"></i>
            <i onclick="deletePost(this)" class="fas fa-trash-alt"></i>
            </span>
            </div>
            `
    postagem.value = ""
}

let deletePost = (e) => {
    e.parentElement.parentElement.remove();
}
let editPost = (e) => {
    postagem.value = e.parentElement.previousElementSibling.innerHTML

    e.parentElment.parentElement.remove()
}