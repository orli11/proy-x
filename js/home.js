let loggedUser = {}

const postContainer = document.getElementById('postUsuarios')
const postCard = document.getElementById('cardPost').content
const titulo = document.getElementById('userBlog')
const titulo2 = document.getElementById('emailBlog')
const fragment = document.createDocumentFragment()


document.addEventListener('DOMContentLoaded', () => {
    loadUser()
    loadPost()
})

const loadPost = async () => {
    const posts = await fetch('./Backend/Files/loadPost.php')
    const items = await posts.json()
    dibujandoPosts(items.MESSAGE)
}

const dibujandoPosts = posts => {
    console.log(posts)
    postContainer.innerHTML = '' 
    posts.forEach((item) => {
        postCard.querySelector('.usuarioName').textContent = item.id_usu
        postCard.querySelector('.fecha').textContent = item.fecha
        postCard.querySelector('.tituloPost').textContent = item.titulo
        postCard.querySelector('.mensajePost').textContent = item.mensaje

        const clone = postCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    postContainer.appendChild(fragment)
}

const loadUser = () => {
    const url = window.location.search
    const params = new URLSearchParams(url)
    const usuario = params.get('usuario')
    console.log(usuario)
    if(usuario) {
        const sendData = {
            usuario
        }
        fetch('./Backend/Files/home.php', {
            method: 'POST',
            body: JSON.stringify(sendData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(async (response) => {
            const user = await response.json()
            loggedUser = user.MESSAGE
            //console.log(loggedUser)
            const inputIdUser = document.getElementById('id_usu')
            inputIdUser.value = loggedUser.usuario
            titulo.innerHTML = loggedUser.usuario
            titulo2.innerHTML = loggedUser.email
            //console.log('=>', response)
        })
    }

    console.log('>', usuario)
}