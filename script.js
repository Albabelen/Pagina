function showNo() {
    window.location.href = "https://www.youtube.com/embed/klcQNKfHNlQ?si=RUxlfAFIXYwkC4Lv";
}

function moveNo() {
    var noButton = document.getElementById('no');
    noButton.style.left = Math.random() * 95 + "vw";
    noButton.style.top = Math.random() * 95 + "vh";

    createHeartRain();  // Agrega esta línea para iniciar la lluvia de corazones cada vez que "No" se mueve

    setTimeout(function () {
        alert("¿Entonces me vas a clavar una duda? :(");
    }, 5000);
}

function createHeartRain() {
    for (var i = 0; i < 10; i++) {
        setTimeout(function () {
            createHeart();
        }, i * 300);  // Ajusta el intervalo de creación de corazones según tus preferencias
    }
}

setInterval(moveNo, 2000);  // Mueve "No" cada 2 segundos
setInterval(createHeartRain, 2000);  // Crea lluvia de corazones cada 2 segundos
