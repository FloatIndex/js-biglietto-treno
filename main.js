let kms = parseInt(prompt("Quanti chilometri devi percorrere?"));
let age = parseInt(prompt("Qual è l'eta del passeggero?"));
const costPerKm = 0.21;
const underage = 18;
const elderly = 65;
const underageDiscount = 20;
const elderlyDiscount = 40;
const ageLimit = 110;
const kmsLimit = 1300;

let ticketPrice = kms * costPerKm;

if (isNaN(age) || isNaN(kms)) {
    document.getElementById("error-message").innerHTML = "I dati inseriti non sono corretti.";
} else if (age > ageLimit) {
    document.getElementById("unlikely-message").innerHTML = "A " + age + " anni forse sono meglio poltrona e copertina...te la butto lì.";
} else if (kms > kmsLimit) {
    document.getElementById("unlikely-message").innerHTML = "Prendi l'aereo.";
} else {
    if (age < underage) {
        ticketPrice -= ticketPrice * underageDiscount / 100;
        document.getElementById("discount-message").innerHTML = "Hai ricevuto lo sconto per minorenni del " + underageDiscount + "%!"
    } else if (age > elderly) {
        ticketPrice -= ticketPrice * elderlyDiscount / 100;
        document.getElementById("discount-message").innerHTML = "Hai ricevuto lo sconto per over 65 del " + elderlyDiscount + "%!"
    }
    ticketPrice = ticketPrice.toFixed(2);
    document.getElementById("ticket-price-message").innerHTML = "Il costo del tuo biglietto è: " + ticketPrice + " euro.";
}