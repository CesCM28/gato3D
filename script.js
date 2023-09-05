var fichas1 = document.querySelectorAll(".player1");
var fichas2 = document.querySelectorAll(".player2");
const cajas = document.querySelectorAll(".caja");
var fichaSlect;
var ban = true;
var turno1 = true;

fichas1.forEach(ficha => {
    ficha.addEventListener("click", () => {
        if (turno1){
            if (ban){
                ban = false;
                turno1 = false;
                ficha.style.border = "solid 1px white";
                fichaSlect = ficha;
            }
        } else {
            alert("Turno del Azul!!")
        }
    });
});

fichas2.forEach(ficha => {
    ficha.addEventListener("click", () => {
        if (!turno1){
            if (ban){
                ban = false;
                turno1 = true;
                ficha.style.border = "solid 1px white";
                fichaSlect = ficha;
            }
        } else {
            alert("Turno del Rojo!!")
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