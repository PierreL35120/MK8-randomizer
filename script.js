window.addEventListener("load", chooseKart, false);
window.addEventListener("load", chooseRoue, false);
window.addEventListener("load", chooseVoile, false);
window.addEventListener("load", chooseChara, false);
window.addEventListener("load", chooseKart2, false);
window.addEventListener("load", chooseRoue2, false);
window.addEventListener("load", chooseVoile2, false);
window.addEventListener("load", chooseChara2, false);
window.addEventListener("load", chooseKart3, false);
window.addEventListener("load", chooseRoue3, false);
window.addEventListener("load", chooseVoile3, false);
window.addEventListener("load", chooseChara3, false);
window.addEventListener("load", chooseKart4, false);
window.addEventListener("load", chooseRoue4, false);
window.addEventListener("load", chooseVoile4, false);
window.addEventListener("load", chooseChara4, false);
window.addEventListener("load", chooseKart5, false);
window.addEventListener("load", chooseRoue5, false);
window.addEventListener("load", chooseVoile5, false);
window.addEventListener("load", chooseChara5, false);
window.addEventListener("load", chooseKart6, false);
window.addEventListener("load", chooseRoue6, false);
window.addEventListener("load", chooseVoile6, false);
window.addEventListener("load", chooseChara6, false);
window.addEventListener("load", chooseKart7, false);
window.addEventListener("load", chooseRoue7, false);
window.addEventListener("load", chooseVoile7, false);
window.addEventListener("load", chooseChara7, false);
window.addEventListener("load", chooseKart8, false);
window.addEventListener("load", chooseRoue8, false);
window.addEventListener("load", chooseVoile8, false);
window.addEventListener("load", chooseChara8, false);
window.addEventListener("load", chooseKart9, false);
window.addEventListener("load", chooseRoue9, false);
window.addEventListener("load", chooseVoile9, false);
window.addEventListener("load", chooseChara9, false);

const kart = Array(
    "img/Kart-01.png",
    "img/Kart-02.png",
    "img/Kart-03.png",
    "img/Kart-04.png",
    "img/Kart-05.png",
    "img/Kart-06.png",
    "img/Kart-07.png",
    "img/Kart-08.png",
    "img/Kart-09.png",
    "img/Kart-10.png",
    "img/Kart-11.png",
    "img/Kart-12.png",
    "img/Kart-13.png",
    "img/Kart-14.png",
    "img/Kart-15.png",
    "img/Kart-16.png",
    "img/Kart-17.png",
    "img/Kart-18.png",
    "img/Kart-19.png",
    "img/Kart-20.png",
    "img/Kart-21.png",
    "img/Kart-22.png",
    "img/Moto-01.png",
    "img/Moto-02.png",
    "img/Moto-03.png",
    "img/Moto-04.png",
    "img/Moto-05.png",
    "img/Moto-06.png",
    "img/Moto-07.png",
    "img/Moto-08.png",
    "img/Moto-09.png",
    "img/Moto-10.png",
    "img/Moto-11.png",
    "img/Moto-12.png",
    "img/Moto-13.png",
    "img/Moto-14.png",
    "img/Moto-15.png"    
);

const characters = Array(
    "img/Perso-01.png",
    "img/Perso-02.png",
    "img/Perso-03.png",
    "img/Perso-04.png",
    "img/Perso-05.png",
    "img/Perso-06.png",
    "img/Perso-07.png",
    "img/Perso-08.png",
    "img/Perso09.png",
    "img/Perso-10.png",
    "img/Perso-11.png",
    "img/Perso-12.png",
    "img/Perso-13.png",
    "img/Perso-14.png",
    "img/Perso-15.png",
    "img/Perso-16.png",
    "img/Perso-17.png",
    "img/Perso-18.png",
    "img/Perso-19.png",
    "img/Perso-20.png",
    "img/Perso-21.png",
    "img/Perso-22.png",
    "img/Perso-23.png",
    "img/Perso-24.png",
    "img/Perso-25.png",
    "img/Perso-26.png",
    "img/Perso-27.png",
    "img/Perso-28.png",
    "img/Perso-29.png",
    "img/Perso-30.png",
    "img/Perso-31.png",
    "img/Perso-32.png",
    "img/Perso-33.png",
    "img/Perso-34.png",
    "img/Perso-35.png",
    "img/Perso-36.png",
    "img/Perso-37.png",
    "img/Perso-38.png",
    "img/Perso-39.png",
    "img/Perso-40.png",
    "img/Perso-41.png",
    "img/Perso-42.png",

)

const roue = Array(
    "img/Roues-01.png",
    "img/Roues-02.png",
    "img/Roues-03.png",
    "img/Roues-04.png",
    "img/Roues-05.png",
    "img/Roues-06.png",
    "img/Roues-07.png",
    "img/Roues-08.png",
    "img/Roues-09.png",
    "img/Roues-10.png",
    "img/Roues-11.png",
    "img/Roues-12.png",
    "img/Roues-13.png",
    "img/Roues-14.png",
    "img/Roues-15.png",
    "img/Roues-16.png",
    "img/Roues-17.png",
    "img/Roues-18.png",
    "img/Roues-19.png",
    "img/Roues-20.png",
    "img/Roues-21.png",
);

const voile = Array(
    "img/Voile-01.png",
    "img/Voile-02.png",
    "img/Voile-03.png",
    "img/Voile-04.png",
    "img/Voile-05.png",
    "img/Voile-06.png",
    "img/Voile-07.png",
    "img/Voile-08.png",
    "img/Voile-09.png",
    "img/Voile-10.png",
    "img/Voile-11.png",
    "img/Voile-12.png",
    "img/Voile-13.png",
    "img/Voile-14.png"
)
        
