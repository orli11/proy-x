document.addEventListener('DOMContentLoaded', () =>{
    window.onload = function() {
        var diaSelect = document.getElementById('dia');
        var mesSelect = document.getElementById('mes');
        var anoSelect = document.getElementById('ano');

        for (var i = 1; i <= 31; i++) {
            diaSelect.innerHTML += `<option value="${i}">${i}</option>`;
        }

        var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        for (var i = 0; i < meses.length; i++) {
            mesSelect.innerHTML += `<option value="${i + 1}">${meses[i]}</option>`;
        }

        for (var i = 1940; i <= 2023; i++) {
            anoSelect.innerHTML += `<option value="${i}">${i}</option>`;
        }
    }
})