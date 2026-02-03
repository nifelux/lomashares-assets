const input = document.getElementById("bvnNinInput");
const feedback = document.getElementById("idFeedback");

function validateBVN_NIN(value) {
    if (!/^\d{11}$/.test(value)) {
        return { valid: false, message: "ID must be exactly 11 digits" };
    }

    // BVN rule: 11 digits, not starting with 0
    if (value[0] !== "0") {
        return { valid: true, type: "BVN", message: "Valid BVN/NIN format" };
    }

    // NIN rule: 11 digits, usually starts with 1 or 2
    if (value.startsWith("1") || value.startsWith("2")) {
        return { valid: true, type: "NIN", message: "Valid NIN/BVN format" };
    }

    return { valid: false, message: "Invalid BVN/NIN format" };
}

input.addEventListener("input", () => {
    const value = input.value.trim();

    if (value.length < 11) {
        feedback.textContent = "";
        return;
    }

    const result = validateBVN_NIN(value);

    if (result.valid) {
        feedback.textContent = `${result.message}`;
        feedback.style.color = "green";
    } else {
        feedback.textContent = result.message;
        feedback.style.color = "red";
    }
});
