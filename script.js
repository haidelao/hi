const messages = [
    "no way ur fr rn?",
    "say yes pretty please :<",
    "but i lub u.... :<<<< <444444",
    "hubbyyy... pleaseeee",
    "dont click this anymoree",
    "baby just say yes",
    "</3 im so sad </3>",
    "dont talk to me again",
    "ill stop asking atp :<",
    "oops BUT DONT SAY NO ANYMORE"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}