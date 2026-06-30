// ==============================
// PAGE LOAD ANIMATION
// ==============================

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// ==============================
// POPUP
// ==============================

const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

if (closePopup) {

    closePopup.addEventListener("click", () => {

        popup.classList.remove("active");

    });

}

if (popup) {

    popup.addEventListener("click", (e) => {

        if (e.target === popup) {

            popup.classList.remove("active");

        }

    });

}

// ==============================
// UPI DETAILS
// ==============================

const upiID = "hency2401p-1@okicici";

const payeeName = "PARVANI HENCY MUKESH";

// ==============================
// COPY UPI
// ==============================

function copyUPI() {

    navigator.clipboard.writeText(upiID);

    const msg = document.getElementById("copyMessage");

    msg.innerHTML = "✅ UPI ID Copied Successfully!";

    setTimeout(() => {

        msg.innerHTML = "";

    }, 2500);

}

// ==============================
// PAY WITH UPI
// ==============================

function payUPI() {

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isMobile) {

        popup.classList.add("active");

        return;

    }

    navigator.clipboard.writeText(upiID);

    const url =
        `upi://pay?pa=${upiID}&pn=${encodeURIComponent(payeeName)}&cu=INR&tn=${encodeURIComponent("Help My Sister Buy iPhone 17")}`;

    window.location.href = url;

}