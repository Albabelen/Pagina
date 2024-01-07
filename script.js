function showNo() {
    window.location.href = "https://www.youtube.com/embed/klcQNKfHNlQ?si=RUxlfAFIXYwkC4Lv";
}

function moveNo() {
    var noButton = document.getElementById('no');
    noButton.style.left = Math.random() * 95 + "vw";
    noButton.style.top = Math.random() * 95 + "vh";
    setTimeout(function () {
        alert("¿Entonces me vas a clavar una duda? :(");
    }, 5000);
}
function moveNo() {
    var noButton = document.getElementById('no');
    noButton.style.left = Math.random() * 95 + "vw";
    noButton.style.top = Math.random() * 95 + "vh";

    createHeart();

    createHeartRain();  // Agrega esta línea para iniciar la lluvia de corazones

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
