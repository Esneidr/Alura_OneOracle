let secretNumber = generateSecretNumber();
let attempt = 1;

function assignTextElemnt(element, text) {
    let elemHMTL = document.querySelector(element);
    elemHMTL.innerHTML = text;
    return;
}

function userAttempt() {
    let userNumber = parseInt(document.getElementById('userNumber').value);

    if (userNumber === secretNumber) {
        assignTextElemnt('p', `¡Felicidades! Adivinaste el número. en ${attempt} ${attempt === 1 ? 'intento' : 'intentos'}.`);
        document.getElementById('restart').disabled = false;
        //document.getElementById('restart').removeAttribute('disabled');
    } else {
        if (userNumber > secretNumber) {
            assignTextElemnt('p', 'El número es menor. Intenta de nuevo.');
        } else {
            assignTextElemnt('p', 'El número es mayor. Intenta de nuevo.');
        }
        attempt++;
        clearInput();
    }
    return;
}

function clearInput() {
    document.getElementById('userNumber').value = '';
}

function generateSecretNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

function restartGame() {
    clearInput(); // Se limpia el campo de entrada
    messageStart(); // Se reinicia el mensaje de bienvenida
    secretNumber = generateSecretNumber();
    document.getElementById('restart').disabled = true;
    //document.getElementById('restart').setAttribute('disabled', 'true');
}

function messageStart() {
    assignTextElemnt('h1', '¡Bienvenido al juego!');
    assignTextElemnt('p', 'Adivina el número entre 1 y 10.');
}

messageStart();