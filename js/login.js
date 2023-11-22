let usuario
const btnLogin = document.getElementById('btnLogin')

btnLogin.addEventListener('click', () => {
    const email = document.getElementById('email')
    const password = document.getElementById('password')

    if(email.value.trim() === '' || password.value.trim() === ''){
        activaAlerta('Los campos no pueden estar vacíos')
    } else {
        const sendData = {
            email: email.value,
            password: password.value
        }
        fetch('./Backend/Files/login.php', {
            method: 'POST',
            body: JSON.stringify(sendData),
            headers: {
                'Content-Type': 'application/json'
            }
        }) .then(async (response) => {
            const respuesta = await response.json();
            if(respuesta.MESSAGE === 'No se encontro usuario'){
                activaAlerta('Usuario no encontrado 🥴');
            } else if(respuesta.MESSAGE === 'Contraseña no coincide'){
                activaAlerta('La contraseña no coincide 🫣');
            } else if(respuesta.MESSAGE === 'Success'){
                usuario = respuesta.USUARIO['usuario']
                console.log(usuario)
                window.location.replace(`/proy-x/home.html?usuario=${usuario}`);
            } else {
                activaAlerta('Algo salió mal')
            }
        })
        .catch((error) => {
            console.log('SUCEDIO UN ERROR =>', error);
        })
    }
})

const activaAlerta = mensaje => {
    const alert = document.getElementsByClassName('alert')
        alert[0].textContent = mensaje
        alert[0].classList.remove('hide')
        alert[0].classList.add('show')
        setTimeout(() => {
            alert[0].classList.remove('show')
            alert[0].classList.add('hide')
        }, 5000);
}