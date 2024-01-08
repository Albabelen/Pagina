function redirectToYouTube() {
    window.location.href = "https://www.youtube.com/embed/klcQNKfHNlQ?si=RUxlfAFIXYwkC4Lv";
}

function moveNo() {
    var noButton = document.getElementById('no');
    noButton.style.left = Math.random() * 95 + "vw";
    noButton.style.top = Math.random() * 95 + "vh";

    setTimeout(function () {
        alert("¿Entonces me vas a clavar una duda? :(");
    }, 500);
}

function createStarRain() {
    for (var i = 0; i < 10; i++) {
        setTimeout(function () {
            createStar();
        }, i * 300);  // Ajusta el intervalo de creación de estrellas según tus preferencias
    }
}

function createStar() {
    var star = document.createElement("div");
    star.className = "star-rain";
    star.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(star);
}

createStarRain();  // Inicia la lluvia de estrellas al cargar la página
// Función para mover el botón "No" cuando cambia la orientación o tamaño de la ventana
function moveNoOnOrientationChange() {
    var noButton = document.getElementById('no');
    noButton.style.left = Math.random() * 95 + "vw";
    noButton.style.top = Math.random() * 95 + "vh";
}

// Inicia la lluvia de estrellas al cargar la página
createStarRain();

// Añade un evento para detectar cambios de orientación o tamaño de la ventana
window.addEventListener('orientationchange', moveNoOnOrientationChange);
window.addEventListener('resize', moveNoOnOrientationChange);
// ... (código anterior)

function showPoemAlert() {
    alert("Antes de poner 'Sí' o 'No', me gustaría que leas este poema que te escribí en noviembre.");
    setTimeout(function() {
        alert("Entendí sobre destino,\ncuando apareciste días después de mi cumpleaños,\nenseñándome que amor no eran 4 letras\n y mucho menos Roma al revés.\n\nAmor eran tus manos\n sosteniendo mi café\n la primera vez que te vi.\n\nAmor era cada cosa que hacías;\nY créeme, estuve equivocada,\njamás me había enamorado,\nhasta ese martes.\n\nLos viernes se convirtieron en\nmi perfecta definición de amor,\nCuando agarrabas mi mano\n y mirábamos el atardecer.\n\nAmor era el brillo en tus ojos\n cuando hablas sobre lo que ama(ba)s\ny me incluias,\nAmor: eran tres letras, tu nombre.");
    }, 500);
}

// ... (código posterior)
