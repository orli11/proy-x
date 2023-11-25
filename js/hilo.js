var params = new URLSearchParams(window.location.search);
var usuario = params.get('usuario');
var fecha = params.get('fecha');

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
    })
}