// LomaShares Transactions Module

// FILTER
const filter = document.getElementById("txFilter");
const cards = document.querySelectorAll(".transaction-card");

if (filter) {
    filter.addEventListener("change", () => {
        const value = filter.value;
        cards.forEach(card => {
            card.style.display =
                value === "all" || card.dataset.type === value ? "block" : "none";
        });
    });
}

// EXPAND CARD
document.querySelectorAll(".expand-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const extra = btn.closest(".transaction-card").querySelector(".tx-extra");
        extra.style.display = extra.style.display === "block" ? "none" : "block";
    });
});

// INFINITE SCROLL (DEMO)
window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
        const loader = document.querySelector(".loading");
        if (loader) loader.style.display = "block";
    }
});
