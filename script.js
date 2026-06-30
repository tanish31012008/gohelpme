// ==============================
// PAGE LOAD ANIMATION
// ==============================

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// ==============================
// UPI ID
// ==============================

const upiID = "hency2401p-1@okicici";

const copyBtn = document.getElementById("copyBtn");
const copyMessage = document.getElementById("copyMessage");
const upiText = document.getElementById("upiText");

// ==============================
// COPY FUNCTION
// ==============================

async function copyUPI() {

    try {

        await navigator.clipboard.writeText(upiID);

        if (copyBtn) {
            copyBtn.innerHTML = "✅ Copied!";
        }

        if (copyMessage) {
            copyMessage.innerHTML =
                "UPI ID copied successfully. Open Google Pay, PhonePe, Paytm or any UPI app and paste it.";
        }

        setTimeout(() => {

            if (copyBtn) {
                copyBtn.innerHTML = "📋 Copy UPI ID";
            }

        }, 2000);

    }

    catch (err) {

        alert("Couldn't copy the UPI ID.");

    }

}

// ==============================
// CLICKING THE UPI ID ALSO COPIES
// ==============================

if (upiText) {

    upiText.style.cursor = "pointer";

    upiText.addEventListener("click", copyUPI);

}

// ==============================
// COPY BUTTON
// ==============================

if (copyBtn) {

    copyBtn.addEventListener("click", copyUPI);

}