function chooseKart() {
     const randomKart = Math.floor(Math.random() * kart.length);
     document.getElementById("Kart").src = kart[randomKart];
}

function chooseRoue() {
    const randomRoue = Math.floor(Math.random() * roue.length);
    document.getElementById("Roue").src = roue[randomRoue];
}

function chooseChara() {
    const randomCharacters = Math.floor(Math.random() * characters.length);
    document.getElementById("Characters").src = characters[randomCharacters];
}

function chooseVoile() {
    const randomVoile = Math.floor(Math.random() * voile.length);
    document.getElementById("Voile").src = voile[randomVoile];
}


function chooseKart2() {
    const randomKart = Math.floor(Math.random() * kart.length);
    document.getElementById("Kart2").src = kart[randomKart];
}

function chooseRoue2() {
   const randomRoue = Math.floor(Math.random() * roue.length);
   document.getElementById("Roue2").src = roue[randomRoue];
}

function chooseChara2() {
   const randomCharacters = Math.floor(Math.random() * characters.length);
   document.getElementById("Characters2").src = characters[randomCharacters];
}

function chooseVoile2() {
   const randomVoile = Math.floor(Math.random() * voile.length);
   document.getElementById("Voile2").src = voile[randomVoile];
}

function chooseKart3() {
    const randomKart = Math.floor(Math.random() * kart.length);
    document.getElementById("Kart3").src = kart[randomKart];
}

function chooseRoue3() {
   const randomRoue = Math.floor(Math.random() * roue.length);
   document.getElementById("Roue3").src = roue[randomRoue];
}

function chooseChara3() {
   const randomCharacters = Math.floor(Math.random() * characters.length);
   document.getElementById("Characters3").src = characters[randomCharacters];
}

function chooseVoile3() {
   const randomVoile = Math.floor(Math.random() * voile.length);
   document.getElementById("Voile3").src = voile[randomVoile];
}

function chooseKart4() {
    const randomKart = Math.floor(Math.random() * kart.length);
    document.getElementById("Kart4").src = kart[randomKart];
}

function chooseRoue4() {
   const randomRoue = Math.floor(Math.random() * roue.length);
   document.getElementById("Roue4").src = roue[randomRoue];
}

function chooseChara4() {
   const randomCharacters = Math.floor(Math.random() * characters.length);
   document.getElementById("Characters4").src = characters[randomCharacters];
}

function chooseVoile4() {
   const randomVoile = Math.floor(Math.random() * voile.length);
   document.getElementById("Voile4").src = voile[randomVoile];
}

function chooseKart5() {
    const randomKart = Math.floor(Math.random() * kart.length);
    document.getElementById("Kart5").src = kart[randomKart];
 }
 
 function chooseRoue5() {
   const randomRoue = Math.floor(Math.random() * roue.length);
   document.getElementById("Roue5").src = roue[randomRoue];
 }
 
 function chooseChara5() {
   const randomCharacters = Math.floor(Math.random() * characters.length);
   document.getElementById("Characters5").src = characters[randomCharacters];
 }
 
 function chooseVoile5() {
   const randomVoile = Math.floor(Math.random() * voile.length);
   document.getElementById("Voile5").src = voile[randomVoile];
 }

function chooseKart6() {
   const randomKart = Math.floor(Math.random() * kart.length);
   document.getElementById("Kart6").src = kart[randomKart];
}

function chooseRoue6() {
  const randomRoue = Math.floor(Math.random() * roue.length);
  document.getElementById("Roue6").src = roue[randomRoue];
}

function chooseChara6() {
  const randomCharacters = Math.floor(Math.random() * characters.length);
  document.getElementById("Characters6").src = characters[randomCharacters];
}

function chooseVoile6() {
  const randomVoile = Math.floor(Math.random() * voile.length);
  document.getElementById("Voile6").src = voile[randomVoile];
}

function chooseKart7() {
   const randomKart = Math.floor(Math.random() * kart.length);
   document.getElementById("Kart7").src = kart[randomKart];
}

function chooseRoue7() {
  const randomRoue = Math.floor(Math.random() * roue.length);
  document.getElementById("Roue7").src = roue[randomRoue];
}

function chooseChara7() {
  const randomCharacters = Math.floor(Math.random() * characters.length);
  document.getElementById("Characters7").src = characters[randomCharacters];
}

function chooseVoile7() {
  const randomVoile = Math.floor(Math.random() * voile.length);
  document.getElementById("Voile7").src = voile[randomVoile];
}

function chooseKart8() {
   const randomKart = Math.floor(Math.random() * kart.length);
   document.getElementById("Kart8").src = kart[randomKart];
}

function chooseRoue8() {
  const randomRoue = Math.floor(Math.random() * roue.length);
  document.getElementById("Roue8").src = roue[randomRoue];
}

function chooseChara8() {
  const randomCharacters = Math.floor(Math.random() * characters.length);
  document.getElementById("Characters8").src = characters[randomCharacters];
}

function chooseVoile8() {
  const randomVoile = Math.floor(Math.random() * voile.length);
  document.getElementById("Voile8").src = voile[randomVoile];
}

function chooseKart9() {
   const randomKart = Math.floor(Math.random() * kart.length);
   document.getElementById("Kart9").src = kart[randomKart];
}

function chooseRoue9() {
  const randomRoue = Math.floor(Math.random() * roue.length);
  document.getElementById("Roue9").src = roue[randomRoue];
}

function chooseChara9() {
  const randomCharacters = Math.floor(Math.random() * characters.length);
  document.getElementById("Characters9").src = characters[randomCharacters];
}

function chooseVoile9() {
  const randomVoile = Math.floor(Math.random() * voile.length);
  document.getElementById("Voile9").src = voile[randomVoile];
}