const balanceEl = document.getElementById("walletBalance");
const messageEl = document.getElementById("walletMessage");

// Load balance
let balance = parseFloat(localStorage.getItem("lomashares_balance")) || 0;
balanceEl.textContent = balance.toLocaleString();

// Deposit
function deposit() {
    const amount = parseFloat(document.getElementById("depositAmount").value);

    if (!amount || amount <= 0) {
        showMessage("Enter a valid deposit amount", "red");
        return;
    }

    balance += amount;
    updateBalance();
    showMessage(`₦${amount.toLocaleString()} deposited successfully`, "green");
}

// Withdraw
function withdraw() {
    const amount = parseFloat(document.getElementById("withdrawAmount").value);

    if (!amount || amount <= 0) {
        showMessage("Enter a valid withdrawal amount", "red");
        return;
    }

    if (amount > balance) {
        showMessage("Insufficient balance", "red");
        return;
    }

    balance -= amount;
    updateBalance();
    showMessage(`₦${amount.toLocaleString()} withdrawn successfully`, "green");
}

// Update storage & UI
function updateBalance() {
    localStorage.setItem("lomashares_balance", balance);
    balanceEl.textContent = balance.toLocaleString();
}

// Message helper
function showMessage(text, color) {
    messageEl.textContent = text;
    messageEl.style.color = color;
}
