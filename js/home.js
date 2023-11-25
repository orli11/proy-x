// cambio para prueba 
let loggedUser = {}

const postContainer = document.getElementById('postUsuarios')
const postCard = document.getElementById('cardPost').content
const titulo = document.getElementById('userBlog')
const titulo2 = document.getElementById('emailBlog')
const fragment = document.createDocumentFragment()


document.addEventListener('DOMContentLoaded', () => {
    loadUser()
    loadPost()

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('replyBtn')) {
            const commentBox = e.target.closest('.post-actions').querySelector('.comment-box');
            commentBox.classList.toggle('d-none');
        }
    })
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
    if (usuario) {
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

//funcion para ir al hilo de un post
function irHilo(event) {
    var divClickeado = event.currentTarget;
    var usuario = encodeURIComponent(divClickeado.querySelector('.usuarioName').textContent);
    var fecha = encodeURIComponent(divClickeado.querySelector('.fecha').textContent);

    window.location.href = `http://localhost:8888/proy-x/hilo.html?usuario=${usuario}&fecha=${fecha}`;
}