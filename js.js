 
const v = document.querySelector('.preloader');
setTimeout (function(){
    v.classList.add("preloader-remove");}, 1500);


document.querySelector(`button`).onclick = result;

function month(n) {
    n = document.querySelector(`.a1`).value;
    let m = n*12;
    return m;
}

function week(n){
    n = document.querySelector(`.a1`).value;
    let w = n*52;
    return w;
}

function Year(n) {
n = document.querySelector(`.a1`).value;
let x = 0; 
let y = 0;
for(let i=1 ; i<=n ; i++) {
    if (y==4) { 
        x+= 366;
        y=0
    } else {
        x+= 365; 
    }
    y++
}
return x;
} 

function hour (n) {
    n = document.querySelector(`.a1`).value;
    let x = Year(n); 
    let h = x*24;
    return h;
    }

function minutes(n) {
    n = document.querySelector(`.a1`).value;
    let v = hour(n);
    let m = v * 60;
    return m;
}

function second(n) {
    n = document.querySelector(`.a1`).value;
    let c = hour(n);
    let s = c * 3600;
    return s;
}

function result() {
    let z = "Итого: " + "месяцев - " + month()+ "; " + "недель - " + week()+ "; "+ "дней - " + Year()+ "; "
    + "часов - " + hour()+ "; "+ "минут - " + minutes()+ "; "+ "секунд - " + second()+ "; ";
document.querySelector(`.out`).innerHTML = z;
}
