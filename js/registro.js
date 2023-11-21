document.addEventListener('DOMContentLoaded', () =>{
    //aletas
    const url = window.location.search;
    const params = new URLSearchParams(url);
    const existe = params.get('existe');

    //validaciones
    window.onload = function() {
        let diaSelect = document.getElementById('dia');
        let mesSelect = document.getElementById('mes');
        let anoSelect = document.getElementById('ano');

        for (var i = 1; i <= 31; i++) {
            diaSelect.innerHTML += `<option value="${i}">${i}</option>`;
        }

        let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        for (var i = 0; i < meses.length; i++) {
            mesSelect.innerHTML += `<option value="${i + 1}">${meses[i]}</option>`;
        }

        for (var i = 1940; i <= 2023; i++) {
            anoSelect.innerHTML += `<option value="${i}">${i}</option>`;
        }
    }

    //estado de alerta
    if(existe) {
        const alerta = document.getElementsByClassName('alert');
        alerta[0].classList.remove('hide');
        alerta[0].classList.add('show');
        setTimeout(() => {
            alerta[0].classList.remove('show');
            alerta[0].classList.add('hide');
        }, 3000);
    }
})