const PREZZO_KM = 0.21;

const inputKm = document.getElementById("km");
const selectEta = document.getElementById("eta");
const bottone = document.getElementById("calcola");
const risultato = document.getElementById("risultato");

bottone.addEventListener("click", function () {
    const km = parseFloat(inputKm.value);
    const fascia = selectEta.value;

    let prezzo = km * PREZZO_KM;

    if (fascia === "minorenne") {
        prezzo = prezzo - prezzo * 0.2;
    } else if (fascia === "over65") {
        prezzo = prezzo - prezzo * 0.4;
    }

    console.log("Prezzo finale:", prezzo);
    risultato.innerHTML = "Prezzo del biglietto: " + prezzo + " €";
});
