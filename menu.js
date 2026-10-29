const menu = document.querySelector(".menu-desplegable");
const enlaces = document.querySelectorAll(".enlaces-de-navegacion");

if (window.innerWidth <= 600) {
    menu.open = false;
}

window.addEventListener("resize", function () {
    if (window.innerWidth > 600) {
        menu.open = true;
    }
});

enlaces.forEach(function (enlace) {
    enlace.addEventListener("click", function () {
        if (window.innerWidth <= 600) {
            menu.open = false;
        }
    });
});

const botonDescargar = document.getElementById("boton-descargar");

if (botonDescargar) {
    botonDescargar.addEventListener("click", function () {
        alert("La descarga comenzó. Cuando termine, descomprimí el archivo ZIP antes de abrir el programa.");
    });
}
