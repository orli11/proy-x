let usuario
const btnLoguin = document.getElementById('btnLogin')

btnLoguin.addEventListener('click', () => {
    const email = document.getElementById('email')
    const password = document.getElementById('password')
    if(email.value.trim() === '' || password.value.trim() === ''){
        activaAlerta('Los campos no pueden estar vacíos')
    } else {
        console.log('Campos completados')
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