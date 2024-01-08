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

