var params = new URLSearchParams(window.location.search);
var usuario = params.get('usuario');
var fecha = params.get('fecha');
var fromUser = params.get('fromUser');

console.log(usuario);
console.log(fecha); 
console.log(fromUser)

document.addEventListener('DOMContentLoaded', () => {
    loadDataPost()
    TraerUserCard()
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
        console.log(posts)
        
        const idpost = document.getElementById('id_post');
        // Encuentra los elementos HTML
        let titulo = document.querySelector('#titulo');
        let usuarioName = document.querySelector('.usuarioName');
        let usuario = document.querySelector('.usuario');
        let comentario = document.querySelector('#comentario');
        let fecha = document.querySelector('.fecha');
        
        // Asigna los valores del objeto JSON a los elementos HTML
        idpost.value = posts.id_pos;
        titulo.textContent = posts.titulo;
        usuarioName.textContent = posts.id_usu;
        comentario.textContent = posts.mensaje;
        fecha.textContent = posts.fecha;
    })
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
        console.log(userCard)
        
        // Encuentra los elementos HTML
        let usuario = document.getElementById('userBlog');
        let usuarioEmail = document.getElementById('emailBlog');
        
        // Asigna los valores del objeto JSON a los elementos HTML
        usuario.textContent = userCard.usuario;
        usuarioEmail.textContent = userCard.email;

    })
}

/* const sendComment = () => {
    const idpost = document.getElementById('id_post');
    idpost.value = id_pos
} */

function backHome(){
    window.history.back();
}


