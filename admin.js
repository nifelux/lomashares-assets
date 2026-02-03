function getWalletByEmail(email) {
  return JSON.parse(localStorage.getItem(`lomashares_wallet_${email}`));
}

function saveWalletByEmail(email, wallet) {
  localStorage.setItem(`lomashares_wallet_${email}`, JSON.stringify(wallet));
}

function approve() {
  const email = emailInput();
  const ref = referenceInput();
  const amount = amountInput();

  let wallet = getWalletByEmail(email);
  if (!wallet) return alert("Wallet not found");

  wallet.pendingBalance -= amount;
  wallet.approvedBalance += amount;

  wallet.transactions = wallet.transactions.map(tx => {
    if (tx.id === ref) tx.status = "Approved";
    return tx;
  });

  saveWalletByEmail(email, wallet);
  alert("Deposit Approved");
}

function reject() {
  const email = emailInput();
  const ref = referenceInput();
  const amount = amountInput();

  let wallet = getWalletByEmail(email);
  if (!wallet) return alert("Wallet not found");

  wallet.pendingBalance -= amount;

  wallet.transactions = wallet.transactions.map(tx => {
    if (tx.id === ref) tx.status = "Rejected";
    return tx;
  });

  saveWalletByEmail(email, wallet);
  alert("Deposit Rejected");
}

function emailInput() {
  return document.getElementById("email").value.trim();
}
function referenceInput() {
  return document.getElementById("reference").value.trim();
}
function amountInput() {
  return Number(document.getElementById("amount").value);
}
