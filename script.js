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
        }, i * 300);
    }
}

function createStar() {
    var star = document.createElement("div");
    star.className
