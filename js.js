 
const v = document.querySelector('.preloader');
setTimeout (function(){
    v.classList.add("preloader-remove");}, 1500);


document.querySelector(`button`).onclick = result;

function month(n) {
    n = document.querySelector(`.a1`).value;
    let m = n*12;
    console.log(m);
    return m;
}

function week(n){
    n = document.querySelector(`.a1`).value;
    let w = n*52;
    console.log(w);
    return w;
}

function Year(n) {
n = document.querySelector(`.a1`).value;
let x = 0; 
let y = 0;
console.log("x0="+x);
for(let i=1 ; i<=n ; i++) {
    if (y==4) { 
        x+= 366;
        y=0
    } else {
        x+= 365; 
    }
    y++
}
console.log(x);
return x;
} 

function hour (n) {
    n = document.querySelector(`.a1`).value;
    let x = Year(n); 
    let h = x*24;
    console.log(h);
    return h;
    }

function minutes(n) {
    n = document.querySelector(`.a1`).value;
    let v = hour(n);
    let m = v * 60;
    console.log(m);
    return m;
}

function second(n) {
    n = document.querySelector(`.a1`).value;
    let c = hour(n);
    let s = c * 3600;
    console.log(s)
    return s;
}

function result() {
    let z = "Итого: " + "месяцев - " + month()+ "; " + "недель - " + week()+ "; "+ "дней - " + Year()+ "; "
    + "часов - " + hour()+ "; "+ "минут - " + minutes()+ "; "+ "секунд - " + second()+ "; ";
    console.log(z);
document.querySelector(`.out`).innerHTML = z;
}
