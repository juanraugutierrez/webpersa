let fecha = new Date();
let ffecha=fecha.getDate() + "/" + (fecha.getMonth() +1) + "/" + fecha.getFullYear()
console.log(fecha);

function Muestrafecha() {
    //arreglo de los meses
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Deciembre"];
    
    //arreglo de los dias
    const dias_de_la_semana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    
    var today = new Date();
    var day   = today.getDate();
    var month = today.getMonth();
    var year  = today.getYear();
    var dia = today.getDay();
    if (year < 1000) {year += 1900; }
    
    // mostrar la fecha 
    return( dias_de_la_semana[dia] + ", " + day + " de " + meses[month] + " del " + year);
    }

$(document).ready(function () {
    document.getElementById('fecha').innerHTML = Muestrafecha()});