var fichas1 = document.querySelectorAll(".player1");
var fichas2 = document.querySelectorAll(".player2");
var cajas = document.querySelectorAll(".caja");
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
    caja.addEventListener("click", (c) => {
        if (!ban){
            console.log(caja);
            console.log(c);
            if (c.lastChild != null) {
                if (fichaSlect.classList.contains("chica")){
                    alert("no puedes perro, es el que prestas. ya esta ocupada la casilla!!");
                } else if (fichaSlect.classList.contains("mediana") && c.lastChild.classList.contains("mediana") && c.lastChild.classList.contains("grande")) {
                    alert("esta ocupada la casilla, padrino!!");
                } else if (fichaSlect.classList.contains("grande") && c.lastChild.classList.contains("grande")){
                    alert("estas ciego, esta ocupada, papí!!");
                } else {
                    fichaSlect.style.border = "solid 1px black";
                    caja.appendChild(fichaSlect);
                    fichaSlect.style.position = "absolute";
                    ban = true;
                }
            } else {        
                fichaSlect.style.border = "solid 1px black";
                caja.appendChild(fichaSlect);
                fichaSlect.style.position = "absolute";
                ban = true;
            }
        }
    });
});