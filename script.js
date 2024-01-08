function handleYes() {
    // Código para redireccionar a YouTube o mostrar alguna otra acción.
    window.location.href = "https://www.youtube.com/embed/klcQNKfHNlQ?si=RUxlfAFIXYwkC4Lv";
}

function moveNo() {
    // Código para mover el botón "No" y mostrar una alerta.
    var noButton = document.getElementById('no');
    noButton.style.left = Math.random() * 95 + "vw";
    noButton.style.top = Math.random() * 95 + "vh";

    setTimeout(function () {
        alert("¿Entonces me vas a clavar una duda? :(");
    }, 500);
}

function showPoemAlert() {
    // Código para mostrar una alerta con el poema.
    alert("Antes de poner 'Sí' o 'No', me gustaría que leas este poema que te escribí en noviembre.");
    setTimeout(function() {
        alert("Entendí sobre destino,\ncuando apareciste días después de mi cumpleaños,\nenseñándome que amor no eran 4 letras\n y mucho menos Roma al revés.\n\nAmor eran tus manos\n sosteniendo mi café\n la primera vez que te vi.\n\nAmor era cada cosa que hacías;\nY créeme, estuve equivocada,\njamás me había enamorado,\nhasta ese martes.\n\nLos viernes se convirtieron en\nmi perfecta definición de amor,\nCuando agarrabas mi mano\n y mirábamos el atardecer.\n\nAmor era el brillo en tus ojos\n cuando hablas sobre lo que ama(ba)s\ny me incluias,\nAmor: eran tres letras, tu nombre ♡. \nAtt: Belen.");
    }, 500);
}
