var botonActivo = false;

window.onload = () => {
  botonMenu();
  console.log("estado del boton:", botonActivo);
};

window.onresize = () => {
  if (window.innerWidth >= 820) {
    let menu = document.querySelector("nav");
    console.log("resolucion >=820px ocultando menu...");
    menu.style.left = "-85%";
    botonActivo = false;
  }
};

function botonMenu() {
  let boton = document.querySelector("#hamburguesa");
  boton.addEventListener("click", menuAccion);
}

function menuAccion() {
  let menu = document.querySelector("nav");
  if (botonActivo == false) {
    botonActivo = true;
    console.log("se ha pulsado el boton del Menu", botonActivo);
    menu.style.left = "0%";
  } else {
    botonActivo = false;
    console.log("se ha pulsado el boton del Menu", botonActivo);
    menu.style.left = "-85%";
  }
}
