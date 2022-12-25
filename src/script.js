const horas = document.getElementById("horas");
const minustos = document.getElementById("minustos");
const segundos = document.getElementById("segundos");

const relogio = setInterval(function time () {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let mino = dateToday.getMinutes();
    let seg = dateToday.getSeconds();
    
    if (hr < 10) hr = "0" + hr;
    if (mino < 10) mino = "0" + mino;
    if (seg < 10) seg = "0" + seg;

    horas.textContent = hr;
    minutos.textContent = mino;
    segundos.textContent = seg;

   

} 
)
