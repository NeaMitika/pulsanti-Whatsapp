document.addEventListener("DOMContentLoaded", function() {
    var pulsanteApri = document.getElementById("pulsante-apri-pulsanti-whatsapp");
    var pulsantiWhatsapp = document.getElementById("pulsanti-whatsapp");

    pulsanteApri.addEventListener("click", function() {
        if (pulsantiWhatsapp.style.display === "flex") {
            pulsantiWhatsapp.style.display = "none";
        } else {
            pulsantiWhatsapp.style.display = "flex";
        }
    });
});