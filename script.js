// script.js
function generateCardNumber() {
    const prefixes = ["4", "5", "6"]; // Visa, MasterCard, Discover
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    let cardNumber = prefix;

    for (let i = 0; i < 14; i++) {
        cardNumber += Math.floor(Math.random() * 10);
    }

    cardNumber += getLuhnCheckDigit(cardNumber);

    document.getElementById('card-number').textContent = formatCardNumber(cardNumber);
}

function getLuhnCheckDigit(number) {
    let sum = 0;
    let alternate = false;

    for (let i = number.length - 1; i >= 0; i--) {
        let n = parseInt(number.charAt(i), 10);

        if (alternate) {
            n *= 2;
            if (n > 9) {
                n = (n % 10) + 1;
            }
        }

        sum += n;
        alternate = !alternate;
    }

    return (sum * 9) % 10;
}

function formatCardNumber(number) {
    return number.replace(/(\d{4})(?=\d)/g, '$1 ');
}
