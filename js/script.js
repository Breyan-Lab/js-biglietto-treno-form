const PREZZO_KM = 0.21;

const inputKm = document.getElementById("km");
const bottone = document.getElementById("calcola");

bottone.addEventListener("click", function () {
    // il value delle input è sempre una stringa
    const km = parseFloat(inputKm.value);
    const prezzoBase = km * PREZZO_KM;
    console.log("Prezzo base:", prezzoBase);
});
