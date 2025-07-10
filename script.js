const messagesByAccount = {
    facebook: [
        "Initializing Hack tool",
        "Connecting to Facebook",
        "Connecting to server 1",
        "Connection failed. Retrying...",
        "Connecting to server 2",
        "Connected Successfully...",
        "USERNAME_PLACEHOLDER",
        "Trying Brute Force",
        "200K passwords tried...",
        "Match not found",
        "Another 200K passwords tried...",
        "Match not found",
        "Another 200K passwords tried...",
        "Match not found",
        "Another 200K passwords tried...",
        "Match found",
        "Accessing Account",
        "Hack Successful"
    ],
    instagram: [
        "Initializing Hack tool...",
        "Connecting to Instagram...",
        "Connecting to server 1...",
        "Connection failed. Retrying...",
        "Connecting to server 2...",
        "Connected Successfully...",
        "USERNAME_PLACEHOLDER...",
        "Trying Brute Force...",
        "200K passwords tried...",
        "Match not found...",
        "Another 200K passwords tried...",
        "Match not found...",
        "Another 200K passwords tried...",
        "Match not found..",
        "Another 200K passwords tried...",
        "Match found...",
        "Accessing Account..",
        "Hack Successful..."
    ],
    whatsapp: [
        "Initializing Hack tool...",
        "Connecting to Whatsapp..",
        "Connecting to server 1...",
        "Connected Successfully...",
        "PHONE_NUMBER_PLACEHOLDER...",
        "Trying Exploit...",
        "Bypassing security...",
        "Access granted!...",
        "Hack Successful..."
    ]
};

document.getElementById('start-btn').addEventListener('click', async () => {
    const account = document.getElementById('account-select').value;
    let messages = [...messagesByAccount[account]];
    const consoleDiv = document.getElementById('hacker-console');
    consoleDiv.innerHTML = ""; // Clear previous output

    if (account === "whatsapp") {
        let phone = prompt("Enter WhatsApp phone number:");
        if (!phone) phone = "Unknown Number";
        const idx = messages.indexOf("PHONE_NUMBER_PLACEHOLDER...");
        if (idx !== -1) {
            messages[idx] = `Phone number ${phone}...`;
        }
    } else {
        let username = prompt("Enter username:");
        if (!username) username = "Unknown User";
        const idx = messages.indexOf("USERNAME_PLACEHOLDER...");
        if (idx !== -1) {
            messages[idx] = `Username ${username}...`;
        }
    }

    for (const msg of messages) {
        consoleDiv.innerHTML += msg + "<br>";
        await new Promise(res => setTimeout(res, 1200));
    }

    // After hack is successful, alert the user again
    setTimeout(() => {
        const answer = alert("SYSTEM HACKED SUCCESSFULLY...");
        if (answer && answer.toLowerCase().startsWith('y')) {
            document.getElementById('start-btn').click();
        } else {
            consoleDiv.innerHTML += "<br><b style='color:#ff3333;'> your System will be hacked..</b>";
        }
    }, );
});

// Matrix binary rain effect
const canvas = document.getElementById('matrix-rain');
const ctx = canvas.getContext('2d');

function resizeMatrixCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeMatrixCanvas();
window.addEventListener('resize', resizeMatrixCanvas);

const letters = '01';
const fontSize = 18;
const columns = () => Math.floor(canvas.width / fontSize);
let drops = Array(columns()).fill(1);

function drawMatrix() {
    ctx.fillStyle = 'rgba(17, 17, 17, 0.15)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = fontSize + "px Consolas, monospace";
    ctx.fillStyle = "#33ff33";
    for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 40);