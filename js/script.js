const PREZZO_KM = 0.21;

const form = document.getElementById("form-biglietto");
const inputNome = document.getElementById("nome");
const inputKm = document.getElementById("km");
const selectEta = document.getElementById("eta");
const risultato = document.getElementById("risultato");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // altrimenti la pagina si ricarica

    const nome = inputNome.value;
    const km = parseFloat(inputKm.value);
    const fascia = selectEta.value;

    // controllo dei dati inseriti
    if (nome.trim() === "" || isNaN(km) || km <= 0) {
        risultato.innerHTML = `<p class="errore">Inserisci un nome e un numero di km valido (maggiore di 0).</p>`;
        return;
    }

    const prezzoBase = km * PREZZO_KM;
    let sconto = 0;
    let tariffa = "Standard";

    if (fascia === "minorenne") {
        sconto = 20;
        tariffa = "Minorenni (-20%)";
    } else if (fascia === "over65") {
        sconto = 40;
        tariffa = "Over 65 (-40%)";
    }

    const prezzoFinale = prezzoBase - (prezzoBase * sconto) / 100;

    risultato.innerHTML = `
        <h2>Il tuo biglietto</h2>
        <p>Passeggero: ${nome}</p>
        <p>Prezzo base: ${prezzoBase.toFixed(2)} €</p>
        <p>Tariffa: ${tariffa}</p>
        <p>Prezzo finale: <strong>${prezzoFinale.toFixed(2)} €</strong></p>
    `;
});
