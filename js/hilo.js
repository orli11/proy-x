const postContainer = document.getElementById('postRespuestasHilo')
const postCard = document.getElementById('cardPost').content
const fragment = document.createDocumentFragment()

var params = new URLSearchParams(window.location.search);
var usuario = params.get('usuario');
var fecha = params.get('fecha');
var fromUser = params.get('fromUser');


document.addEventListener('DOMContentLoaded', () => {
    loadDataPost()
    TraerUserCard()
    loadComments()
})

const loadDataPost = () => {
    const sendData = {
        usuario,
        fecha,
    }
    fetch('./Backend/Files/loadHilo.php', {
        method: 'POST',
        body: JSON.stringify(sendData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(async (response) => {
        const posts = await response.json()
        //console.log(posts)
        
        const idpost = document.getElementById('id_post');
        const CommentFromUser = document.getElementById('CommentFromUser')
        // Encuentra los elementos HTML
        let titulo = document.querySelector('#titulo');
        let usuarioName = document.querySelector('.usuarioName');
        let usuario = document.querySelector('.usuario');
        let comentario = document.querySelector('#comentario');
        let fecha = document.querySelector('.fecha');
        
        // Asigna los valores del objeto JSON a los elementos HTML
        //console.log('ESTE ES EL NOMBRE QUE SE ASSIGNA AL POST: ', fromUser);
        CommentFromUser.value = fromUser
        idpost.value = posts.id_pos;
        titulo.textContent = posts.titulo;
        usuarioName.textContent = posts.id_usu;
        comentario.textContent = posts.mensaje;
        fecha.textContent = posts.fecha;
    })
}

const loadComments = async () => {
    fetch(`./Backend/Files/loadCommentsHilo.php?usuario=${usuario}&fecha=${fecha}`)
    .then(async (response) => {
        const items = await response.json()
        //console.log(items)
        printComments(items.MESSAGE)
    })
}

const printComments = post => {
    postMessage.innerHTML = ''
    post.forEach((item) => {
        postCard.querySelector('.usuarioNameComment').textContent = item.usuario
        postCard.querySelector('.fechaComment').textContent = item.fecha
        postCard.querySelector('.Comment').textContent = item.mensaje
        const clone = postCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    postContainer.appendChild(fragment)
}

const TraerUserCard = () => {
    const sendData = {
        fromUser
    }
    fetch('./Backend/Files/loadUserCard.php', {
        method: 'POST',
        body: JSON.stringify(sendData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(async (response) => {
        const userCard = await response.json()
       //console.log(userCard)
        
        // Encuentra los elementos HTML
        let usuario = document.getElementById('userBlog');
        let usuarioEmail = document.getElementById('emailBlog');
        
        // Asigna los valores del objeto JSON a los elementos HTML
        usuario.textContent = userCard.usuario;
        usuarioEmail.textContent = userCard.email;

        //asignar el usuario desde el caul se esta viendo el post
        id_usu = userCard.usuario;
        //console.log('NOMBRE DEL USUARIO => ', id_usu);
    })
}

/* const sendComment = () => {
    const idpost = document.getElementById('id_post');
    idpost.value = id_pos
} */

function backHome(){
    const urlParams = new URLSearchParams(window.location.search);
    const fromUser = urlParams.get('fromUser');
    window.location.href = `http://localhost:8888/proy-x/home.html?usuario=${fromUser}`;
}


