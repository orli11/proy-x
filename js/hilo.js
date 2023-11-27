const params = new URLSearchParams(window.location.search);
const usuario = params.get('usuario');
const fecha = params.get('fecha');

console.log(usuario);
console.log(fecha); 

document.addEventListener('DOMContentLoaded', () => {
    loadDataPost()
})

const loadDataPost = () => {
    const sendData = {
        usuario,
        fecha
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
        
        // Encuentra los elementos HTML
        let titulo = document.querySelector('#titulo');
        let usuarioName = document.querySelector('.usuarioName');
        let usuario = document.querySelector('.usuario');
        let comentario = document.querySelector('#comentario');
        let fecha = document.querySelector('.fecha');

        // Asigna los valores del objeto JSON a los elementos HTML
        titulo.textContent = posts.titulo;
        usuarioName.textContent = posts.id_usu;
        comentario.textContent = posts.mensaje;
        fecha.textContent = posts.fecha;
    })
}

function backHome(){
    window.history.back();
}


