var fichas = document.querySelectorAll(".ficha");
const cajas = document.querySelectorAll(".caja");
var fichaSlect;
var ban = true;

fichas.forEach(ficha => {
    ficha.addEventListener("click", () => {
        if (ban){
            ban = false;
            ficha.style.border = "solid 1px white";
            fichaSlect = ficha;
        }
    });
});

cajas.forEach(caja => {
    caja.addEventListener("click", () => {
        if (!ban){
            fichaSlect.style.border = "solid 1px black";
            caja.appendChild(fichaSlect);
            ban = true;
        }
    });
});